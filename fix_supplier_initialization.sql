-- 1. Initialize existing suppliers who are missing records
-- This ensures all users with the 'supplier' role have a corresponding entry in the suppliers table
INSERT INTO public.suppliers (id, company_name, is_verified)
SELECT id, COALESCE(full_name, 'New Supplier'), FALSE
FROM public.profiles
WHERE role = 'supplier'
AND id NOT IN (SELECT id FROM public.suppliers)
ON CONFLICT (id) DO NOTHING;

-- 2. Update the handle_new_user function to automatically handle suppliers
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Insert into profiles
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    new.id, 
    new.email, 
    new.raw_user_meta_data->>'full_name', 
    COALESCE(new.raw_user_meta_data->>'role', 'user')
  );

  -- If the role is supplier, also insert into suppliers
  IF (COALESCE(new.raw_user_meta_data->>'role', 'user') = 'supplier') THEN
    INSERT INTO public.suppliers (id, company_name)
    VALUES (
      new.id,
      COALESCE(new.raw_user_meta_data->>'full_name', 'New Supplier')
    );
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- 3. Verify RLS for suppliers (Ensure suppliers can update their own info)
ALTER TABLE suppliers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Suppliers can update own info" ON suppliers;
CREATE POLICY "Suppliers can update own info" 
ON suppliers FOR UPDATE 
USING (auth.uid() = id);

DROP POLICY IF EXISTS "Public read suppliers" ON suppliers;
CREATE POLICY "Public read suppliers" 
ON suppliers FOR SELECT 
USING (true);

-- Grant permissions
GRANT ALL ON suppliers TO authenticated;
GRANT ALL ON suppliers TO service_role;
