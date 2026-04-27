const mvv = [
  {
    color: 'bg-[#0D1F3C]',
    title: 'Our Mission',
    text: 'To democratize wealth creation by providing every Indian investor and distributor access to world-class mutual fund products, backed by technology, transparency, and trust.',
  },
  {
    color: 'bg-[#C9A84C]',
    title: 'Our Vision',
    text: 'To be India\'s most trusted and preferred mutual fund distribution platform, expanding financial literacy and prosperity across every corner of the country.',
  },
  {
    color: 'bg-emerald-700',
    title: 'Our Values',
    text: 'Integrity in every action. Client-first always. Technology for empowerment. Transparency as a foundation. These are the values that have guided us for over 25 years.',
  },
]

const team = [
  { name: 'Rajesh Kumar', designation: 'Managing Director', bio: '30+ years in financial services. Former VP at leading AMC. Passionate about financial inclusion across India.' },
  { name: 'Priya Sharma', designation: 'Chief Operating Officer', bio: 'Expert in distribution operations with 20 years experience. Leads our national distributor network strategy.' },
  { name: 'Ankit Mehta', designation: 'Chief Technology Officer', bio: 'IIT alumni with 15 years in fintech. Architecting our next-gen distribution technology platform.' },
]

export default function About() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-[#0D1F3C] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        <p className="text-white/60 mt-3 text-base">Our story, mission, and the people behind Finpeakswealth</p>
      </div>

      {/* Overview */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-[#C9A84C] font-semibold uppercase tracking-widest mb-4">Company Overview</p>
          <h2 className="text-3xl font-bold text-[#0D1F3C] mb-8">25 Years of Building Trust</h2>
          {[
            'Finpeakswealth was established in 1999 with a single vision — to make mutual fund investing accessible, simple, and trustworthy for every Indian. Over the past 25 years, we have grown from a small regional distributor to one of India\'s leading mutual fund distribution platforms.',
            'Today, we serve over 2,000 active distributors and thousands of end investors across 15+ states. Our empanelment with all major AMCs ensures that our clients have access to the widest range of mutual fund products in the market.',
            'We are deeply committed to the financial well-being of our investors. Our team of qualified professionals provides personalized guidance, helping clients navigate market cycles with confidence and clarity.',
            'As an AMFI-registered distributor, we operate with full regulatory compliance, maintaining the highest standards of transparency and ethical conduct in all our operations.',
          ].map((para, i) => (
            <p key={i} className="text-gray-500 leading-relaxed mb-5">{para}</p>
          ))}
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-[#F5F7FA] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-[#C9A84C] font-semibold uppercase tracking-widest mb-2">What Drives Us</p>
            <h2 className="text-3xl font-bold text-[#0D1F3C]">Mission, Vision & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mvv.map(({ color, title, text }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <div className={`w-10 h-10 rounded-lg ${color} mb-5`} />
                <h3 className="text-xl font-bold text-[#0D1F3C] mb-3">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-[#C9A84C] font-semibold uppercase tracking-widest mb-2">The Team</p>
            <h2 className="text-3xl font-bold text-[#0D1F3C]">Our Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map(({ name, designation, bio }) => (
              <div key={name} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="h-40 bg-gradient-to-br from-[#0D1F3C] to-[#1a3a6b] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#C9A84C]/30 border-2 border-[#C9A84C]/50" />
                </div>
                <div className="p-6 bg-white">
                  <h4 className="font-bold text-[#0D1F3C] text-lg">{name}</h4>
                  <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mt-0.5 mb-3">{designation}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
