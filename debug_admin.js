
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ilhhsyrooonbedfiofsp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsaGhzeXJvb29uYmVkZmlvZnNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NDg0MDUsImV4cCI6MjA4NTMyNDQwNX0.U4chUgF7BAf0dSjIpPfzlXnsXuvipdSHw4BLH1qJF-Q'
const supabase = createClient(supabaseUrl, supabaseKey)

async function testFetch() {
    console.log('--- Testing Public Data Access ---')

    // 1. Fetch Products
    const { data: products, error: prodError } = await supabase.from('products').select('*')
    if (prodError) console.error('Products Error:', prodError.message)
    else console.log('Products found:', products.length)

    // 2. Fetch Profiles (Users)
    const { data: users, error: userError } = await supabase.from('profiles').select('*')
    if (userError) console.error('Users Error:', userError.message)
    else console.log('Users found:', users.length)

    // 3. Fetch Suppliers
    const { data: suppliers, error: suppError } = await supabase.from('suppliers').select('*')
    if (suppError) console.error('Suppliers Error:', suppError.message)
    else console.log('Suppliers found:', suppliers.length)

    if (products.length === 0) console.log('!!! WARNING: No products found. Table might be empty or permissions blocking read.')
    if (users.length === 0) console.log('!!! WARNING: No users found. Permissions likely blocking read.')
}

testFetch()
