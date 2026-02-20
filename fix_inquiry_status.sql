-- Drop the old status check constraint
ALTER TABLE inquiries DROP CONSTRAINT IF EXISTS inquiries_status_check;

-- Add new constraint with all status options
ALTER TABLE inquiries ADD CONSTRAINT inquiries_status_check 
CHECK (status IN ('pending', 'quoted', 'completed', 'cancelled'));
