import type { Metadata } from "next"
import { siteConfig } from "@/config/config"

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.siteName}`,
  description:
    `Learn how ${siteConfig.siteName} collects, uses, and protects your personal information. Our privacy policy explains your rights and our responsibilities regarding your data.`,
}

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: June 9, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                <a href="#introduction" className="text-blue-600 hover:underline">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#information-collection" className="text-blue-600 hover:underline">
                  Information We Collect
                </a>
              </li>
              <li>
                <a href="#information-use" className="text-blue-600 hover:underline">
                  How We Use Your Information
                </a>
              </li>
              <li>
                <a href="#information-sharing" className="text-blue-600 hover:underline">
                  Information Sharing and Disclosure
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-blue-600 hover:underline">
                  Cookies and Similar Technologies
                </a>
              </li>
              <li>
                <a href="#data-security" className="text-blue-600 hover:underline">
                  Data Security
                </a>
              </li>
              <li>
                <a href="#user-rights" className="text-blue-600 hover:underline">
                  Your Rights and Choices
                </a>
              </li>
              <li>
                <a href="#children" className="text-blue-600 hover:underline">
                  Children's Privacy
                </a>
              </li>
              <li>
                <a href="#changes" className="text-blue-600 hover:underline">
                  Changes to This Privacy Policy
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-600 hover:underline">
                  Contact Us
                </a>
              </li>
            </ol>
          </div>

          <section id="introduction">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              {siteConfig.siteName} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you visit our website ipotracker.com
              and use our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our website and services, you acknowledge
              that you have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy. If
              you do not agree with our policies and practices, please do not use our website or services.
            </p>
          </section>

          <section id="information-collection" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Register for an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information or support</li>
              <li>Participate in surveys or promotions</li>
              <li>Post comments or content on our platform</li>
            </ul>
            <p className="mt-4">The personal information we collect may include:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Investment preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
            <p>
              When you visit our website, we automatically collect certain information about your device and usage
              patterns. This may include:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referring websites</li>
              <li>Click patterns and interactions</li>
            </ul>
          </section>

          <section id="information-use" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including to:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Respond to comments, questions, and requests</li>
              <li>Personalize your experience and deliver content relevant to your interests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues, fraud, and illegal activities</li>
              <li>Send promotional communications, such as newsletters and special offers</li>
            </ul>
          </section>

          <section id="information-sharing" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
            <p>We may share your information in the following situations:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>Service Providers:</strong> We may share your information with third-party vendors, service
                providers, contractors, or agents who perform services for us.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a
                portion of our assets, your information may be transferred as part of that transaction.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in
                response to valid requests by public authorities.
              </li>
              <li>
                <strong>Protection of Rights:</strong> We may disclose your information to protect our rights, privacy,
                safety, or property, and that of our users or others.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your information with your consent or at your
                direction.
              </li>
            </ul>
          </section>

          <section id="cookies" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">5. Cookies and Similar Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain
              information. Cookies are files with a small amount of data that may include an anonymous unique
              identifier.
            </p>
            <p className="mt-4">We use the following types of cookies:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>Essential Cookies:</strong> Necessary for the website to function properly.
              </li>
              <li>
                <strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count visitors and see how
                they move around our website.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Enable us to personalize content and remember your preferences.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> Record your visit to our website, the pages you visit, and the links
                you follow.
              </li>
            </ul>
            <p className="mt-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
              if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section id="data-security" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal
              information. However, please be aware that no method of transmission over the Internet or method of
              electronic storage is 100% secure.
            </p>
            <p className="mt-4">
              While we strive to use commercially acceptable means to protect your personal information, we cannot
              guarantee its absolute security. Any information you transmit to us is done at your own risk.
            </p>
          </section>

          <section id="user-rights" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">7. Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate or incomplete information</li>
              <li>The right to erase your personal information</li>
              <li>The right to restrict processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us using the information provided in the "Contact Us"
              section below.
            </p>
          </section>

          <section id="children" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
            <p>
              Our website and services are not intended for individuals under the age of 18. We do not knowingly collect
              personal information from children under 18. If you are a parent or guardian and believe that your child
              has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section id="changes" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date at the top of this page.
            </p>
            <p className="mt-4">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </p>
          </section>

          <section id="contact" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us
              at:
            </p>
            <div className="mt-4 bg-gray-50 p-6 rounded-lg">
              <p>
                <strong>{siteConfig.siteName}</strong>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:privacy@ipotracker.com" className="text-blue-600 hover:underline">
                  privacy@ipotracker.com
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
