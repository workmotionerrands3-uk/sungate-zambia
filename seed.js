import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.VITE_SUPABASE_ANON_KEY
)

const products = [
    { name: 'Insolar Mbizi 1.5kVA Package', category: 'Kits', price: 'K16,240', image: '/assets/solar-kit.png', specs: { Capacity: '1.5kVA', Type: 'Home Backup', Warranty: '2 Years' }, verified: true, duty_free: true },
    { name: 'Insolar Rhino 3.5kVA Package', category: 'Kits', price: 'K36,120', image: '/assets/solar-kit.png', specs: { Capacity: '3.5kVA', Type: 'Full Home', Warranty: '2 Years' }, verified: true, duty_free: true },
    { name: 'Pylontech 4.8kWh Lithium Battery', category: 'Batteries', price: 'K23,950', image: '/assets/standards.png', specs: { Brand: 'Freshtec', Capacity: '4.8kWh', Cycles: '6000+' }, verified: true, duty_free: true },
    { name: 'Dayliff DDA Submersible Pump', category: 'Pumps', price: 'K3,430', image: '/assets/hero.png', specs: { Brand: 'Davis & Shirtliff', Type: 'Submersible', Power: 'Solar Ready' }, verified: true, duty_free: true },
    { name: '5.5kW Hybrid Inverter (VenYou)', category: 'Inverters', price: 'K21,000', image: '/assets/marketplace-banner.png', specs: { Power: '5.5kW', Type: 'Hybrid', Priority: 'Solar/Battery' }, verified: true, duty_free: true },
    { name: 'Lexmo 1HP Solar Pump Kit', category: 'Pumps', price: 'K14,500', image: '/assets/solar-kit.png', specs: { Power: '1HP', Panels: '2 x 280W included', Warranty: '1 Year' }, verified: true, duty_free: true },
    { name: 'Insolar Ndlovu 6.2kVA Package', category: 'Kits', price: 'K55,440', image: '/assets/hero.png', specs: { Capacity: '6.2kVA', Type: 'Industrial/Large Home', Features: 'Lithium Ready' }, verified: true, duty_free: true },
    { name: 'Radian Standard 200L Geyser', category: 'Water Heaters', price: 'K9,850', image: '/assets/hero.png', specs: { Brand: 'Radian', Capacity: '200L', Type: 'Non-Pressure' }, verified: true, duty_free: true },
    { name: 'Radian Pressurized 150L Geyser', category: 'Water Heaters', price: 'K16,600', image: '/assets/hero.png', specs: { Brand: 'Radian', Capacity: '150L', Type: 'Pressurized' }, verified: true, duty_free: true },
    { name: 'Falcon 150L Solar Geyser', category: 'Water Heaters', price: 'K9,000', image: '/assets/hero.png', specs: { Brand: 'Falcon', Capacity: '150L', Type: 'Standard' }, verified: true, duty_free: true },
    { name: 'Felicity 12V 200Ah Gel Battery', category: 'Batteries', price: 'K4,800', image: '/assets/standards.png', specs: { Type: 'Lead-Acid Gel', Capacity: '200Ah', Voltage: '12V' }, verified: true, duty_free: true },
    { name: 'Deye 10.2kWh Lithium Battery', category: 'Batteries', price: 'K29,630', image: '/assets/standards.png', specs: { Brand: 'Deye', Capacity: '10.2kWh', Type: 'Li-ion (200Ah)' }, verified: true, duty_free: true },
    { name: 'CFE 12.8V Lithium Battery', category: 'Batteries', price: 'K9,500', image: '/assets/standards.png', specs: { Capacity: '100Ah', Type: 'Li-ion', Features: 'Drop-in 12V' }, verified: true, duty_free: true },
    { name: 'Felicity 5.1kWh Lithium (24V)', category: 'Batteries', price: 'K19,700', image: '/assets/standards.png', specs: { Capacity: '200Ah', Voltage: '24V', Energy: '5.1kWh' }, verified: true, duty_free: true }
]

