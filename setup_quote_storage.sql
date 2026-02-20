-- Create the 'quotes' storage bucket for PDF uploads
INSERT INTO storage.buckets (id, name, public)
VALUES ('quotes', 'quotes', true)
ON CONFLICT (id) DO NOTHING;

-- Add quote_pdf_url column to inquiries table (if it doesn't exist)
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'inquiries' AND column_name = 'quote_pdf_url'
    ) THEN
        ALTER TABLE inquiries ADD COLUMN quote_pdf_url TEXT;
    END IF;
END $$;

-- Storage policies for quotes bucket
-- Policy 1: Allow authenticated admins to upload PDFs
CREATE POLICY "Admin can upload quote PDFs"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
    bucket_id = 'quotes' 
    AND (SELECT role FROM profiles WHERE id = auth.uid()) = 'admin'
);

-- Policy 2: Allow public to read/view quote PDFs
CREATE POLICY "Public can view quote PDFs"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'quotes');

-- Policy 3: Allow admins to update/replace quote PDFs
CREATE POLICY "Admin can update quote PDFs"
ON storage.objects FOR UPDATE
TO authenticated
USING (
    bucket_id = 'quotes'
    AND (SELECT role FROM profiles WHERE id = auth.uid()) = 'admin'
);

-- Policy 4: Allow admins to delete quote PDFs
CREATE POLICY "Admin can delete quote PDFs"
ON storage.objects FOR DELETE
TO authenticated
USING (
    bucket_id = 'quotes'
    AND (SELECT role FROM profiles WHERE id = auth.uid()) = 'admin'
);
