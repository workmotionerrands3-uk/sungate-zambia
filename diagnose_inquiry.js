
import { supabase } from './src/lib/supabase.js'

async function testInquiryInsert() {
    console.log("Starting diagnostic test...")

    // 1. Check Session
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
        console.error("❌ No active session. Please login in the browser first? (Can't test RLS without user)")
        // Actually, for a script, we might need to login manually or use a test account? 
        // We'll skip this if run in node, but maybe we can just query the table structure?
    } else {
        console.log("✅ Authenticated as:", session.user.email)
    }

    // 2. Try to fetch one product to get an ID
    const { data: products } = await supabase.from('products').select('id, supplier_id').limit(1)
    if (!products || products.length === 0) {
        console.error("❌ No products found to test with.")
        return
    }
    const product = products[0]
    console.log("Found product:", product)

    // 3. Try INSERT
    if (session) {
        console.log("Attempting INSERT into 'inquiries'...")
        const { data, error } = await supabase
            .from('inquiries')
            .insert([{
                product_id: product.id,
                supplier_id: product.supplier_id,
                buyer_id: session.user.id,
                quantity: 5,
                additional_notes: 'Test note from diagnostic script',
                message: 'Diagnostic Test',
                status: 'pending'
            }])
            .select()

        if (error) {
            console.error("❌ INSERT FAILED:", error)
        } else {
            console.log("✅ INSERT SUCCESS:", data)
        }
    } else {
        console.log("Skipping INSERT because no session. Please check browser console for 'Error sending inquiry'.")
    }
}

testInquiryInsert()
