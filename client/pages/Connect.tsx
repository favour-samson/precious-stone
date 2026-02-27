import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Heart, MapPin, Clock, Zap, BookOpen, Phone, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "general",
    message: "",
    emergencyContact: false,
  });

  const handleFormChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "general",
      message: "",
      emergencyContact: false,
    });
  };

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
          <h1 className="text-5xl font-serif font-bold mb-4">Connect With Us</h1>
          <p className="text-xl text-gray-200">Join our community and find your place of belonging</p>
        </div>
      </section>

      {/* Section 1: New Here? */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">New Here?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* What to Expect */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">What to Expect on Your First Visit</h3>
                <ul className="space-y-4">
                  {[
                    "A warm welcome from our hospitality team at the entrance",
                    "Help finding your way to the sanctuary and parking",
                    "Friendly faces throughout the service",
                    "Meaningful worship and practical Bible teaching",
                    "Opportunity to meet other members in the lobby",
                    "No pressure to give or commit to anything",
                    "A comfortable, welcoming atmosphere for families",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary font-bold flex-shrink-0">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Welcome Team & Visitor Form */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Welcome Team</h3>
                  <p className="text-gray-700 mb-6">
                    Our dedicated welcome team is here to help you feel at home. Look for someone wearing a blue welcome badge.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Zap className="text-primary" size={20} />
                      <span className="text-gray-700">Arrive 10 minutes early for a warm greeting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="text-primary" size={20} />
                      <span className="text-gray-700">Ask us any questions you may have</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="text-primary" size={20} />
                      <span className="text-gray-700">Connect with other first-time visitors</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Visitor Registration</h3>
                  <p className="text-gray-700 mb-4">
                    Fill out our visitor form to receive a welcome gift and updates about events.
                  </p>
                  <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
                    Complete Visitor Form
                  </button>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Next Steps Classes</h3>
                  <p className="text-gray-700 mb-3">
                    Learn about our church, beliefs, and how to get connected.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Sundays 11:15 AM</strong> (After Second Service)
                  </p>
                  <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                    Register for Next Steps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Join a Small Group */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Join a Small Group</h2>

            <p className="text-center text-gray-600 text-lg mb-12">
              Small groups are where real community happens. Find a group that matches your interests and life stage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Bible Study Groups */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bible Study Groups</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Deep dive into Scripture in a small, intimate setting. Various books of the Bible and topics.
                </p>
                <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
                  <p className="text-gray-600 mb-2">Meeting Schedule:</p>
                  <p className="text-gray-700">• Tuesday 7:00 PM</p>
                  <p className="text-gray-700">• Thursday 6:30 AM</p>
                </div>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                  Find a Group
                </button>
              </div>

              {/* Prayer Groups */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">🙏</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Prayer Groups</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Join prayer warriors in focused intercession for family, church, and community needs.
                </p>
                <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
                  <p className="text-gray-600 mb-2">Meeting Schedule:</p>
                  <p className="text-gray-700">• Every morning 6:00 AM</p>
                  <p className="text-gray-700">• Friday evenings 7:00 PM</p>
                </div>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                  Join Prayer Group
                </button>
              </div>

              {/* Interest-Based Groups */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Interest-Based Groups</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Connect with people who share your interests. Single professionals, parents, sports, arts, etc.
                </p>
                <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
                  <p className="text-gray-600">Topics:</p>
                  <p className="text-gray-700 text-xs">• Young Professionals • Parents • Sports • Arts & Music</p>
                </div>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                  Browse Groups
                </button>
              </div>
            </div>

            {/* Group Leaders */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Meet Your Group Leaders</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Pastor David Okafor", group: "Young Professionals Bible Study", time: "Tuesdays 7:00 PM" },
                  { name: "Mrs. Grace Johnson", group: "Women's Prayer Group", time: "Fridays 7:00 PM" },
                  { name: "Pastor Tunde Umeh", group: "Men's Accountability Group", time: "Thursdays 6:30 AM" },
                ].map((leader, idx) => (
                  <div key={idx} className="border rounded-lg p-4">
                    <p className="font-semibold text-gray-900">{leader.name}</p>
                    <p className="text-sm text-primary font-semibold mb-2">{leader.group}</p>
                    <p className="text-sm text-gray-600">{leader.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Volunteer Opportunities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Volunteer Opportunities</h2>

            <p className="text-center text-gray-600 text-lg mb-12">
              Use your gifts and talents to serve and make an eternal difference in lives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Children's Ministry */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">👶 Children's Ministry</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Teach, assist, care for children during services and events.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Skills Needed:</p>
                  <p className="text-sm text-gray-600">Teaching, patience, creativity, care for kids</p>
                </div>
                <p className="text-sm text-primary font-semibold mb-3">Time: 2-4 hours/week</p>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                  Apply Now
                </button>
              </div>

              {/* Welcome Team */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🙋 Welcome Team</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Greet visitors, assist with seating, answer questions.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Skills Needed:</p>
                  <p className="text-sm text-gray-600">Friendliness, hospitality, people skills</p>
                </div>
                <p className="text-sm text-primary font-semibold mb-3">Time: 1-2 hours/week (Sundays)</p>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                  Apply Now
                </button>
              </div>

              {/* Music & Worship */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎵 Music & Worship</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Play instruments, sing in choir, operate sound/lighting.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Skills Needed:</p>
                  <p className="text-sm text-gray-600">Musical talent, tech skills, dedication</p>
                </div>
                <p className="text-sm text-primary font-semibold mb-3">Time: 3-5 hours/week</p>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                  Apply Now
                </button>
              </div>

              {/* Community Outreach */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🤝 Community Outreach</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Participate in community service, visitation, care programs.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Skills Needed:</p>
                  <p className="text-sm text-gray-600">Compassion, communication, organizational skills</p>
                </div>
                <p className="text-sm text-primary font-semibold mb-3">Time: 2-4 hours/week (flexible)</p>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                  Apply Now
                </button>
              </div>

              {/* Ushering */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">👔 Ushering & Logistics</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Direct traffic, assist with offerings, manage logistics during services.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Skills Needed:</p>
                  <p className="text-sm text-gray-600">Organization, leadership, customer service</p>
                </div>
                <p className="text-sm text-primary font-semibold mb-3">Time: 2-3 hours/week (Sundays)</p>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                  Apply Now
                </button>
              </div>

              {/* Office & Administration */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💼 Office & Admin</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Help with administration, data entry, office organization.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Skills Needed:</p>
                  <p className="text-sm text-gray-600">Organization, tech skills, attention to detail</p>
                </div>
                <p className="text-sm text-primary font-semibold mb-3">Time: 3-5 hours/week (flexible)</p>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Volunteer Application */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to Volunteer?</h3>
              <p className="mb-6">
                Fill out our volunteer application and join a ministry team that aligns with your gifts and passion.
              </p>
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-opacity-90 transition">
                Complete Volunteer Application
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Membership */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Church Membership</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Membership Process */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Membership Process</h3>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Attend Next Steps", desc: "Complete our orientation class (1 session)" },
                    { step: "2", title: "Make a Profession", desc: "Publicly declare your faith in Christ" },
                    { step: "3", title: "Submit Application", desc: "Complete membership form with basic info" },
                    { step: "4", title: "Meet with Leadership", desc: "Brief conversation with pastor or leader" },
                    { step: "5", title: "Welcome to Family!", desc: "Formally recognized as church member" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements & Benefits */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-gray-700">Believe in Jesus Christ as Lord and Savior</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-gray-700">Support our statement of faith and doctrine</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-gray-700">Commit to serving and growing spiritually</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-gray-700">Agree to our membership covenant</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Member Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700">Voting rights on church decisions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700">Access to discipleship programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700">Priority for group leadership roles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700">Access to pastoral counseling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Membership Classes */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Membership Classes Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-sm text-gray-600 font-semibold mb-1">CLASS 1: BELIEFS & FOUNDATION</p>
                  <p className="font-semibold text-gray-900 mb-2">Sundays 11:15 AM</p>
                  <p className="text-sm text-gray-600">Learn our core beliefs and church history</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-sm text-gray-600 font-semibold mb-1">CLASS 2: COMMITMENT & SERVICE</p>
                  <p className="font-semibold text-gray-900 mb-2">Sundays 11:15 AM</p>
                  <p className="text-sm text-gray-600">Understand covenant and service expectations</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-sm text-gray-600 font-semibold mb-1">CLASS 3: MINISTRY & CALLING</p>
                  <p className="font-semibold text-gray-900 mb-2">Sundays 11:15 AM</p>
                  <p className="text-sm text-gray-600">Discover your spiritual gifts and ministry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Contact Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <Phone className="text-primary mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 text-sm">+234 (0) 701 000 0000</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <Mail className="text-primary mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">info@rccgpreciousstone.org</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <MapPin className="text-primary mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm">123 Main Street, Lagos, Nigeria</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+234 (0) XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Department Selection *</label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="pastoral">Pastoral Care</option>
                      <option value="youth">Youth Ministry</option>
                      <option value="worship">Worship Ministry</option>
                      <option value="outreach">Outreach & Missions</option>
                      <option value="counseling">Marriage Counseling</option>
                      <option value="prayer">Prayer Requests</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="emergencyContact"
                    id="emergency"
                    checked={formData.emergencyContact}
                    onChange={handleFormChange}
                    className="w-4 h-4 text-primary rounded"
                  />
                  <label htmlFor="emergency" className="text-sm text-gray-700">
                    This is an emergency that requires immediate response
                  </label>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Response Time:</strong> We aim to respond to all inquiries within 24 business hours. For
                    emergencies, please call us directly.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
