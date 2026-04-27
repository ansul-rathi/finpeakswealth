export default function TermsOfUse() {
  return (
    <div>
      <div className="bg-[#0D1F3C] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Terms of Use</h1>
        <p className="text-white/60 mt-3 text-base">Last updated: January 1, 2025</p>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <Block title="1. Acceptance of Terms">
            By accessing or using the Finpeakswealth website and services, you agree to be bound by these Terms of Use. If you do not agree to all the terms and conditions herein, you must not use our services. These terms apply to all visitors, users, and others who access or use the service.
          </Block>

          <Block title="2. About Finpeakswealth">
            Finpeakswealth Private Limited is registered as a Mutual Fund Distributor with the Association of Mutual Funds in India (AMFI). Our ARN is ARN-XXXXXX. We are not a fund manager or investment advisor. We act as an intermediary to facilitate mutual fund investments on behalf of our clients.
          </Block>

          <Block title="3. Eligibility">
            Our services are available to:
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-500 text-sm">
              <li>Resident Indian individuals aged 18 years and above.</li>
              <li>Hindu Undivided Families (HUFs).</li>
              <li>Registered companies, firms, and trusts, subject to applicable regulations.</li>
              <li>Non-Resident Indians (NRIs) on a repatriation or non-repatriation basis, subject to FEMA regulations.</li>
            </ul>
            You must complete KYC verification before investing through our platform.
          </Block>

          <Block title="4. Services Offered">
            Finpeakswealth provides the following services:
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-500 text-sm">
              <li>Distribution of mutual fund schemes from SEBI-registered Asset Management Companies.</li>
              <li>Distribution network empanelment for financial advisors and intermediaries.</li>
              <li>Information and educational resources on mutual fund investing.</li>
              <li>Portfolio tracking and reporting tools.</li>
            </ul>
            All investments are subject to market risks. Finpeakswealth does not guarantee any returns.
          </Block>

          <Block title="5. User Responsibilities">
            As a user of our platform, you agree to:
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-500 text-sm">
              <li>Provide accurate, complete, and up-to-date information during registration and KYC.</li>
              <li>Maintain the confidentiality of your login credentials.</li>
              <li>Not use the platform for any unlawful purpose or in violation of applicable regulations.</li>
              <li>Not attempt to gain unauthorized access to any part of the platform or its related systems.</li>
              <li>Notify us immediately of any unauthorized use of your account.</li>
              <li>Comply with all applicable laws, including tax laws, FEMA, and PMLA provisions.</li>
            </ul>
          </Block>

          <Block title="6. Investment Risk Disclosure">
            <div className="bg-amber-50 border-l-4 border-[#C9A84C] p-4 rounded-r text-sm text-amber-800 mb-4">
              <strong>Important:</strong> Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully before investing. Past performance is not indicative of future returns. The NAV of schemes may go up or down depending on market conditions.
            </div>
            Finpeakswealth is only a distributor and does not provide investment advice. Investment decisions are the sole responsibility of the investor. We recommend consulting a SEBI-registered investment advisor before making investment decisions.
          </Block>

          <Block title="7. Fees and Commissions">
            Finpeakswealth earns distributor commissions from AMCs as per SEBI regulations. These commissions are embedded in the expense ratio of regular plan mutual fund schemes and are disclosed in the Scheme Information Documents (SIDs). By investing through us, you acknowledge and consent to this commission structure.
          </Block>

          <Block title="8. Intellectual Property">
            All content on this website, including text, graphics, logos, icons, images, and software, is the property of Finpeakswealth Private Limited and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
          </Block>

          <Block title="9. Limitation of Liability">
            To the maximum extent permitted by applicable law, Finpeakswealth shall not be liable for:
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-500 text-sm">
              <li>Any investment losses arising from mutual fund investments made through our platform.</li>
              <li>Interruption, suspension, or termination of services due to technical issues or force majeure events.</li>
              <li>Errors or omissions in information provided on the website.</li>
              <li>Unauthorized access to your account due to your failure to maintain credential confidentiality.</li>
            </ul>
          </Block>

          <Block title="10. Governing Law & Dispute Resolution">
            These Terms of Use are governed by the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra. We encourage resolution of disputes through our Grievance Redressal Mechanism before approaching courts.
          </Block>

          <Block title="11. Modifications to Terms">
            We reserve the right to modify these Terms of Use at any time. Changes will be effective upon posting to the website. Your continued use of our services after any modifications constitutes your acceptance of the updated terms.
          </Block>

          <Block title="12. Contact">
            For any queries regarding these Terms of Use:
            <div className="mt-3 bg-[#F5F7FA] border border-gray-200 rounded-lg p-4 text-sm text-gray-600 space-y-1">
              <p><strong>Finpeakswealth Private Limited</strong></p>
              <p>Email: legal@finpeakswealth.com</p>
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
