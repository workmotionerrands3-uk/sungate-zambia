-- 1. FIX PROFILES (Add missing 'phone' column)
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS phone text;

-- 2. FIX INQUIRIES (Add missing columns for quotes)
ALTER TABLE inquiries 
ADD COLUMN IF NOT EXISTS quantity integer DEFAULT 1,
ADD COLUMN IF NOT EXISTS additional_notes text,
ADD COLUMN IF NOT EXISTS admin_response text,
ADD COLUMN IF NOT EXISTS quote_price decimal;

-- 3. FIX RLS POLICIES (Drop old ones to be safe, then re-create)
DROP POLICY IF EXISTS "Users can see their own inquiries" ON inquiries;
DROP POLICY IF EXISTS "Users can insert their own inquiries" ON inquiries;
DROP POLICY IF EXISTS "Admins can view all inquiries" ON inquiries;
DROP POLICY IF EXISTS "Admins can update inquiries" ON inquiries;
DROP POLICY IF EXISTS "Admins can view and update all inquiries" ON inquiries;

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Allow Users to View/Insert their own
CREATE POLICY "Users can see their own inquiries"
ON inquiries FOR SELECT
USING (auth.uid() = buyer_id);

CREATE POLICY "Users can insert their own inquiries"
ON inquiries FOR INSERT
WITH CHECK (auth.uid() = buyer_id);

-- Allow Admins to View/Update EVERYTHING
CREATE POLICY "Admins can view and update all inquiries"
ON inquiries FOR ALL
USING (
  (SELECT role FROM profiles WHERE id = auth.uid()) = 'admin'
  OR
  (SELECT count(*) FROM profiles WHERE id = auth.uid() AND role = 'admin') > 0
);

-- 4. GRANT PERMISSIONS (Just in case)
GRANT ALL ON inquiries TO authenticated;
GRANT ALL ON inquiries TO service_role;
GRANT ALL ON profiles TO authenticated;
GRANT ALL ON profiles TO service_role;
