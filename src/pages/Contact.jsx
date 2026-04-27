import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactDetails = [
  { icon: MapPin, label: 'Address', value: '14th Floor, Tower B, Infinity Business Park,\nMumbai - 400 063, Maharashtra, India' },
  { icon: Phone, label: 'Phone', value: '+91 22 4000 5000' },
  { icon: Mail, label: 'Email', value: 'info@finpeakswealth.com' },
  { icon: Clock, label: 'Business Hours', value: 'Monday – Friday: 9:00 AM – 6:00 PM\nSaturday: 10:00 AM – 2:00 PM' },
]

export default function Contact() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-[#0D1F3C] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        <p className="text-white/60 mt-3 text-base">We're here to help — reach out anytime</p>
      </div>

      {/* Main split */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <p className="text-xs text-[#C9A84C] font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="text-3xl font-bold text-[#0D1F3C] mb-8">We'd Love to Hear From You</h2>
            <div className="flex flex-col gap-6">
              {contactDetails.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#F5F7FA] border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#0D1F3C]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">{label}</p>
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#F5F7FA] border border-gray-200 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#0D1F3C] mb-6">Send Us a Message</h3>
            <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
              {[
                { label: 'Full Name', type: 'text', placeholder: 'Your name' },
                { label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
                { label: 'Subject', type: 'text', placeholder: 'How can we help?' },
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
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-600">Message</label>
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  className="px-4 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 bg-[#0D1F3C] text-white font-semibold py-3 rounded-lg hover:bg-[#1a3a6b] transition-colors text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Registered Office + Grievance */}
      <section className="bg-[#F5F7FA] py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Registered Office */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h4 className="font-bold text-[#0D1F3C] text-lg mb-4 pb-3 border-b border-gray-100">Registered Office</h4>
            <p className="text-sm text-gray-500 leading-relaxed mb-2">Finpeakswealth Private Limited</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-2">14th Floor, Tower B, Infinity Business Park,<br />Gen A K Vaidya Marg, Mumbai – 400 063</p>
            <p className="text-sm text-gray-500 mb-1"><span className="font-medium text-gray-600">CIN:</span> U67190MH1999PTC123456</p>
            <p className="text-sm text-gray-500"><span className="font-medium text-gray-600">AMFI ARN:</span> ARN-XXXXXX</p>
          </div>

          {/* Grievance Officer */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h4 className="font-bold text-[#0D1F3C] text-lg mb-4 pb-3 border-b border-gray-100">Grievance Officer</h4>
            <p className="text-sm text-gray-500 mb-2"><span className="font-medium text-gray-600">Name:</span> Mr. Anil Desai</p>
            <p className="text-sm text-gray-500 mb-2"><span className="font-medium text-gray-600">Email:</span> grievance@finpeakswealth.com</p>
            <p className="text-sm text-gray-500 mb-2"><span className="font-medium text-gray-600">Phone:</span> +91 22 4000 5050</p>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              For escalated complaints, you may write to SEBI at scores.gov.in or AMFI at amfiindia.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
