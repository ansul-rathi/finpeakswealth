import { Link } from 'react-router-dom'

const quickLinks = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/products', 'Products & Services'],
  ['/distributor', 'Distributor Network'],
  ['/contact', 'Contact'],
]

const legalLinks = [
  ['/privacy-policy', 'Privacy Policy'],
  ['/terms-of-use', 'Terms of Use'],
  ['/disclaimer', 'Disclaimer'],
  ['/grievance-policy', 'Grievance Policy'],
]

export default function Footer() {
  return (
    <footer className="bg-[#0D1F3C] text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1">
          <div className="font-['Playfair_Display'] text-xl font-bold text-white mb-3">
            Finpeaks<span className="text-[#C9A84C]">Wealth</span>
          </div>
          <p className="text-sm leading-relaxed text-white/55 max-w-xs">
            A trusted mutual fund distribution platform empowering investors and
            distributors across India with transparency and technology.
          </p>
          <p className="text-xs text-white/35 mt-4 leading-relaxed">
            AMFI Registered Mutual Fund Distributor<br />
            ARN-XXXXXX
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-sm text-white/60 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-4">Legal</h4>
          <ul className="flex flex-col gap-2.5">
            {legalLinks.map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-sm text-white/60 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Disclaimer strip */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center">
          <p className="text-xs text-white/30 leading-relaxed">
            Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully before investing.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© 2025 Finpeakswealth. All rights reserved.</span>
          <span>AMFI Registered Mutual Fund Distributor | ARN-XXXXXX</span>
        </div>
      </div>
    </footer>
  )
}
