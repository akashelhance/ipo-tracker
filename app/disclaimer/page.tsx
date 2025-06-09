import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimer | IPOTracker",
  description:
    "Important disclaimers regarding the information provided on IPOTracker. Understand the limitations of our financial data and investment information.",
}

export default function DisclaimerPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Disclaimer</h1>
          <p className="text-gray-600">Last updated: June 9, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                <a href="#information-disclaimer" className="text-blue-600 hover:underline">
                  Information Disclaimer
                </a>
              </li>
              <li>
                <a href="#investment-disclaimer" className="text-blue-600 hover:underline">
                  Investment Disclaimer
                </a>
              </li>
              <li>
                <a href="#third-party-content" className="text-blue-600 hover:underline">
                  Third-Party Content
                </a>
              </li>
              <li>
                <a href="#forward-looking" className="text-blue-600 hover:underline">
                  Forward-Looking Statements
                </a>
              </li>
              <li>
                <a href="#accuracy" className="text-blue-600 hover:underline">
                  Accuracy and Completeness
                </a>
              </li>
              <li>
                <a href="#links" className="text-blue-600 hover:underline">
                  External Links
                </a>
              </li>
              <li>
                <a href="#professional-advice" className="text-blue-600 hover:underline">
                  Professional Advice
                </a>
              </li>
              <li>
                <a href="#changes" className="text-blue-600 hover:underline">
                  Changes to Disclaimer
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-600 hover:underline">
                  Contact Us
                </a>
              </li>
            </ol>
          </div>

          <section id="information-disclaimer">
            <h2 className="text-2xl font-bold mb-4">1. Information Disclaimer</h2>
            <p>
              The information contained on the IPOTracker website (the "Service") is for general information purposes
              only. IPOTracker assumes no responsibility for errors or omissions in the contents of the Service.
            </p>
            <p className="mt-4">
              In no event shall IPOTracker be liable for any special, direct, indirect, consequential, or incidental
              damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out
              of or in connection with the use of the Service or the contents of the Service.
            </p>
            <p className="mt-4">
              IPOTracker reserves the right to make additions, deletions, or modifications to the contents on the
              Service at any time without prior notice.
            </p>
          </section>

          <section id="investment-disclaimer" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">2. Investment Disclaimer</h2>
            <p>
              The content on IPOTracker is provided for informational purposes only and is not intended to be investment
              advice, nor does it constitute an offer to sell or the solicitation of an offer to buy any security or
              investment product.
            </p>
            <p className="mt-4">
              All investments involve risk, including the possible loss of principal. Past performance does not
              guarantee future results. The value of investments and the income from them can go down as well as up and
              investors may not get back the amounts originally invested.
            </p>
            <p className="mt-4 font-semibold">
              Before making any investment decision, you should seek advice from an independent financial advisor who
              takes into account your personal circumstances, financial situation, and individual needs.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <p className="font-semibold">Important Risk Warning:</p>
              <p>
                Investing in Initial Public Offerings (IPOs) and the stock market involves substantial risk. IPOs can be
                particularly volatile and may not be suitable for all investors. You should carefully consider your
                investment objectives, level of experience, and risk appetite before investing in IPOs or any other
                financial instruments.
              </p>
            </div>
          </section>

          <section id="third-party-content" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">3. Third-Party Content</h2>
            <p>
              IPOTracker may include content provided by third parties, including materials provided by other users,
              bloggers, and third-party licensors, syndicators, aggregators, and/or reporting services. All statements
              and/or opinions expressed in these materials, and all articles and responses to questions and other
              content, other than the content provided by IPOTracker, are solely the opinions and the responsibility of
              the person or entity providing those materials.
            </p>
            <p className="mt-4">
              These materials do not necessarily reflect the opinion of IPOTracker. We are not responsible, or liable to
              you or any third party, for the content or accuracy of any materials provided by any third parties.
            </p>
          </section>

          <section id="forward-looking" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">4. Forward-Looking Statements</h2>
            <p>
              The Service may contain certain forward-looking statements and information relating to IPOTracker that are
              based on the beliefs of IPOTracker as well as assumptions made by and information currently available to
              IPOTracker.
            </p>
            <p className="mt-4">
              These forward-looking statements are, by their nature, subject to significant risks and uncertainties.
              These forward-looking statements include, without limitation, statements relating to the company's
              business prospects, future developments, trends and conditions in the industry and geographical markets in
              which IPOTracker operates.
            </p>
            <p className="mt-4">
              When used in this Service, the words "anticipate", "believe", "could", "estimate", "expect", "going
              forward", "intend", "may", "ought to", "plan", "project", "seek", "should", "will", "would" and similar
              expressions, as they relate to IPOTracker, are intended to identify forward-looking statements.
            </p>
          </section>

          <section id="accuracy" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">5. Accuracy and Completeness</h2>
            <p>
              While we strive to provide accurate and up-to-date information, IPOTracker makes no representations or
              warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or
              availability with respect to the Service or the information, products, services, or related graphics
              contained on the Service for any purpose.
            </p>
            <p className="mt-4">
              Any reliance you place on such information is therefore strictly at your own risk. In no event will we be
              liable for any loss or damage including without limitation, indirect or consequential loss or damage, or
              any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with,
              the use of this Service.
            </p>
          </section>

          <section id="links" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">6. External Links</h2>
            <p>
              The Service may contain links to external websites that are not provided or maintained by or in any way
              affiliated with IPOTracker. Please note that IPOTracker does not guarantee the accuracy, relevance,
              timeliness, or completeness of any information on these external websites.
            </p>
            <p className="mt-4">
              We have no control over the nature, content, and availability of those sites. The inclusion of any links
              does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>
          </section>

          <section id="professional-advice" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">7. Professional Advice</h2>
            <p>
              The information provided on the Service is not intended to be a substitute for professional advice. Always
              seek the advice of qualified professionals with any questions you may have regarding financial, legal, or
              technical matters.
            </p>
            <p className="mt-4">
              Before making any decision or taking any action that might affect your personal finances or business, you
              should consult a qualified professional advisor.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
              <p>
                IPOTracker does not provide tax, accounting, legal, investment, or financial advice. The content
                available on the Service has been prepared without taking into account your financial situation,
                investment objectives, or particular needs.
              </p>
            </div>
          </section>

          <section id="changes" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">8. Changes to Disclaimer</h2>
            <p>
              IPOTracker may revise this disclaimer from time to time. The revised disclaimer will be effective as of
              the published update date.
            </p>
            <p className="mt-4">
              We encourage users to frequently check this page for any changes. By continuing to access or use our
              Service after those revisions become effective, you agree to be bound by the revised disclaimer.
            </p>
          </section>

          <section id="contact" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
            <p>If you have any questions about this Disclaimer, please contact us at:</p>
            <div className="mt-4 bg-gray-50 p-6 rounded-lg">
              <p>
                <strong>IPOTracker</strong>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:legal@ipotracker.com" className="text-blue-600 hover:underline">
                  legal@ipotracker.com
                </a>
              </p>
              <p>Phone: +91 12345 67890</p>
              <p>Address: Mumbai, Maharashtra, India</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
