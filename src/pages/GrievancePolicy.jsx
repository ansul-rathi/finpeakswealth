export default function GrievancePolicy() {
  return (
    <div>
      <div className="bg-[#0D1F3C] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Grievance Redressal Policy</h1>
        <p className="text-white/60 mt-3 text-base">We are committed to resolving your concerns promptly</p>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <Block title="1. Our Commitment">
            Finpeakswealth Private Limited is committed to providing high-quality services to all our clients and distributor partners. We recognize that disputes or grievances may arise, and we are dedicated to resolving them in a fair, transparent, and timely manner, in accordance with SEBI and AMFI guidelines.
          </Block>

          <Block title="2. Grievance Officer">
            <div className="bg-[#F5F7FA] border border-gray-200 rounded-lg p-5 text-sm text-gray-600 space-y-1.5 mt-2">
              <p className="font-semibold text-[#0D1F3C] text-base">Mr. Anil Desai</p>
              <p><span className="font-medium">Designation:</span> Grievance Redressal Officer</p>
              <p><span className="font-medium">Email:</span> grievance@finpeakswealth.com</p>
              <p><span className="font-medium">Phone:</span> +91 22 4000 5050</p>
              <p><span className="font-medium">Address:</span> 14th Floor, Tower B, Infinity Business Park, Mumbai – 400 063</p>
              <p><span className="font-medium">Working Hours:</span> Monday to Friday, 9:00 AM – 6:00 PM</p>
            </div>
          </Block>

          <Block title="3. How to Lodge a Grievance">
            You may raise a complaint through any of the following channels:
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-500 text-sm">
              <li><strong>Email:</strong> grievance@finpeakswealth.com — Please include your name, contact details, folio number (if applicable), and a clear description of your complaint.</li>
              <li><strong>Phone:</strong> +91 22 4000 5050 during business hours.</li>
              <li><strong>Written Letter:</strong> Addressed to the Grievance Redressal Officer at our registered office.</li>
              <li><strong>Contact Form:</strong> Via the Contact Us page on our website.</li>
            </ul>
          </Block>

          <Block title="4. Grievance Resolution Timeline">
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#0D1F3C] text-white">
                    <th className="text-left px-4 py-3 font-medium rounded-tl">Stage</th>
                    <th className="text-left px-4 py-3 font-medium">Action</th>
                    <th className="text-left px-4 py-3 font-medium rounded-tr">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Acknowledgement', 'Acknowledge receipt of your complaint', 'Within 2 business days'],
                    ['Investigation', 'Review complaint and gather information', 'Within 7 business days'],
                    ['Resolution', 'Communicate resolution or status update', 'Within 15 business days'],
                    ['Final Response', 'Provide final resolution', 'Within 30 business days'],
                  ].map(([stage, action, timeline], i) => (
                    <tr key={stage} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F7FA]'}>
                      <td className="px-4 py-3 font-medium text-[#0D1F3C]">{stage}</td>
                      <td className="px-4 py-3 text-gray-500">{action}</td>
                      <td className="px-4 py-3 text-gray-500">{timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Block>

          <Block title="5. Escalation">
            If you are not satisfied with our resolution, you may escalate your complaint to the following regulatory bodies:
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-500 text-sm">
              <li>
                <strong>SEBI SCORES (Securities and Exchange Board of India):</strong><br />
                Online: scores.gov.in | Toll-free: 1800 266 7575
              </li>
              <li>
                <strong>AMFI (Association of Mutual Funds in India):</strong><br />
                Online: amfiindia.com | Helpline: 1800-270-7000
              </li>
              <li>
                <strong>SEBI Complaint Portal:</strong><br />
                sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=23
              </li>
            </ul>
          </Block>

          <Block title="6. Information Required for Complaints">
            To help us resolve your complaint efficiently, please provide:
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-500 text-sm">
              <li>Full name and contact details</li>
              <li>Folio number(s) or transaction reference number</li>
              <li>Description of the issue with relevant dates</li>
              <li>Supporting documents (transaction statements, email copies, etc.)</li>
              <li>Your preferred mode of resolution</li>
            </ul>
          </Block>

          <Block title="7. Policy Review">
            This Grievance Redressal Policy is reviewed annually and updated in line with SEBI/AMFI guidelines. The latest version is always available on our website.
          </Block>

        </div>
      </section>
    </div>
  )
}

function Block({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-[#0D1F3C] mb-3">{title}</h2>
      <div className="text-gray-500 text-sm leading-relaxed">{children}</div>
    </div>
  )
}
