-- 1. RESTORE PROFILES FROM EXISTING USERS
-- Because schema.sql dropped the profiles table, existing users lost their profile data.
-- This block restores them from the auth.users table.
INSERT INTO public.profiles (id, email, full_name, role, created_at)
SELECT 
    id, 
    email, 
    raw_user_meta_data->>'full_name',
    COALESCE(raw_user_meta_data->>'role', 'user'),
    created_at
FROM auth.users
ON CONFLICT (id) DO NOTHING;

-- 2. SET YOUR ADMIN ROLE
-- Replace 'YOUR_EMAIL_HERE' with your actual email address to regain admin access.
UPDATE public.profiles 
SET role = 'admin' 
WHERE email = 'nawasimalumba@gmail.com';

-- 3. SEED MARKETPLACE DATA
-- Insert sample suppliers if none exist
INSERT INTO public.suppliers (id, company_name, is_verified, address, phone)
SELECT id, 'SunGate Official Store', true, 'Lusaka, Zambia', '+260 97 000000'
FROM public.profiles 
WHERE role = 'admin' 
LIMIT 1;

-- Prepare a fallback supplier ID (using the first admin found)
DO $$
DECLARE
    admin_id UUID;
BEGIN
    SELECT id INTO admin_id FROM public.profiles WHERE role = 'admin' LIMIT 1;
    
    IF admin_id IS NOT NULL THEN
        -- Insert Sample Products
        INSERT INTO public.products (supplier_id, name, category, price, image, verified, slug, specs)
        VALUES 
        (admin_id, '540W Monocrystalline Solar Panel', 'panels', 'K3,500', '/assets/marketplace-banner.png', true, '540w-mono-panel', '{"efficiency": "21%", "warranty": "25 years"}'::jsonb),
        (admin_id, 'Growatt 5kW Hybrid Inverter', 'inverters', 'K18,000', '/assets/solar-kit.png', true, 'growatt-5kw-inverter', '{"type": "Hybrid", "output": "5000W"}'::jsonb),
        (admin_id, 'Pylontech US3000C 3.5kWh Battery', 'batteries', 'K22,000', '/assets/financing.png', true, 'pylontech-us3000c', '{"capacity": "3.5kWh", "cycles": "6000+"}'::jsonb),
        (admin_id, 'Complete 5kW Solar Kit (Off-Grid)', 'kits', 'K65,000', '/assets/solar-kit.png', true, '5kw-offgrid-kit', '{"panels": "8x 450W", "inverter": "5kW", "battery": "5kWh"}'::jsonb);
    END IF;
END $$;

-- 4. SEED INSTALLERS
INSERT INTO public.installers (name, location, rating, reviews, projects, certified, services, logo)
VALUES 
('Lusaka Solar Experts', 'Lusaka', 4.8, 124, 350, true, ARRAY['Residential', 'Commercial'], 'https://ui-avatars.com/api/?name=L+S&background=random'),
('Copperbelt Energy Solutions', 'Kitwe', 4.6, 89, 210, true, ARRAY['Industrial', 'Maintenance'], 'https://ui-avatars.com/api/?name=C+E&background=random'),
('Zambia Green Power', 'Livingstone', 4.9, 56, 120, true, ARRAY['Off-Grid', 'Residential'], 'https://ui-avatars.com/api/?name=Z+G&background=random');

-- 5. SEED KNOWLEDGE HUB
INSERT INTO public.articles (title, excerpt, category, author, date, image, content, slug)
VALUES
('Understanding ZESCO Tariffs', 'How to calculate your savings by switching to solar in 2024.', 'Guide', 'SunGate Team', 'Feb 2024', '/assets/standards.png', 'Full content here...', 'zesco-tariffs-guide'),
('Best Batteries for Load Shedding', 'Li-ion vs Lead Acid: Which one creates the best backup system?', 'Technology', 'Engineering Dept', 'Jan 2024', '/assets/net-metering.png', 'Full content here...', 'best-batteries-2024');
