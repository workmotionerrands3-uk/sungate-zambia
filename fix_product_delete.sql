-- Fix foreign key constraints to allow product deletion
-- Run this in your Supabase SQL Editor

-- First, drop the existing constraints
ALTER TABLE inquiries DROP CONSTRAINT IF EXISTS inquiries_product_id_fkey;
ALTER TABLE saved_products DROP CONSTRAINT IF EXISTS saved_products_product_id_fkey;

-- Re-create them with proper ON DELETE behavior
ALTER TABLE inquiries 
ADD CONSTRAINT inquiries_product_id_fkey 
FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL;

ALTER TABLE saved_products 
ADD CONSTRAINT saved_products_product_id_fkey 
FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE;
