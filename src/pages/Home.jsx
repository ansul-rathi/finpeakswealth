import { Link } from 'react-router-dom'
import { ShieldCheck, Globe, Layers } from 'lucide-react'

const stats = [
  { value: '₹5,000 Cr+', label: 'AUM' },
  { value: '2,000+', label: 'Distributors' },
  { value: '15+', label: 'States' },
  { value: '25+', label: 'Years of Trust' },
]

const features = [
  { icon: ShieldCheck, title: 'SEBI Registered', desc: 'Fully compliant with SEBI regulations, ensuring your investments are always in safe, authorized hands.' },
  { icon: Layers, title: 'Transparent Operations', desc: 'Complete visibility into fee structures, commissions, and fund performance with no hidden charges.' },
  { icon: Globe, title: 'Pan-India Network', desc: 'A growing network of over 2,000 distributors spanning 15+ states, serving investors across India.' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0D1F3C] py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="inline-block bg-[#C9A84C]/15 text-[#C9A84C] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-[#C9A84C]/30 mb-6">
            AMFI Registered · ARN-XXXXXX
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Empowering Wealth,<br />
            <span className="text-[#C9A84C]">Enabling Growth</span>
          </h1>
          <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            A trusted mutual fund distribution platform serving investors and distributors across India.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/products" className="bg-[#C9A84C] text-[#0D1F3C] font-semibold px-7 py-3 rounded hover:bg-[#e2c47a] transition-colors">
              Explore Products
            </Link>
            <Link to="/distributor" className="border border-white/40 text-white font-semibold px-7 py-3 rounded hover:bg-white/10 transition-colors">
              Join as Distributor
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#C9A84C] py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl md:text-4xl font-bold text-[#0D1F3C] font-['Playfair_Display']">{value}</div>
              <div className="text-xs font-semibold text-[#0D1F3C]/70 uppercase tracking-wider mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Visual placeholder */}
          <div className="bg-[#F5F7FA] border border-gray-200 rounded-xl h-72 flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 bg-[#C9A84C]/40 rotate-45 rounded-md" />
            <span className="text-xs text-gray-400 uppercase tracking-widest mt-2">Company Visual</span>
          </div>
          <div>
            <p className="text-xs text-[#C9A84C] font-semibold uppercase tracking-widest mb-2">Who We Are</p>
            <h2 className="text-3xl font-bold text-[#0D1F3C] mb-6 leading-snug">Built on Trust,<br />Driven by Purpose</h2>
            <p className="text-gray-500 mb-4 leading-relaxed">
              Finpeakswealth is a leading mutual fund distribution platform with over 25 years of experience in empowering investors and financial distributors across India. Founded on principles of transparency and client-first service, we have built an unmatched network spanning 15+ states.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our technology-driven approach ensures that every investor and distributor has access to the best products, seamless operations, and dedicated support — making wealth creation simple, reliable, and accessible for all.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-[#F5F7FA] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-[#C9A84C] font-semibold uppercase tracking-widest mb-2">Why Choose Us</p>
            <h2 className="text-3xl font-bold text-[#0D1F3C]">Built for Confidence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">
                <div className="w-12 h-12 bg-[#0D1F3C]/8 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Icon size={22} className="text-[#0D1F3C]" />
                </div>
                <h3 className="text-lg font-bold text-[#0D1F3C] mb-3">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="border-l-4 border-[#C9A84C] bg-[#F5F7FA] px-5 py-4 rounded-r text-xs text-gray-500 leading-relaxed">
          <strong className="text-gray-700">Disclaimer:</strong> Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully before investing. Past performance is not indicative of future returns.
        </div>
      </div>
    </div>
  )
}
