-- Add admin access policy for inquiries
-- Run this in your Supabase SQL Editor

-- Drop the policy if it already exists
DROP POLICY IF EXISTS "Admins manage all inquiries" ON inquiries;

-- Create the admin policy
CREATE POLICY "Admins manage all inquiries" 
ON inquiries FOR ALL TO authenticated 
USING (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() AND role = 'admin'
  )
);
