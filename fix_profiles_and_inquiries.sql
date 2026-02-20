-- Add phone column to profiles table
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS phone text;

-- Make sure we can update it
CREATE POLICY "Users can update own profile phone" 
ON profiles FOR UPDATE 
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Ensure Admins can see it (already covered by "Admins manage all profiles" but good to be safe)
-- Verify inquiries table text/notes columns too (just in case)
ALTER TABLE inquiries 
ADD COLUMN IF NOT EXISTS quantity integer DEFAULT 1,
ADD COLUMN IF NOT EXISTS additional_notes text,
ADD COLUMN IF NOT EXISTS admin_response text,
ADD COLUMN IF NOT EXISTS quote_price decimal;
