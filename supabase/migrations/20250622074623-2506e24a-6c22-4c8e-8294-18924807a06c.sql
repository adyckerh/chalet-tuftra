
-- Create the api schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS api;

-- Create the Guest_inquiries table in the api schema
CREATE TABLE api.Guest_inquiries (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  check_in DATE,
  check_out DATE,
  guests INTEGER,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (optional, depending on your needs)
ALTER TABLE api.Guest_inquiries ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow public access (adjust as needed)
CREATE POLICY "Allow public access to guest inquiries" ON api.Guest_inquiries
FOR ALL USING (true);
