import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {  Heart, TrendingUp, Users, Zap } from "lucide-react";

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
              
              </div>

              {/* Tithes */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">🙏</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tithes</h3>
                <p className="text-gray-700 mb-4">
                  Return the first 10% of your increase to God. Designated specifically for church operations and general expenses.
                </p>
                <p className="text-sm text-gray-600 mb-4">This sacred form of giving sustains our ministry and mission.</p>
             
              </div>

              {/* Offerings */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Offerings</h3>
                <p className="text-gray-700 mb-4">
                  Give additional amounts beyond your tithe to support specific areas. Your generosity blesses the church and community.
                </p>
                
              </div>

              {/* Building Fund */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Building Fund</h3>
                <p className="text-gray-700 mb-4">
                  Support our expansion project. Help us build additional facilities to serve our growing congregation and community.
                </p>
                <p className="text-sm text-primary font-semibold mb-4">Progress: 45% funded</p>
                
              </div>

              {/* Mission Support */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mission Support</h3>
                <p className="text-gray-700 mb-4">
                  Fund missionary work, international outreach, and evangelism. Extend God's kingdom beyond our borders.
                </p>
                
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

            <div className="grid grid-cols-1  gap-8 mb-12">           

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
                    <p className="text-xs text-gray-600">Services: Sundays 8:00 AM </p>
                  </div>
                </div>
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
            {/* <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
              Give Now
            </button>
            <button className="px-8 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition">
              Learn More
            </button> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
