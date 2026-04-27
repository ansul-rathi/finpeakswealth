export default function PrivacyPolicy() {
  return (
    <div>
      <div className="bg-[#0D1F3C] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
        <p className="text-white/60 mt-3 text-base">Last updated: January 1, 2025</p>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto prose-style">

          <Block title="1. Introduction">
            Finpeakswealth ("we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.
          </Block>

          <Block title="2. Information We Collect">
            We may collect the following types of personal information:
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-500 text-sm">
              <li><strong>Identity Data:</strong> Full name, date of birth, PAN number, Aadhaar number (as required by SEBI/AMFI regulations).</li>
              <li><strong>Contact Data:</strong> Email address, phone number, residential and correspondence address.</li>
              <li><strong>Financial Data:</strong> Bank account details, investment preferences, portfolio information.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, cookies, and usage data collected automatically when you visit our website.</li>
              <li><strong>KYC Data:</strong> Documents required for Know Your Customer (KYC) compliance as mandated by SEBI.</li>
            </ul>
          </Block>

          <Block title="3. How We Use Your Information">
            We use your personal data for the following purposes:
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-500 text-sm">
              <li>To process and manage your mutual fund investments and transactions.</li>
              <li>To fulfill KYC and AML (Anti-Money Laundering) regulatory requirements.</li>
              <li>To communicate important updates about your portfolio, market conditions, and regulatory changes.</li>
              <li>To provide customer support and respond to your queries.</li>
              <li>To improve our website, services, and user experience.</li>
              <li>To comply with applicable laws, regulations, and legal obligations.</li>
              <li>To send promotional communications about our products and services (with your consent).</li>
            </ul>
          </Block>

          <Block title="4. Data Sharing & Disclosure">
            We do not sell, trade, or rent your personal information to third parties. We may share your data with:
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-500 text-sm">
              <li><strong>Asset Management Companies (AMCs):</strong> For processing your mutual fund investments.</li>
              <li><strong>Registrar and Transfer Agents (RTAs):</strong> Such as CAMS and KFintech, for maintaining investment records.</li>
              <li><strong>KYC Registration Agencies (KRAs):</strong> For KYC verification as required by SEBI.</li>
              <li><strong>Regulatory Authorities:</strong> SEBI, AMFI, Income Tax Department, or other government bodies when required by law.</li>
              <li><strong>Technology Partners:</strong> Service providers who assist in operating our platform, bound by confidentiality agreements.</li>
            </ul>
          </Block>

          <Block title="5. Data Security">
            We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include SSL encryption, secure servers, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </Block>

          <Block title="6. Data Retention">
            We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, and as required by applicable laws and regulations. For regulated financial services, this is typically a minimum of 8 years from the date of your last transaction, in accordance with SEBI guidelines.
          </Block>

          <Block title="7. Your Rights">
            You have the following rights regarding your personal data:
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-500 text-sm">
              <li>Right to access your personal information held by us.</li>
              <li>Right to correct inaccurate or incomplete data.</li>
              <li>Right to request deletion of your data (subject to regulatory retention requirements).</li>
              <li>Right to withdraw consent for marketing communications at any time.</li>
              <li>Right to lodge a complaint with the appropriate regulatory authority.</li>
            </ul>
            To exercise these rights, contact us at privacy@finpeakswealth.com.
          </Block>

          <Block title="8. Cookies Policy">
            Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. We use:
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-500 text-sm">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
              <li><strong>Analytics Cookies:</strong> To understand how visitors interact with our website.</li>
              <li><strong>Preference Cookies:</strong> To remember your settings and preferences.</li>
            </ul>
            You can control cookie settings through your browser preferences. Disabling certain cookies may affect website functionality.
          </Block>

          <Block title="9. Third-Party Links">
            Our website may contain links to third-party websites, including AMC portals, regulatory websites, and payment gateways. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
          </Block>

          <Block title="10. Changes to This Policy">
            We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically. Continued use of our services after changes constitutes your acceptance of the updated policy.
          </Block>

          <Block title="11. Contact Us">
            For any questions, concerns, or requests regarding this Privacy Policy, please contact:
            <div className="mt-3 bg-[#F5F7FA] border border-gray-200 rounded-lg p-4 text-sm text-gray-600 space-y-1">
              <p><strong>Finpeakswealth Private Limited</strong></p>
              <p>14th Floor, Tower B, Infinity Business Park, Mumbai – 400 063</p>
              <p>Email: privacy@finpeakswealth.com</p>
              <p>Phone: +91 22 4000 5000</p>
            </div>
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
