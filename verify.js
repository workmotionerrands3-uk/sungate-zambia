import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.VITE_SUPABASE_ANON_KEY
)

async function verify() {
    console.log('--- Verifying Supabase Data ---')

    const { data: products, count: pCount } = await supabase.from('products').select('*', { count: 'exact' })
    console.log(`Products: Found ${pCount} items. First item: ${products?.[0]?.name || 'N/A'}`)

    const { data: installers, count: iCount } = await supabase.from('installers').select('*', { count: 'exact' })
    console.log(`Installers: Found ${iCount} items. First item: ${installers?.[0]?.name || 'N/A'}`)

    const { data: articles, count: aCount } = await supabase.from('articles').select('*', { count: 'exact' })
    console.log(`Articles: Found ${aCount} items. First item: ${articles?.[0]?.title || 'N/A'}`)

    if (pCount > 0 && iCount > 0 && aCount > 0) {
        console.log('\n✅ Verification Successful: All tables contain data!')
    } else {
        console.log('\n⚠️ Verification Incomplete: Some tables appear empty.')
    }
}

verify()
