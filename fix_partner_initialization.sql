-- Partner Initialization Script for SunGate Zambia - v6 (Two-Step Fix)
-- TO AVOID ERRORS: Run STEP 1 first, then STEP 2.

-- ==========================================
-- STEP 1: FIX SCHEMA (Run this first)
-- ==========================================

-- 1. Relax role constraint on profiles
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_role_check;
ALTER TABLE public.profiles ADD CONSTRAINT profiles_role_check CHECK (role IN ('user', 'admin', 'supplier', 'installer'));

-- 2. Add user_id column to installers
ALTER TABLE public.installers ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES public.profiles(id) UNIQUE;

-- ==========================================
-- STEP 2: INITIALIZE DATA (Run this second)
-- ==========================================

DO $$
BEGIN
    -- 1. Initialize existing Suppliers
    INSERT INTO public.suppliers (id, company_name, phone, zra_tpin, is_verified)
    SELECT 
        id, 
        COALESCE(full_name, 'New Supplier'),
        'Not Provided',
        'Not Provided',
        false
    FROM public.profiles
    WHERE role = 'supplier'
    AND id NOT IN (SELECT id FROM public.suppliers)
    ON CONFLICT (id) DO NOTHING;

    -- 2. Initialize existing Installers (Using EXECUTE to ensure column is recognized)
    EXECUTE $query$
        INSERT INTO public.installers (user_id, name, location, rating, projects, services, certified)
        SELECT 
            id, 
            COALESCE(full_name, 'New Installer'),
            'Lusaka', 
            5.0, 
            0, 
            ARRAY['Solar Installation', 'Maintenance'],
            false
        FROM public.profiles
        WHERE role = 'installer'
        AND id NOT IN (SELECT user_id FROM public.installers WHERE user_id IS NOT NULL)
        ON CONFLICT (user_id) DO NOTHING
    $query$;

END $$;

-- 3. Update handle_new_user function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Insert into profiles
  INSERT INTO public.profiles (id, full_name, email, role)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'role', 'user')
  );

  -- Handle Supplier initialization
  IF (NEW.raw_user_meta_data->>'role' = 'supplier') THEN
    INSERT INTO public.suppliers (id, company_name, phone, zra_tpin, is_verified)
    VALUES (
      NEW.id, 
      COALESCE(NEW.raw_user_meta_data->>'full_name', 'New Supplier'),
      'Not Provided',
      'Not Provided',
      false
    );
  END IF;

  -- Handle Installer initialization
  IF (NEW.raw_user_meta_data->>'role' = 'installer') THEN
    -- Note: This references the column we just added in Step 1
    INSERT INTO public.installers (user_id, name, location, rating, projects, services, certified)
    VALUES (
      NEW.id, 
      COALESCE(NEW.raw_user_meta_data->>'full_name', 'New Installer'),
      'Lusaka', 
      5.0, 
      0,
      ARRAY['Solar Installation', 'Maintenance'],
      false
    );
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;
