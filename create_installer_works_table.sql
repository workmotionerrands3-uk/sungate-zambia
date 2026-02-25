-- SQL Migration: Create installer_works table
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS installer_works (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    installer_id BIGINT REFERENCES installers(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    images JSONB DEFAULT '[]'::JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE installer_works ENABLE ROW LEVEL SECURITY;

-- Helper function for admin check (redundant if already exists, but safe)
CREATE OR REPLACE FUNCTION is_admin() 
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE sql SECURITY DEFINER;

-- Policies
CREATE POLICY "Public read installer works" ON installer_works
    FOR SELECT USING (true);

CREATE POLICY "Admins manage all installer works" ON installer_works
    FOR ALL TO authenticated USING (is_admin());

-- Index for performance
CREATE INDEX IF NOT EXISTS idx_installer_works_installer_id ON installer_works(installer_id);
