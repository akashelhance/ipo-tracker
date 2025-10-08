import type { Metadata } from "next"
import { siteConfig } from "@/config/config"

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.siteName}`,
  description:
    `Read the terms and conditions governing the use of ${siteConfig.siteName}'s website and services. Understand your rights and responsibilities as a user.`,
}

export default function TermsOfServicePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: June 9, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                <a href="#agreement" className="text-blue-600 hover:underline">
                  Agreement to Terms
                </a>
              </li>
              <li>
                <a href="#intellectual-property" className="text-blue-600 hover:underline">
                  Intellectual Property Rights
                </a>
              </li>
              <li>
                <a href="#user-accounts" className="text-blue-600 hover:underline">
                  User Accounts
                </a>
              </li>
              <li>
                <a href="#prohibited-activities" className="text-blue-600 hover:underline">
                  Prohibited Activities
                </a>
              </li>
              <li>
                <a href="#user-content" className="text-blue-600 hover:underline">
                  User-Generated Content
                </a>
              </li>
              <li>
                <a href="#payment-terms" className="text-blue-600 hover:underline">
                  Payment Terms
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-blue-600 hover:underline">
                  Disclaimer of Warranties
                </a>
              </li>
              <li>
                <a href="#limitation-liability" className="text-blue-600 hover:underline">
                  Limitation of Liability
                </a>
              </li>
              <li>
                <a href="#indemnification" className="text-blue-600 hover:underline">
                  Indemnification
                </a>
              </li>
              <li>
                <a href="#termination" className="text-blue-600 hover:underline">
                  Term and Termination
                </a>
              </li>
              <li>
                <a href="#governing-law" className="text-blue-600 hover:underline">
                  Governing Law
                </a>
              </li>
              <li>
                <a href="#changes" className="text-blue-600 hover:underline">
                  Changes to Terms
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-600 hover:underline">
                  Contact Us
                </a>
              </li>
            </ol>
          </div>

          <section id="agreement">
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you and {siteConfig.siteName} ("we,"
              "our," or "us") governing your access to and use of the website ipotracker.com and any related services,
              features, content, or applications (collectively, the "Services").
            </p>
            <p className="mt-4">
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these
              Terms, you may not access or use the Services.
            </p>
          </section>

          <section id="intellectual-property" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">2. Intellectual Property Rights</h2>
            <p>
              The Services and their entire contents, features, and functionality (including but not limited to all
              information, software, text, displays, images, video, and audio, and the design, selection, and
              arrangement thereof) are owned by {siteConfig.siteName}, its licensors, or other providers of such material and are
              protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary
              rights laws.
            </p>
            <p className="mt-4">
              These Terms permit you to use the Services for your personal, non-commercial use only. You must not
              reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish,
              download, store, or transmit any of the material on our Services, except as follows:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-4">
              <li>
                Your computer may temporarily store copies of such materials in RAM incidental to your accessing and
                viewing those materials.
              </li>
              <li>
                You may store files that are automatically cached by your Web browser for display enhancement purposes.
              </li>
              <li>
                You may print or download one copy of a reasonable number of pages of the Services for your own
                personal, non-commercial use and not for further reproduction, publication, or distribution.
              </li>
              <li>
                If we provide social media features with certain content, you may take such actions as are enabled by
                such features.
              </li>
            </ul>
          </section>

          <section id="user-accounts" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
            <p>
              When you create an account with us, you guarantee that the information you provide is accurate, complete,
              and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate
              termination of your account on the Services.
            </p>
            <p className="mt-4">
              You are responsible for maintaining the confidentiality of your account and password, including but not
              limited to the restriction of access to your computer and/or account. You agree to accept responsibility
              for any and all activities or actions that occur under your account and/or password.
            </p>
            <p className="mt-4">
              You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your
              account.
            </p>
          </section>

          <section id="prohibited-activities" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">4. Prohibited Activities</h2>
            <p>
              You may use the Services only for lawful purposes and in accordance with these Terms. You agree not to use
              the Services:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-4">
              <li>
                In any way that violates any applicable federal, state, local, or international law or regulation.
              </li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
              <li>
                To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                mail," "chain letter," "spam," or any other similar solicitation.
              </li>
              <li>
                To impersonate or attempt to impersonate {siteConfig.siteName}, a {siteConfig.siteName} employee, another user, or any other
                person or entity.
              </li>
              <li>
                To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or
                which may harm {siteConfig.siteName} or users of the Services.
              </li>
            </ul>
          </section>

          <section id="user-content" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">5. User-Generated Content</h2>
            <p>
              The Services may allow you to post, submit, publish, display, or transmit content such as comments,
              reviews, or recommendations ("User Content"). By providing any User Content on the Services, you grant us
              and our affiliates and service providers, and each of their and our respective licensees, successors, and
              assigns the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third
              parties any such material.
            </p>
            <p className="mt-4">You represent and warrant that:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-4">
              <li>
                You own or control all rights in and to the User Content and have the right to grant the license granted
                above.
              </li>
              <li>All of your User Content does and will comply with these Terms.</li>
            </ul>
            <p className="mt-4">
              You understand and acknowledge that you are responsible for any User Content you submit or contribute, and
              you, not {siteConfig.siteName}, have full responsibility for such content, including its legality, reliability,
              accuracy, and appropriateness.
            </p>
          </section>

          <section id="payment-terms" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">6. Payment Terms</h2>
            <p>
              Some of our Services may be subject to fees. You agree to pay all fees and charges incurred in connection
              with your use of the Services at the rates in effect when the charges were incurred.
            </p>
            <p className="mt-4">
              We may, from time to time, modify our fee structure. We will notify you of any such changes by posting the
              new fees on the Services or by sending you an email notification. Any fee changes will take effect
              immediately after posting.
            </p>
            <p className="mt-4">
              Unless otherwise stated, all fees are quoted in Indian Rupees (INR). You are responsible for paying all
              fees and applicable taxes associated with the Services in a timely manner with a valid payment method.
            </p>
          </section>

          <section id="disclaimer" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">7. Disclaimer of Warranties</h2>
            <p>
              THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED. IPOTRACKER DISCLAIMS ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mt-4">
              IPOTRACKER DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE
              CORRECTED, OR THAT THE SERVICES OR THE SERVER THAT MAKES THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER
              HARMFUL COMPONENTS.
            </p>
            <p className="mt-4">
              IPOTRACKER MAKES NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE CONTENT ON THE
              SERVICES OR THE CONTENT OF ANY WEBSITES LINKED TO THE SERVICES.
            </p>
          </section>

          <section id="limitation-liability" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p>
              IN NO EVENT WILL IPOTRACKER, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS,
              OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
              CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL,
              INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
            </p>
            <p className="mt-4">
              THE FOREGOING DOES NOT AFFECT ANY LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
            </p>
          </section>

          <section id="indemnification" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless {siteConfig.siteName}, its affiliates, licensors, and service
              providers, and its and their respective officers, directors, employees, contractors, agents, licensors,
              suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards,
              losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
              violation of these Terms or your use of the Services.
            </p>
          </section>

          <section id="termination" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">10. Term and Termination</h2>
            <p>
              These Terms shall remain in full force and effect while you use the Services. We may terminate or suspend
              your account and bar access to the Services immediately, without prior notice or liability, under our sole
              discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the
              Terms.
            </p>
            <p className="mt-4">
              If you wish to terminate your account, you may simply discontinue using the Services, or notify us that
              you wish to delete your account.
            </p>
            <p className="mt-4">
              All provisions of the Terms which by their nature should survive termination shall survive termination,
              including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of
              liability.
            </p>
          </section>

          <section id="governing-law" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
            <p>
              These Terms and your use of the Services shall be governed by and construed in accordance with the laws of
              India, without regard to its conflict of law principles.
            </p>
            <p className="mt-4">
              Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Services shall be
              instituted exclusively in the courts of Mumbai, Maharashtra, India.
            </p>
          </section>

          <section id="changes" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
            <p>
              We may revise and update these Terms from time to time in our sole discretion. All changes are effective
              immediately when we post them, and apply to all access to and use of the Services thereafter.
            </p>
            <p className="mt-4">
              Your continued use of the Services following the posting of revised Terms means that you accept and agree
              to the changes. You are expected to check this page frequently so you are aware of any changes, as they
              are binding on you.
            </p>
          </section>

          <section id="contact" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <div className="mt-4 bg-gray-50 p-6 rounded-lg">
              <p>
                <strong>{siteConfig.siteName}</strong>
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
