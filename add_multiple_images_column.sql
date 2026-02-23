-- Run this in your Supabase SQL Editor to enable multiple product images

-- 1. Add 'images' column to hold the array of image URLs
ALTER TABLE products ADD COLUMN IF NOT EXISTS images JSONB DEFAULT '[]'::JSONB;

-- 2. Migrate existing single 'image' to the new 'images' array for backward compatibility
-- This prevents data loss for existing products
UPDATE products 
SET images = jsonb_build_array(image) 
WHERE (images IS NULL OR images = '[]'::JSONB) AND image IS NOT NULL AND image != '';

-- 3. Verify the column exists
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='products' AND column_name='images') THEN
        RAISE EXCEPTION 'Column images was not created successfully';
    END IF;
END $$;
