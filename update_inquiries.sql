-- Create or Update Inquiries Table
create table if not exists inquiries (
  id uuid default uuid_generate_v4() primary key,
  product_id uuid references products(id) on delete cascade,
  buyer_id uuid references profiles(id) on delete cascade,
  supplier_id uuid references suppliers(id) on delete set null,
  status text default 'pending', -- pending, processed, quoted, closed
  message text,
  quantity integer default 1,
  additional_notes text,
  admin_response text,
  quote_price decimal,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Enable RLS
alter table inquiries enable row level security;

-- Policies
create policy "Users can see their own inquiries"
  on inquiries for select
  using (auth.uid() = buyer_id);

create policy "Users can insert their own inquiries"
  on inquiries for insert
  with check (auth.uid() = buyer_id);

create policy "Admins can view all inquiries"
  on inquiries for select
  using (is_admin());

create policy "Admins can update inquiries"
  on inquiries for update
  using (is_admin());
