-- Fix storage bucket policies for PDF uploads
-- Run this in your Supabase SQL Editor

-- Enable RLS on the storage.objects table for the quotes bucket
-- This allows fine-grained control over who can upload/download files

-- Allow admins to upload quote PDFs
CREATE POLICY "Admins can upload quotes"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'quotes' AND
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- Allow admins to read/download quote PDFs
CREATE POLICY "Admins can read quotes"
ON storage.objects FOR SELECT
TO authenticated
USING (
  bucket_id = 'quotes' AND
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- Allow public read access to quotes (so customers can download their quotes)
CREATE POLICY "Public can read quotes"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'quotes');

-- Allow admins to update quote PDFs
CREATE POLICY "Admins can update quotes"
ON storage.objects FOR UPDATE
TO authenticated
USING (
  bucket_id = 'quotes' AND
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- Allow admins to delete quote PDFs
CREATE POLICY "Admins can delete quotes"
ON storage.objects FOR DELETE
TO authenticated
USING (
  bucket_id = 'quotes' AND
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() AND role = 'admin'
  )
);
