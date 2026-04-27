import { TrendingUp, BarChart2, Landmark, Umbrella, PiggyBank } from 'lucide-react'

const products = [
  {
    icon: TrendingUp,
    color: 'bg-[#0D1F3C]',
    title: 'Mutual Funds',
    desc: 'Access a curated range of equity, debt, hybrid, and sectoral mutual funds from all leading AMCs. Invest via SIP or lump sum with complete transparency and regulatory compliance.',
  },
  {
    icon: BarChart2,
    color: 'bg-blue-800',
    title: 'Portfolio Management Services (PMS)',
    desc: 'Professionally managed, high-conviction portfolios for HNI investors. Get tailored investment strategies with dedicated portfolio managers and detailed performance reporting.',
  },
  {
    icon: Landmark,
    color: 'bg-emerald-700',
    title: 'Fixed Income & Bonds',
    desc: 'Preserve capital and earn steady returns through government securities, corporate bonds, NCDs, and fixed maturity plans. Ideal for conservative investors seeking stability.',
  },
  {
    icon: Umbrella,
    color: 'bg-purple-700',
    title: 'Insurance Products',
    desc: 'Protect what matters with life, health, and term insurance products from leading insurers. Our advisors help you choose optimal coverage aligned with your financial goals.',
  },
  {
    icon: PiggyBank,
    color: 'bg-[#C9A84C]',
    title: 'NPS / Retirement Planning',
    desc: 'Secure your retirement with the National Pension System and structured retirement portfolios. Benefit from tax savings under 80CCD while building a long-term corpus.',
  },
]

export default function Products() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-[#0D1F3C] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Our Products & Services</h1>
        <p className="text-white/60 mt-3 text-base">Comprehensive wealth solutions for every stage of life</p>
      </div>

      {/* Products Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-[#C9A84C] font-semibold uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="text-3xl font-bold text-[#0D1F3C]">Solutions Built for Every Investor</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1F3C]">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{desc}</p>
                <button className="self-start text-sm font-semibold text-[#C9A84C] hover:text-[#0D1F3C] transition-colors flex items-center gap-1">
                  Learn More <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="border-l-4 border-[#C9A84C] bg-[#F5F7FA] px-5 py-4 rounded-r text-xs text-gray-500 leading-relaxed">
          <strong className="text-gray-700">Important Notice:</strong> Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully before investing. Insurance is the subject matter of solicitation. NPS investments are subject to market risks. Past performance is not indicative of future returns. Investors are requested to consult their financial advisor before investing.
        </div>
      </div>
    </div>
  )
}
