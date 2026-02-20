-- Fix storage bucket policies for public access
-- First, drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Admin can upload quote PDFs" ON storage.objects;
DROP POLICY IF EXISTS "Public can view quote PDFs" ON storage.objects;
DROP POLICY IF EXISTS "Admin can update quote PDFs" ON storage.objects;
DROP POLICY IF EXISTS "Admin can delete quote PDFs" ON storage.objects;

-- Recreate with correct syntax
-- Policy 1: Allow authenticated admins to upload PDFs
CREATE POLICY "Admin can upload quote PDFs"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
    bucket_id = 'quotes' 
    AND EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Policy 2: Allow ANYONE (public + authenticated) to view quote PDFs
CREATE POLICY "Anyone can view quote PDFs"
ON storage.objects FOR SELECT
USING (bucket_id = 'quotes');

-- Policy 3: Allow admins to update/replace quote PDFs
CREATE POLICY "Admin can update quote PDFs"
ON storage.objects FOR UPDATE
TO authenticated
USING (
    bucket_id = 'quotes'
    AND EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Policy 4: Allow admins to delete quote PDFs
CREATE POLICY "Admin can delete quote PDFs"
ON storage.objects FOR DELETE
TO authenticated
USING (
    bucket_id = 'quotes'
    AND EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Make sure the bucket is public
UPDATE storage.buckets SET public = true WHERE id = 'quotes';
