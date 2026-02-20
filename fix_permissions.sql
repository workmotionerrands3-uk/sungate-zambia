
-- 1. DROP EXISTING POLICIES (To fix "Policy already exists" errors)
DROP POLICY IF EXISTS "Admins manage all products" ON products;
DROP POLICY IF EXISTS "Admins manage all profiles" ON profiles;
DROP POLICY IF EXISTS "Admins manage all installers" ON installers;
DROP POLICY IF EXISTS "Admins manage all articles" ON articles;
DROP POLICY IF EXISTS "Admins manage all suppliers" ON suppliers;

-- 2. RE-CREATE ADMIN CHECK FUNCTION (Safe to run multiple times)
CREATE OR REPLACE FUNCTION is_admin() 
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE sql SECURITY DEFINER;

-- 3. APPLY NEW POLICIES (Grant full access to admins)
CREATE POLICY "Admins manage all products" ON products FOR ALL TO authenticated USING (is_admin());
CREATE POLICY "Admins manage all profiles" ON profiles FOR ALL TO authenticated USING (is_admin());
CREATE POLICY "Admins manage all installers" ON installers FOR ALL TO authenticated USING (is_admin());
CREATE POLICY "Admins manage all articles" ON articles FOR ALL TO authenticated USING (is_admin());
CREATE POLICY "Admins manage all suppliers" ON suppliers FOR ALL TO authenticated USING (is_admin());