const installers = [
    { name: 'Insolar Zambia', location: 'Lusaka', rating: 4.9, reviews: 156, projects: 600, certified: true, services: ['Residential Packages', 'Mbizi & Rhino Series', 'Backup Systems'], logo: '/assets/financing.png' },
    { name: 'Sunray Power Company', location: 'Munali Rd, Lusaka / Monze', rating: 4.8, reviews: 92, projects: 410, certified: true, services: ['Supercapacitor Storage', 'Capwell Series', 'Rural Projects'], logo: '/assets/financing.png' },
    { name: 'Davis & Shirtliff Zambia', location: 'Lumumba Road, Lusaka (National)', rating: 4.9, reviews: 420, projects: 2500, certified: true, services: ['Solar Pumping', 'Dayliff Systems', 'Water Solutions'], logo: '/assets/financing.png' },
    { name: 'E Solar Tech Zambia', location: 'Chingola (Riverside) / Lusaka', rating: 4.7, reviews: 45, projects: 130, certified: true, services: ['Off-grid Systems', 'Solar Geysers', 'CCTV Integration'], logo: '/assets/financing.png' },
    { name: 'Zambezi Amigo Solar (ZamSolar)', location: 'Chindo Road, Lusaka', rating: 4.8, reviews: 67, projects: 210, certified: true, services: ['EPC Commercial', 'Residential Storage', 'Microgrids'], logo: '/assets/financing.png' },
    { name: 'Muhanya Solar', location: 'Northmead, Lusaka', rating: 4.6, reviews: 38, projects: 180, certified: true, services: ['Community Projects', 'Rural Electrification', 'Solar Training'], logo: '/assets/financing.png' },
    { name: '7x7 Zambia Limited', location: 'Kabwe (Makwati Plot 71)', rating: 4.5, reviews: 24, projects: 85, certified: true, services: ['Residential Solar', 'Central Province Support'], logo: '/assets/financing.png' }
]

