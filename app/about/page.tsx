import type { Metadata } from "next"
import { CheckCircle, Users, TrendingUp, Shield, Clock, Award, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube, Facebook } from "lucide-react"
import Link from "next/link"
import { siteConfig, getSocialLinks, getFullAddress } from "@/config/config"

export const metadata: Metadata = {
  title: `About Us - ${siteConfig.siteName} | Leading IPO & Stock Market Information Platform`,
  description: siteConfig.siteDescription,
  keywords: "about us, IPO platform, stock market information, GMP data, investment research, financial services India",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Using Global Config */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {siteConfig.siteName}
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {siteConfig.siteDescription}
            </p>
            <p className="text-lg text-blue-600 font-medium mt-4">
              {siteConfig.siteTagline}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We are committed to democratizing access to high-quality financial information in India. Our mission
                  is to empower retail investors with the same level of market intelligence that was once available only
                  to institutional investors.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through our comprehensive platform, we provide real-time IPO data, Grey Market Premium insights,
                  buyback information, and detailed broker comparisons to help you make confident investment decisions.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{siteConfig.stats.totalUsers}</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{siteConfig.stats.totalIPOs}</div>
                    <div className="text-sm text-gray-600">IPOs Tracked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">{siteConfig.stats.accuracy}</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">Since {siteConfig.stats.foundedYear}</div>
                    <div className="text-sm text-gray-600">Trusted Platform</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
              <p className="text-lg text-gray-600">Comprehensive financial services designed for modern investors</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">IPO Tracking</h3>
                <p className="text-gray-600 mb-4">
                  Real-time IPO information including dates, price bands, subscription status, and allotment details.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Live subscription data
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Allotment predictions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Historical performance
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">GMP Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive Grey Market Premium data with trends and predictions for informed decision making.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time GMP updates
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Historical GMP charts
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Market sentiment analysis
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Broker Comparison</h3>
                <p className="text-gray-600 mb-4">
                  Detailed broker reviews and comparisons to help you choose the best trading platform.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Brokerage comparison
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Feature analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    User reviews
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-600">
                  We believe in complete transparency in all our data sources and methodologies.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliability</h3>
                <p className="text-gray-600">
                  Our platform provides accurate, real-time data you can depend on for investment decisions.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our service and user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600">Experienced professionals dedicated to your success</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  RS
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rajesh Sharma</h3>
                <p className="text-blue-600 mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">15+ years in financial markets and investment research</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  PK
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Priya Kapoor</h3>
                <p className="text-green-600 mb-3">Head of Research</p>
                <p className="text-gray-600 text-sm">Former equity research analyst with expertise in IPO analysis</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  AM
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Amit Mehta</h3>
                <p className="text-purple-600 mb-3">CTO</p>
                <p className="text-gray-600 text-sm">Technology leader with experience in fintech and data analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact & Social Media Section - Using Global Config */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600">Connect with us through multiple channels</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href={`mailto:${siteConfig.contactEmail}`} className="text-blue-600 hover:text-blue-700">
                      {siteConfig.contactEmail}
                    </a>
                    <br />
                    <a href={`mailto:${siteConfig.supportEmail}`} className="text-blue-600 hover:text-blue-700 text-sm">
                      {siteConfig.supportEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href={`tel:${siteConfig.company.phone}`} className="text-gray-600 hover:text-gray-900">
                      {siteConfig.company.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">{siteConfig.company.name}</p>
                    <p className="text-gray-600">{getFullAddress()}</p>
                    <p className="text-sm text-gray-500 mt-1">{siteConfig.company.registrationNumber}</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links - Dynamically Generated */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Follow Us</h3>
                <p className="text-gray-600 mb-6">
                  Stay updated with the latest IPO news, market insights, and investment tips by following us on social media.
                </p>
                
                <div className="space-y-4">
                  {getSocialLinks().map((social) => {
                    // Map platform names to icons
                    const iconMap: { [key: string]: any } = {
                      Twitter: Twitter,
                      Facebook: Facebook,
                      Linkedin: Linkedin,
                      Instagram: Instagram,
                      Youtube: Youtube,
                    }
                    
                    const Icon = iconMap[social.name] || Users
                    
                    // Map platform names to colors
                    const colorMap: { [key: string]: string } = {
                      Twitter: "text-blue-400 bg-blue-50 hover:bg-blue-100",
                      Facebook: "text-blue-600 bg-blue-50 hover:bg-blue-100",
                      Linkedin: "text-blue-700 bg-blue-50 hover:bg-blue-100",
                      Instagram: "text-pink-600 bg-pink-50 hover:bg-pink-100",
                      Youtube: "text-red-600 bg-red-50 hover:bg-red-100",
                    }
                    
                    const colorClass = colorMap[social.name] || "text-gray-600 bg-gray-50 hover:bg-gray-100"
                    
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-200 ${colorClass}`}
                      >
                        <Icon className="h-6 w-6" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{social.name}</h4>
                          <p className="text-sm text-gray-600">{social.url}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Investment Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of investors who trust us for their IPO and stock market information needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/upcoming-ipo-calendar"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore IPOs
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
