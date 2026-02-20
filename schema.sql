-- SUN-GATE ZAMBIA MASTER SCHEMA (v2 - Fixed RLS Recursion)

-- 1. DROP EXISTING TO START CLEAN
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS handle_new_user() CASCADE;
DROP FUNCTION IF EXISTS is_admin() CASCADE;
DROP TABLE IF EXISTS articles CASCADE;
DROP TABLE IF EXISTS installers CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS suppliers CASCADE;
DROP TABLE IF EXISTS inquiries CASCADE;
DROP TABLE IF EXISTS saved_products CASCADE;
DROP TABLE IF EXISTS calculator_results CASCADE;
DROP TABLE IF EXISTS profiles CASCADE;

-- 2. CREATE TABLES
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin', 'supplier')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE suppliers (
  id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  zra_tpin TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  address TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE products (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  supplier_id UUID REFERENCES suppliers(id),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price TEXT NOT NULL,
  image TEXT NOT NULL,
  specs JSONB DEFAULT '{}'::JSONB,
  verified BOOLEAN DEFAULT FALSE,
  duty_free BOOLEAN DEFAULT FALSE,
  slug TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE installers (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  rating DECIMAL(3,2) DEFAULT 0,
  reviews INTEGER DEFAULT 0,
  projects INTEGER DEFAULT 0,
  certified BOOLEAN DEFAULT FALSE,
  services TEXT[] DEFAULT '{}',
  logo TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE articles (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  category TEXT NOT NULL,
  author TEXT NOT NULL,
  date TEXT NOT NULL,
  image TEXT NOT NULL,
  content TEXT,
  slug TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE inquiries (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  buyer_id UUID REFERENCES profiles(id),
  supplier_id UUID REFERENCES profiles(id),
  product_id BIGINT REFERENCES products(id) ON DELETE SET NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'quoted', 'completed', 'cancelled')),
  quantity INTEGER DEFAULT 1,
  additional_notes TEXT,
  admin_response TEXT,
  quote_price DECIMAL,
  quote_pdf_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE saved_products (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id UUID REFERENCES profiles(id),
  product_id BIGINT REFERENCES products(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

CREATE TABLE calculator_results (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id UUID REFERENCES profiles(id),
  monthly_bill NUMERIC,
  system_size NUMERIC,
  estimated_cost NUMERIC,
  battery_capacity NUMERIC,
  panel_count INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. SECURITY (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE suppliers ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE installers ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE calculator_results ENABLE ROW LEVEL SECURITY;

-- Helper Function to avoid RLS recursion
CREATE OR REPLACE FUNCTION is_admin() 
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE sql SECURITY DEFINER;

-- Public Read Access
CREATE POLICY "Public read products" ON products FOR SELECT USING (true);
CREATE POLICY "Public read installers" ON installers FOR SELECT USING (true);
CREATE POLICY "Public read articles" ON articles FOR SELECT USING (true);
CREATE POLICY "Public read profiles" ON profiles FOR SELECT USING (true);
CREATE POLICY "Public read suppliers" ON suppliers FOR SELECT USING (true);

-- Seeding Policies (Temporary Public Insert - Disable after setup)
CREATE POLICY "Public insert products" ON products FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert installers" ON installers FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert articles" ON articles FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert profiles" ON profiles FOR INSERT WITH CHECK (true);

-- User/Supplier Specific Access
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Suppliers can update own info" ON suppliers FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Suppliers manage own products" ON products FOR ALL USING (supplier_id = auth.uid());

-- Admin Override
CREATE POLICY "Admins manage all products" ON products FOR ALL TO authenticated USING (is_admin());
CREATE POLICY "Admins manage all installers" ON installers FOR ALL TO authenticated USING (is_admin());
CREATE POLICY "Admins manage all articles" ON articles FOR ALL TO authenticated USING (is_admin());
CREATE POLICY "Admins manage all suppliers" ON suppliers FOR ALL TO authenticated USING (is_admin());
CREATE POLICY "Admins manage all profiles" ON profiles FOR ALL TO authenticated USING (is_admin());

-- Inquiries Policies
CREATE POLICY "Buyers can insert inquiries" ON inquiries FOR INSERT WITH CHECK (auth.uid() = buyer_id);
CREATE POLICY "Buyers can see own inquiries" ON inquiries FOR SELECT USING (auth.uid() = buyer_id);
CREATE POLICY "Suppliers can see received inquiries" ON inquiries FOR SELECT USING (auth.uid() = supplier_id);
CREATE POLICY "Suppliers can update received inquiries" ON inquiries FOR UPDATE USING (auth.uid() = supplier_id);
CREATE POLICY "Admins manage all inquiries" ON inquiries FOR ALL TO authenticated USING (is_admin());

-- Saved Products Policies
CREATE POLICY "Users can manage saved products" ON saved_products FOR ALL USING (auth.uid() = user_id);

-- Calculator Results Policies
CREATE POLICY "Users can manage calc results" ON calculator_results FOR ALL USING (auth.uid() = user_id);

-- 4. AUTOMATION
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    new.id, 
    new.email, 
    new.raw_user_meta_data->>'full_name', 
    COALESCE(new.raw_user_meta_data->>'role', 'user')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