const articles = [
    {
        title: 'The Ultimate Guide to Solar Financing in Zambia (2026)',
        excerpt: 'A deep-dive into collateral-free loans, 72-month retail finance, and green credit lines from Zanaco, Stanbic, and ABSA.',
        category: 'Financing',
        author: 'Mulenga Kapwepwe',
        date: 'Jan 30, 2026',
        image: '/assets/financing.png',
        content: `Financing remains the single biggest hurdle for Zambian households looking to switch to renewable energy. However, 2026 has seen a monumental shift in how local banks perceive solar assets. Unlike traditional personal loans which carry interest rates upwards of 30%, "Green Loans" are now being offered at specialized rates between 18% and 24%, thanks to liquidity support from international climate funds.

Zanaco's Agri-Solar initiative is currently the market leader for rural and peri-urban areas. They provide up to K500,000 for solar irrigation and cold storage, with a grace period that aligns with harvest cycles. This means farmers only start paying back the principal once they've sold their crops. For urban residents, Stanbic’s Climate Finance facility is the gold standard, offering a 72-month repayment window. On a K40,000 system, your monthly repayment could be as low as K950—often less than what many families spend on charcoal or diesel for backup generators.

To succeed in your application, you must present a 'SunGate Verified' quotation. Banks have become wary of "briefcase" installers, and they now require proof that the system is ZS 405 compliant. Ensure your NRC is up to date, and if you are self-employed, bring your last 6 months of mobile money or bank statements. These statements are now widely accepted as valid proof of income by most specialized lending desks at major Zambian banks.`
    },
    {
        title: 'ZESCO Net Metering: Technical Requirements and ROI Analysis',
        excerpt: 'Everything you need to know about the K1.35/kWh buy-back rate and how to apply for a bi-directional meter.',
        category: 'ZESCO Info',
        author: 'Eng. Chanda Musonda',
        date: 'Jan 30, 2026',
        image: '/assets/net-metering.png',
        content: `The Energy Regulation Board (ERB) recently finalized the Net Metering guidelines, a move that officially transforms the Zambian power grid into a two-way street. For most homeowners, the most important figure is K1.35. This is the rate at which ZESCO will credit your account for every unit of electricity you export. While this is lower than the retail tariff you pay, it significantly accelerates your Return on Investment (ROI).

Technically, you cannot simply plug your solar system into the grid. You require a Grid-Tie or Hybrid Inverter that is "Anti-islanding" certified. This safety feature ensures that if ZESCO workers are fixing a line during load-shedding, your solar system doesn't accidentally feed power into that line and cause a fatality. Once your system is installed by an ERB-licensed professional, you must apply to ZESCO for a "Bi-directional Meter." This meter tracks both what you consume and what you produce.

From an ROI perspective, a typical 5kW system in Lusaka generates about 22kWh per day. If your family is at work or school during the day, you might export 15kWh of that production. Over a month, that's nearly 450 units of electricity sold back to the grid. At the K1.35 rate, you receive a K600 credit on your bill. Over 25 years (the lifespan of the panels), this adds up to over K180,000 in direct savings and earnings—essentially making your solar system free after the first 48 months of operation.`
    },
    {
        title: 'Battery Chemistry: Why Lithium is Winning in Zambia',
        excerpt: 'Comparing Lead-Acid Gel vs. LiFePO4 batteries in high-temperature environments like the Copperbelt.',
        category: 'Technology',
        author: 'Bwalya Phiri',
        date: 'Jan 28, 2026',
        image: '/assets/standards.png',
        content: `For decades, Zambians relied on Lead-Acid and Gel batteries for backup power. They were cheap to buy upfront, but their performance in the Zambian climate has always been subpar. Lead-acid batteries are highly sensitive to "Depth of Discharge" (DoD). If you use more than 50% of their capacity, their lifespan drops from 3 years to 6 months. In the context of 12-hour load-shedding, these batteries are often drained to 0%, causing them to swell and fail rapidly.

Enter Lithium Iron Phosphate (LiFePO4). This chemistry is the current champion for Zambian conditions. Lithium batteries can be safely discharged to 95% without damage. This means a 5kWh Lithium battery provides nearly double the usable energy of a 5kWh Lead-Acid battery. More importantly, they handle heat much better. While a Gel battery's life is halved for every 8 degrees above 25°C, Lithium remains stable even in the 35°C+ heat of the Luangwa Valley or the Copperbelt.

Cost remains the final barrier, but the gap is closing. A high-quality Pylontech or Deye lithium battery costs about 3 times more than a Gel equivalent, but it lasts 10 times longer (6,000 cycles vs 600 cycles). When you calculate the "Levelized Cost of Storage" (LCOS), Lithium costs about K0.45 per kWh stored, while Lead-Acid costs over K2.20 per kWh because of frequent replacements. If you are building a system today, buying Lead-Acid is the most expensive mistake you can make.`
    },
    {
        title: 'ZRA Customs Handbook: Tax-Free Solar for Everyone',
        excerpt: 'How to claim 0% Duty and 0% VAT on solar panels, batteries, and inverters using the 2024/25 incentives.',
        category: 'Customs & Tax',
        author: 'Mutale Chileshe',
        date: 'Jan 25, 2026',
        image: '/assets/financing.png',
        content: `Many Zambians are still unaware that the government has waived nearly all import taxes on solar equipment to combat the energy crisis. Under the current Zambia Revenue Authority (ZRA) guidelines, solar panels, deep-cycle batteries, and dedicated solar inverters are classified as "Duty Free" and "VAT Zero-Rated." This means the price you pay at a SunGate Verified supplier is up to 31% lower than it would be for standard electronics.

However, there is a catch: classification. If you import a "Hybrid Inverter," ZRA customs officers might classify it as a general power converter, which carries a 15% duty. To avoid this, you (or your supplier) must ensure the equipment is declared under the correct HS Codes (Harmonized System). For example, solar panels fall under HS 8541.43.00. Understanding these codes is vital for installers importing equipment directly from South Africa or China.

Furthermore, these incentives extend beyond just the hardware. Specialized solar water pumps and solar geysers also enjoy these tax breaks. At SunGate, we ensure all our partner suppliers provide ZRA-compliant tax invoices. If you are a business, you can also claim "Capital Allowance" on your solar investment, allowing you to deduct 50% of the system cost from your taxable corporate income in the first year. This is a massive hidden subsidy that effectively makes solar 15% cheaper for registered companies.`
    },
    {
        title: 'Solar Pumping for Agri-Business: ROI on the Copperbelt',
        excerpt: 'A practical guide for farmers to replace diesel generators with solar-powered irrigation systems.',
        category: 'Agriculture',
        author: 'Dr. Evans Mumba',
        date: 'Jan 22, 2026',
        image: '/assets/hero.png',
        content: `Fuel costs are the silent killer of profitability for Zambian small-scale farmers. If you are using a diesel pump to irrigate 5 hectares of tomatoes or onions, you are likely spending upwards of K5,000 a month on fuel and maintenance. Solar pumping is not just an environmental choice; it is a survival strategy for modern agri-business. A well-designed solar pump pays for itself in just 14 to 18 months through fuel savings alone.

The logic is simple: when the sun is at its hottest and your crops need the most water, that is also when your solar panels are producing the most power. This perfect synchronization means you don't even need expensive batteries to irrigate. Using a "Storage Tank" strategy—where you pump water into a high-placed tank during the day and use gravity to irrigate at night—is the most cost-effective way to manage your farm's water needs.

When choosing a pump, Zambian farmers should look at the "Total Dynamic Head" (TDH). This is the vertical distance the water needs to travel plus the friction in the pipes. In hilly areas like Mbala or certain parts of the Copperbelt, you need high-head pumps. For flat areas like the Kafue Flats, high-volume, low-head pumps are better. Always ensure your pump has "Dry-run Protection," which turns it off if the borehole water level drops too low, preventing the motor from burning out in the dry season.`
    },
    {
        title: 'Load-Shedding Survival: Prioritizing Your Home Loads',
        excerpt: 'How to design a system that keeps your fridge, Wi-Fi, and lights on without breaking the bank.',
        category: 'Maintenance',
        author: 'Tech Audit Team',
        date: 'Jan 18, 2026',
        image: '/assets/solar-kit.png',
        content: `The most common mistake people make when going solar is trying to power their entire house exactly as it was on the grid. Trying to run an electric stove, a geyser, and three air conditioners on a budget solar system will lead to system failure within minutes. To survive 12-hour load-shedding effectively, you must learn the art of "Load Prioritization."

An "Essential Loads" circuit is the secret to a stable system. Ask your electrician to split your DB board so that only your lights, fridge, Wi-Fi, and TV are connected to the solar inverter's "Output 1." High-draw items like stoves and geysers should be left on the main ZESCO-only line. By doing this, a modest 3.5kVA system can keep your home functioning indefinitely. If you need to cook during load-shedding, switch to LPG (Gas) or a specialized solar-compatible induction cooker.

Maintenance is also key to surviving the dusty Zambian dry season. From June to October, dust buildup on your panels can reduce power output by as much as 30%. Simply rinsing your panels with plain water (no soap!) every two weeks can be the difference between having enough power for the night and being left in the dark. Also, ensure your inverter is installed in a well-ventilated area—Zambian summer heat can cause inverters to "Throtle" their output to protect themselves from overheating.`
    }
]

async function seed() {
    console.log('--- Cleaning up existing data ---')
    await supabase.from('products').delete().neq('id', 0)
    await supabase.from('installers').delete().neq('id', 0)
    await supabase.from('articles').delete().neq('id', 0)

    console.log('--- Seeding full dataset ---')

    console.log('Seeding products...')
    const { error: pError } = await supabase.from('products').insert(products)
    if (pError) console.error('Error seeding products:', pError)

    console.log('Seeding installers...')
    const { error: iError } = await supabase.from('installers').insert(installers)
    if (iError) console.error('Error seeding installers:', iError)

    console.log('Seeding articles...')
    const { error: aError } = await supabase.from('articles').insert(articles)
    if (aError) console.error('Error seeding articles:', aError)

    console.log('Seeding completed successfully!')
}

seed()
