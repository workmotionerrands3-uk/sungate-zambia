-- FIX: Allow buyers (customers) to delete their own quote requests (inquiries)
-- Run this in the Supabase SQL Editor

-- Check if the policy exists and drop it if needed
DROP POLICY IF EXISTS "Buyers can delete own inquiries" ON inquiries;

-- Add the missing DELETE policy
CREATE POLICY "Buyers can delete own inquiries" 
ON inquiries FOR DELETE 
USING (auth.uid() = buyer_id);

-- Verify policies on the inquiries table
-- SELECT * FROM pg_policies WHERE tablename = 'inquiries';
