import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, Music, Tv, Radio, Smartphone, Calendar, Users } from "lucide-react";

export default function Services() {
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
          <h1 className="text-5xl font-serif font-bold mb-4">Services & Programs</h1>
          <p className="text-xl text-gray-200">Worship with us in the way that works best for you</p>
        </div>
      </section>

      {/* Section 1: Regular Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Regular Services</h2>

            {/* Sunday Services */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-2">
                <Calendar className="text-primary" size={28} />
                Sunday Services
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* First Service */}
                <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">First Service</h4>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="text-primary flex-shrink-0" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Time</p>
                        <p className="font-semibold text-gray-900">7:30 AM - 9:00 AM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Music className="text-primary flex-shrink-0" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Style</p>
                        <p className="font-semibold text-gray-900">Traditional Hymns & Scripture Meditation</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="text-primary flex-shrink-0" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Audience</p>
                        <p className="font-semibold text-gray-900">All ages welcome, quieter atmosphere</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    A reverent worship experience emphasizing deep prayer, reflective Scripture study, and traditional hymn singing. Perfect for those who prefer a more meditative worship style.
                  </p>
                </div>

                {/* Second Service */}
                <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-secondary">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Second Service</h4>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="text-secondary flex-shrink-0" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Time</p>
                        <p className="font-semibold text-gray-900">10:00 AM - 12:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Music className="text-secondary flex-shrink-0" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Style</p>
                        <p className="font-semibold text-gray-900">Contemporary Worship & Dynamic Teaching</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="text-secondary flex-shrink-0" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Audience</p>
                        <p className="font-semibold text-gray-900">Families, young adults, first-time visitors</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    A vibrant worship service with contemporary music, interactive elements, and practical teaching. Children are welcomed to participate in interactive segments.
                  </p>
                </div>
              </div>

              {/* Children's Church */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">👶 Children's Church</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-1">Time</p>
                    <p className="text-gray-900">During Second Service (10:00 AM)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-1">Age Groups</p>
                    <p className="text-gray-900">Ages 3-12</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-1">Location</p>
                    <p className="text-gray-900">Children's Ministry Wing</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  A special service designed specifically for children featuring Bible stories, interactive lessons, age-appropriate music, and activities. Trained volunteers provide a safe, fun learning environment.
                </p>
              </div>
            </div>

            {/* Midweek Services */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-2">
                <Clock className="text-primary" size={28} />
                Midweek Services
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Wednesday Bible Study */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Wednesday Bible Study</h4>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">Day & Time</p>
                      <p className="text-gray-900">Wednesday, 7:00 PM - 8:30 PM</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">Location</p>
                      <p className="text-gray-900">Main Sanctuary</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">Focus</p>
                      <p className="text-gray-900">Deep dive into Scripture, verse-by-verse study</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    In-depth exploration of God's Word with interactive discussions and practical applications.
                  </p>
                </div>

                {/* Friday Prayer Meeting */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Friday Prayer Meeting</h4>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">Day & Time</p>
                      <p className="text-gray-900">Friday, 6:30 PM - 8:00 PM</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">Location</p>
                      <p className="text-gray-900">Prayer Chapel</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">Focus</p>
                      <p className="text-gray-900">Corporate intercession, prayer requests, worship</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    A night dedicated to prayer for the church, families, nation, and personal needs.
                  </p>
                </div>

                {/* Youth Service */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Youth Service</h4>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">Day & Time</p>
                      <p className="text-gray-900">Saturday, 5:00 PM - 7:00 PM</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">Location</p>
                      <p className="text-gray-900">Fellowship Hall</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">Age Group</p>
                      <p className="text-gray-900">Ages 13-25</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Dynamic worship and teaching addressing youth challenges, relationships, and faith journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Special Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Special Programs</h2>

            {/* Monthly Programs */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Monthly Programs</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <div className="text-4xl mb-4">🙏</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Holy Communion Service</h4>
                  <p className="text-sm text-primary font-semibold mb-3">First Sunday • 8:00 AM</p>
                  <p className="text-gray-700 text-sm">
                    A solemn remembrance of Christ's sacrifice. A powerful time of spiritual renewal and covenant renewal with God.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <div className="text-4xl mb-4">🎵</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Night of Worship</h4>
                  <p className="text-sm text-primary font-semibold mb-3">Third Friday • 7:00 PM</p>
                  <p className="text-gray-700 text-sm">
                    Extended worship experience with contemporary and traditional songs, prayers, and prophetic ministry.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <div className="text-4xl mb-4">⚕️</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Healing & Deliverance</h4>
                  <p className="text-sm text-primary font-semibold mb-3">Last Saturday • 5:00 PM</p>
                  <p className="text-gray-700 text-sm">
                    Focused prayer and ministry for physical healing, emotional wholeness, and spiritual breakthrough.
                  </p>
                </div>
              </div>
            </div>

            {/* Quarterly Programs */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Quarterly Programs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-4xl mb-4">🔥</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Revival Meetings</h4>
                  <p className="text-sm text-primary font-semibold mb-3">3-5 Days Each Quarter</p>
                  <p className="text-gray-700 mb-4">
                    Intensive spiritual renewal events featuring powerful preaching, extended worship, and Holy Spirit ministry. Guest speakers and anointed ministers bring fresh fire and passion to the faith.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Next Revival:</strong> March 17-20, 2025
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-4xl mb-4">👨‍🏫</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Leadership Conferences</h4>
                  <p className="text-sm text-primary font-semibold mb-3">Quarterly (2-3 Days)</p>
                  <p className="text-gray-700 mb-4">
                    Training and development for church leaders, ministry coordinators, and aspiring leaders. Topics include spiritual leadership, team management, vision casting, and pastoral excellence.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Next Conference:</strong> April 14-16, 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Annual Programs */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Annual Programs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-6">
                  <div className="text-4xl mb-4">🎉</div>
                  <h4 className="text-lg font-semibold mb-2">Church Anniversary</h4>
                  <p className="text-sm font-semibold mb-3 opacity-90">June 15-17, 2025</p>
                  <p className="opacity-90">
                    Celebration of God's faithfulness, thanksgiving service, testimonies, special events, and fellowship meals commemorating another year of ministry and God's blessings.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg p-6">
                  <div className="text-4xl mb-4">🎄</div>
                  <h4 className="text-lg font-semibold mb-2">Christmas/New Year Programs</h4>
                  <p className="text-sm font-semibold mb-3 opacity-90">December 1 - January 2</p>
                  <p className="opacity-90">
                    Extended celebration including carol nights, nativity plays, Christmas services, new year thanksgiving, and vision setting sessions for the coming year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Online Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Online Services</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Can't join us in person? Experience our services from anywhere in the world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Live Streaming */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                  <Tv className="w-10 h-10 mb-3" />
                  <h3 className="text-2xl font-semibold">Live Streaming</h3>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Schedule</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>• <strong>Sundays:</strong> 7:30 AM & 10:00 AM (Both services)</p>
                      <p>• <strong>Wednesdays:</strong> 7:00 PM (Bible Study)</p>
                      <p>• <strong>Fridays:</strong> 6:30 PM (Prayer Meeting)</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-6">
                    Join us live on multiple platforms from your home, office, or anywhere in the world.
                  </p>
                  <div className="space-y-2">
                    <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                      Watch Live on YouTube
                    </button>
                    <button className="w-full px-4 py-2 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition text-sm">
                      Watch on Facebook
                    </button>
                  </div>
                </div>
              </div>

              {/* Archived Services */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-secondary to-primary p-6 text-white">
                  <Radio className="w-10 h-10 mb-3" />
                  <h3 className="text-2xl font-semibold">Archived Services</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    Missed a service? All our services are recorded and available on demand. Browse by date, speaker, or topic to find what you're looking for.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Latest Services:</strong>
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• February 23 - "Faith in the Midst of Challenges"</li>
                      <li>• February 16 - "The Power of Prayer"</li>
                      <li>• February 9 - "Living a Life of Purpose"</li>
                    </ul>
                  </div>
                  <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                    Browse All Services
                  </button>
                </div>
              </div>
            </div>

            {/* Podcast & App */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Podcast */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">🎙️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Podcast</h3>
                <p className="text-gray-700 mb-6">
                  Listen to our sermons on your favorite podcast platform. Perfect for your commute or daily walk.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-900">Available on:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border">Apple Podcasts</span>
                    <span className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border">Spotify</span>
                    <span className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border">Google Podcasts</span>
                  </div>
                </div>
              </div>

              {/* Mobile App */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile App</h3>
                <p className="text-gray-700 mb-6">
                  Download our official app for sermons, events, prayer requests, and community engagement on the go.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-900">Download from:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border">App Store</span>
                    <span className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border">Google Play</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Find Your Service</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Whether you prefer traditional or contemporary worship, morning or evening services, online or in-person, we have a service that works for you.
          </p>
          <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
            Plan Your Visit
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
