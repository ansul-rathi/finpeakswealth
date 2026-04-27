export default function Disclaimer() {
  return (
    <div>
      <div className="bg-[#0D1F3C] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Disclaimer</h1>
        <p className="text-white/60 mt-3 text-base">Please read carefully before using our services</p>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Prominent box */}
          <div className="bg-amber-50 border-l-4 border-[#C9A84C] p-6 rounded-r-lg mb-10">
            <p className="text-sm font-semibold text-amber-900 mb-2">Mutual Fund Investment Disclaimer</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully before investing.
              Past performance is not indicative of future returns. The NAV of schemes may go up or down based on market conditions.
              Investors are not being offered any guaranteed or assured returns.
            </p>
          </div>

          <Block title="1. General Disclaimer">
            The information on this website is provided by Finpeakswealth Private Limited for general informational purposes only. While we strive to keep the information accurate and current, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information for any purpose.
          </Block>

          <Block title="2. Not Investment Advice">
            The content on this website does not constitute investment advice, financial advice, trading advice, or any other form of professional advice. Finpeakswealth is a SEBI-registered Mutual Fund Distributor (ARN-XXXXXX) and not a SEBI-registered Investment Advisor. All investment decisions must be made by investors at their own discretion.
            <br /><br />
            We strongly recommend that you consult a qualified, SEBI-registered investment advisor before making any investment decisions. Your financial goals, risk appetite, and investment horizon must be carefully evaluated before investing.
          </Block>

          <Block title="3. Market Risk Disclosure">
            <ul className="list-disc pl-5 space-y-2 text-gray-500 text-sm">
              <li>Equity mutual funds are subject to high market risk. NAVs can fluctuate significantly based on stock market movements.</li>
              <li>Debt mutual funds are subject to credit risk, interest rate risk, and liquidity risk.</li>
              <li>Hybrid funds carry both equity and debt risks.</li>
              <li>Liquid and overnight funds, while relatively stable, are not risk-free.</li>
              <li>International funds carry additional risks including currency risk and geopolitical risk.</li>
              <li>Sectoral and thematic funds carry concentration risk.</li>
            </ul>
          </Block>

          <Block title="4. Distributor Disclosure">
            Finpeakswealth earns trail and/or upfront commissions from Asset Management Companies (AMCs) for mutual fund distribution. These commissions are part of the expense ratio of regular mutual fund plans and are disclosed in Scheme Information Documents (SIDs) and Key Information Memoranda (KIMs). Investors may choose to invest in direct plans through AMC websites or portals without involving a distributor.
          </Block>

          <Block title="5. No Guarantee of Returns">
            Finpeakswealth does not guarantee, promise, or assure any specific return or growth on any investment made through our platform. Historical returns shown anywhere on this website are for illustrative purposes only and should not be construed as a promise of similar future performance.
          </Block>

          <Block title="6. Third-Party Information">
            Our website may contain information sourced from third parties including AMCs, RTAs, AMFI, SEBI, and market data providers. We make reasonable efforts to ensure accuracy but are not responsible for errors or omissions in third-party content.
          </Block>

          <Block title="7. Regulatory Compliance">
            Finpeakswealth operates in compliance with SEBI (Mutual Funds) Regulations, 1996 and AMFI guidelines. Our ARN is ARN-XXXXXX. For regulatory queries or complaints, investors may contact:
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-500 text-sm">
              <li>SEBI SCORES: scores.gov.in</li>
              <li>AMFI Helpline: 1800-270-7000</li>
              <li>Our Grievance Officer: grievance@finpeakswealth.com</li>
            </ul>
          </Block>

          <Block title="8. Website Availability">
            We do not warrant that the website will be available at all times without interruption. We reserve the right to temporarily or permanently discontinue the website without notice. We shall not be liable for any inconvenience caused by website downtime.
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
