import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CreditCard, Smartphone, Lock, BarChart3, Heart, TrendingUp, Users, Zap } from "lucide-react";

export default function Giving() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=1200&h=600&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">Online Giving</h1>
          <p className="text-xl text-gray-200">Supporting God's work through your generous contributions</p>
        </div>
      </section>

      {/* Section 1: Giving Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Ways to Give</h2>
            <p className="text-center text-gray-600 text-lg mb-12">
              Choose the giving option that works best for you. Every contribution matters and makes an impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* One-Time Donation */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">💝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">One-Time Donation</h3>
                <p className="text-gray-700 mb-4">
                  Make a single contribution toward any ministry or general fund. Perfect for special occasions or when you want to give extra.
                </p>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
                  Give Once
                </button>
              </div>

              {/* Recurring Giving */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Recurring Giving</h3>
                <p className="text-gray-700 mb-4">
                  Set up weekly or monthly automatic donations. Join thousands of partners in sustainable ministry support.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">• Weekly giving</p>
                  <p className="text-sm text-gray-600">• Monthly giving (most popular)</p>
                </div>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
                  Start Recurring
                </button>
              </div>

              {/* Tithes */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">🙏</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tithes</h3>
                <p className="text-gray-700 mb-4">
                  Return the first 10% of your increase to God. Designated specifically for church operations and general expenses.
                </p>
                <p className="text-sm text-gray-600 mb-4">This sacred form of giving sustains our ministry and mission.</p>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
                  Give Your Tithe
                </button>
              </div>

              {/* Offerings */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Offerings</h3>
                <p className="text-gray-700 mb-4">
                  Give additional amounts beyond your tithe to support specific areas. Your generosity blesses the church and community.
                </p>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
                  Give an Offering
                </button>
              </div>

              {/* Building Fund */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Building Fund</h3>
                <p className="text-gray-700 mb-4">
                  Support our expansion project. Help us build additional facilities to serve our growing congregation and community.
                </p>
                <p className="text-sm text-primary font-semibold mb-4">Progress: 45% funded</p>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
                  Support Building Fund
                </button>
              </div>

              {/* Mission Support */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mission Support</h3>
                <p className="text-gray-700 mb-4">
                  Fund missionary work, international outreach, and evangelism. Extend God's kingdom beyond our borders.
                </p>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
                  Support Missions
                </button>
              </div>

              {/* Special Projects */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition md:col-span-2">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Special Projects</h3>
                <p className="text-gray-700 mb-4">
                  Support unique initiatives like community outreach programs, children's education, widows care, and emergency relief efforts.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-gray-900 text-sm">Current Project</p>
                    <p className="text-gray-600 text-sm">Youth Scholarship Program 2025</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-gray-900 text-sm">Next Project</p>
                    <p className="text-gray-600 text-sm">Community Medical Outreach</p>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
                  Support Special Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Payment Methods */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Payment Methods</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Online Payment Methods */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Online Payment</h3>
                <div className="space-y-4">
                  {/* Credit/Debit Card */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center gap-3 mb-3">
                      <CreditCard className="text-primary" size={24} />
                      <h4 className="text-lg font-semibold text-gray-900">Credit/Debit Card</h4>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      Visa, Mastercard, and American Express accepted. Quick and convenient.
                    </p>
                    <button className="px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                      Give with Card
                    </button>
                  </div>

                  {/* Mobile Money */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center gap-3 mb-3">
                      <Smartphone className="text-primary" size={24} />
                      <h4 className="text-lg font-semibold text-gray-900">Mobile Money</h4>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      MTN Mobile Money, Airtel Money, Glo Mobile Money - Fast and accessible.
                    </p>
                    <button className="px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                      Give via Mobile
                    </button>
                  </div>

                  {/* Cryptocurrency */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="text-primary" size={24} />
                      <h4 className="text-lg font-semibold text-gray-900">Cryptocurrency</h4>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      Support ministry with Bitcoin or Ethereum. Contact us for wallet details.
                    </p>
                    <button className="px-4 py-2 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition text-sm">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>

              {/* Offline Payment Methods */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">In-Person & Offline</h3>
                <div className="space-y-4">
                  {/* Bank Transfer */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Bank Transfer</h4>
                    <div className="bg-gray-50 p-4 rounded mb-3 text-sm space-y-2">
                      <p>
                        <strong>Bank Name:</strong> First Bank of Nigeria
                      </p>
                      <p>
                        <strong>Account:</strong> RCCG Precious Stone Area HQ
                      </p>
                      <p>
                        <strong>Account No:</strong> 1234567890
                      </p>
                      <p>
                        <strong>SWIFT Code:</strong> FBNGNGLA
                      </p>
                    </div>
                    <button className="w-full px-4 py-2 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition text-sm">
                      Copy Details
                    </button>
                  </div>

                  {/* Check Payment */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Check Payment</h4>
                    <div className="bg-gray-50 p-4 rounded mb-3 text-sm space-y-2">
                      <p>Mail checks payable to:</p>
                      <p className="font-semibold">RCCG Precious Stone Area HQ</p>
                      <p>123 Main Street</p>
                      <p>Lagos, Nigeria 101001</p>
                    </div>
                    <p className="text-xs text-gray-600">Please write your name on the check for tax receipt</p>
                  </div>

                  {/* In-Person Offering */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">In-Person Offering</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Offering envelopes are available at every service. Place your gift in an envelope and drop in the offering baskets.
                    </p>
                    <p className="text-xs text-gray-600">Services: Sundays 7:30 AM & 10:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Secure Giving */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Secure & Transparent</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Security Features */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="text-primary" size={32} />
                  <h3 className="text-2xl font-semibold text-gray-900">Your Security</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">SSL Encryption (256-bit)</p>
                      <p className="text-sm text-gray-600">All transactions encrypted and secure</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">PCI DSS Compliant</p>
                      <p className="text-sm text-gray-600">Meets international payment security standards</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">No Data Storage</p>
                      <p className="text-sm text-gray-600">We don't store your sensitive payment information</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Verified Privacy</p>
                      <p className="text-sm text-gray-600">Your donation records are confidential</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Receipts & Statements */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tax & Documentation</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tax Receipt</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Automatically generated after each donation. Download instantly or receive via email.
                    </p>
                    <p className="text-xs text-gray-600">
                      RCCG Precious Stone Area HQ is a registered charitable organization. Tax ID: 123456789
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Annual Giving Statement</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Comprehensive summary of all donations for the year. Perfect for tax filing.
                    </p>
                    <button className="px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                      Access Giving Portal
                    </button>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Privacy Policy</h4>
                    <p className="text-gray-700 text-sm">
                      Your information is protected and used only for donation tracking and communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600 mb-6">Secured & Certified by:</p>
              <div className="flex flex-wrap justify-center gap-8">
                {["🔒 SSL Secure", "✓ Verified Charity", "🛡️ PCI Compliant", "✓ Transparent"].map((badge, idx) => (
                  <div key={idx} className="text-sm font-semibold text-gray-700">
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why We Give */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">Why We Give</h2>

            {/* Biblical Principles */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8">Biblical Principles of Giving</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Heart size={20} />
                    Generosity Reflects God's Love
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "It is more blessed to give than to receive." (Acts 20:35) Giving is an expression of our love for God and others.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Zap size={20} />
                    Trust & God's Provision
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "Whoever sows sparingly will reap sparingly, and whoever sows generously will reap generously." (2 Corinthians 9:6)
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Users size={20} />
                    Supporting God's Work
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Your giving supports ministry, discipleship, and outreach that changes lives and extends God's kingdom.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp size={20} />
                    Kingdom Impact
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Together, we make an eternal difference in our community and around the world through missions and ministry.
                  </p>
                </div>
              </div>
            </div>

            {/* Where Money Goes */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8">Where Your Giving Goes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Budget Breakdown */}
                <div>
                  <div className="space-y-4 mb-6">
                    {[
                      { category: "Ministry & Outreach", percentage: 35, amount: "35%" },
                      { category: "Staff & Operations", percentage: 25, amount: "25%" },
                      { category: "Building & Facilities", percentage: 20, amount: "20%" },
                      { category: "Community Support", percentage: 12, amount: "12%" },
                      { category: "Missions & Global Work", percentage: 8, amount: "8%" },
                    ].map((item, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-white font-semibold">{item.category}</span>
                          <span className="text-primary font-bold">{item.amount}</span>
                        </div>
                        <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spending Summary */}
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Budget Summary 2024</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-3 border-b border-white border-opacity-20">
                      <span>Total Giving Received</span>
                      <span className="font-bold">₦45.2M</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-white border-opacity-20">
                      <span>Community Outreach Impact</span>
                      <span className="font-bold">₦15.8M</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-white border-opacity-20">
                      <span>Missions & Global Work</span>
                      <span className="font-bold">₦3.6M</span>
                    </div>
                    <div className="flex justify-between pt-3">
                      <span className="font-semibold">People Impacted</span>
                      <span className="font-bold text-primary">12,500+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Stories */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8">Impact Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <p className="text-sm leading-relaxed mb-4">
                    "Your giving helped us establish a school for 200 underprivileged children. They now have hope and a future."
                  </p>
                  <p className="text-primary font-semibold">— Community Education Program</p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <p className="text-sm leading-relaxed mb-4">
                    "Donations funded medical clinics that provided free healthcare to 5,000 people in rural communities."
                  </p>
                  <p className="text-primary font-semibold">— Healthcare Ministry</p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <p className="text-sm leading-relaxed mb-4">
                    "Your support enabled us to send 50 missionaries to 5 African nations. Lives are being transformed daily."
                  </p>
                  <p className="text-primary font-semibold">— Global Missions</p>
                </div>
              </div>
            </div>

            {/* Transparency Report */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Financial Transparency</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We believe in complete transparency with our donors. Access our detailed annual financial reports, audits, and impact statements.
              </p>
              <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
                View 2024 Financial Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Ready to Make an Impact?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Your generosity changes lives, strengthens ministries, and extends God's kingdom. Give today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
              Give Now
            </button>
            <button className="px-8 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
