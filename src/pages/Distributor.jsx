import { CheckCircle } from 'lucide-react'

const benefits = [
  'Earn attractive trail and upfront commissions from all major AMCs',
  'Access to the complete universe of mutual fund schemes across 30+ AMCs',
  'Dedicated relationship manager and on-ground support team',
  'Technology-enabled platform for portfolio tracking and client management',
  'Regular training, NISM certification support, and knowledge updates',
]

const amcs = [
  'SBI Mutual Fund', 'HDFC Mutual Fund', 'ICICI Prudential', 'Axis Mutual Fund',
  'Kotak Mutual Fund', 'Mirae Asset', 'Nippon India', 'DSP Mutual Fund',
]

export default function Distributor() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-[#0D1F3C] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Join Our Distributor Network</h1>
        <p className="text-white/60 mt-3 text-base">Partner with us and grow your financial advisory practice</p>
      </div>

      {/* Main split */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Benefits */}
          <div>
            <p className="text-xs text-[#C9A84C] font-semibold uppercase tracking-widest mb-3">Why Partner With Us</p>
            <h2 className="text-3xl font-bold text-[#0D1F3C] mb-8">Benefits of Joining Finpeakswealth</h2>
            <ul className="flex flex-col gap-5">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-4">
                  <CheckCircle size={20} className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="bg-[#F5F7FA] border border-gray-200 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#0D1F3C] mb-6">Express Your Interest</h3>
            <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
              {[
                { label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                { label: 'Mobile Number', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                { label: 'City', type: 'text', placeholder: 'Your city' },
                { label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
              ].map(({ label, type, placeholder }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-600">{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="px-4 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="mt-2 bg-[#0D1F3C] text-white font-semibold py-3 rounded-lg hover:bg-[#1a3a6b] transition-colors text-sm"
              >
                Submit Interest
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-200">
              Our team will reach out within 24 working hours.
            </p>
          </div>
        </div>
      </section>

      {/* Empanelled AMCs */}
      <section className="bg-[#F5F7FA] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs text-[#C9A84C] font-semibold uppercase tracking-widest mb-2">Our Partners</p>
            <h2 className="text-3xl font-bold text-[#0D1F3C]">Empanelled AMCs</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amcs.map((name) => (
              <div key={name} className="bg-white border border-gray-200 rounded-lg h-16 flex items-center justify-center text-xs font-semibold text-gray-400 uppercase tracking-wider shadow-sm">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
