import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, Music, Tv, Radio, Calendar, Users } from "lucide-react";
import { WatchUsLiveSection } from "@/components/WatchUsLiveSection";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: "url('/images/pastor.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">
            Services & Programs
          </h1>
          <p className="text-xl text-gray-200">
            Worship with us in the way that works best for you
          </p>
        </div>
      </section>

      {/* Section 1: Regular Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Regular Services
            </h2>

            {/* Sunday Services */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-2">
                <Calendar className="text-primary" size={28} />
                Sunday Services
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Second Service */}
                <div className="bg-white rounded-lg shadow-md p-8 border-secondary">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock
                        className="text-secondary flex-shrink-0"
                        size={20}
                      />
                      <div>
                        <p className="text-sm text-gray-600">Time</p>
                        <p className="font-semibold text-gray-900">
                          08:00 AM - 11:00 AM
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Music
                        className="text-secondary flex-shrink-0"
                        size={20}
                      />
                      <div>
                        <p className="text-sm text-gray-600">Style</p>
                        <p className="font-semibold text-gray-900">
                          Contemporary Worship & Dynamic Teaching
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users
                        className="text-secondary flex-shrink-0"
                        size={20}
                      />
                      <div>
                        <p className="text-sm text-gray-600">Audience</p>
                        <p className="font-semibold text-gray-900">
                          Families, young adults, first-time visitors
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    A vibrant worship service with contemporary music,
                    interactive elements, and practical teaching. Children are
                    welcomed to participate in interactive segments.
                  </p>
                </div>
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
                <div className="bg-white rounded-lg shadow-md p-6 border-primary">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Tuesday Bible Study
                  </h4>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">
                        Day & Time
                      </p>
                      <p className="text-gray-900">
                        Tuesday, 5:30 PM - 6:30 PM
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">
                        Location
                      </p>
                      <p className="text-gray-900">Main Sanctuary</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">
                        Focus
                      </p>
                      <p className="text-gray-900">
                        Deep dive into Scripture, verse-by-verse study
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    In-depth exploration of God's Word with interactive
                    discussions and practical applications.
                  </p>
                </div>

                {/* Friday Prayer Meeting */}
                <div className="bg-white rounded-lg shadow-md p-6 border-secondary">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Thurday Prayer Meeting
                  </h4>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">
                        Day & Time
                      </p>
                      <p className="text-gray-900">
                        Thurday, 5:30 PM - 6:30 PM
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">
                        Location
                      </p>
                      <p className="text-gray-900">Main Sanctuary</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">
                        Focus
                      </p>
                      <p className="text-gray-900">
                        Corporate intercession, prayer requests, worship
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    A night dedicated to prayer for the church, families,
                    nation, and personal needs.
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
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Special Programs
            </h2>

            {/* Monthly Programs */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Monthly Programs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <div className="text-4xl mb-4">🙏</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Thanksgiving Service
                  </h4>
                  <p className="text-sm text-primary font-semibold mb-3">
                    First Sunday • 8:00 AM
                  </p>
                  <p className="text-gray-700 text-sm">
                    Extended worship experience with contemporary and
                    traditional songs, prayers, and prophetic ministry.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <div className="text-4xl mb-4">🎵</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Youth Service
                  </h4>
                  <p className="text-sm text-primary font-semibold mb-3">
                    Third Sunday • 8:00 AM
                  </p>
                  <p className="text-gray-700 text-sm">
                    Extended worship experience with contemporary and
                    traditional songs, prayers, and prophetic ministry.
                  </p>
                </div>
              </div>
            </div>

            {/* Quarterly Programs */}
            {/* <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Quarterly Programs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-4xl mb-4">🔥</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Revival Meetings
                  </h4>
                  <p className="text-sm text-primary font-semibold mb-3">
                    3-5 Days Each Quarter
                  </p>
                  <p className="text-gray-700 mb-4">
                    Intensive spiritual renewal events featuring powerful
                    preaching, extended worship, and Holy Spirit ministry. Guest
                    speakers and anointed ministers bring fresh fire and passion
                    to the faith.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Next Revival:</strong> March 17-20, 2025
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-4xl mb-4">👨‍🏫</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Leadership Conferences
                  </h4>
                  <p className="text-sm text-primary font-semibold mb-3">
                    Quarterly (2-3 Days)
                  </p>
                  <p className="text-gray-700 mb-4">
                    Training and development for church leaders, ministry
                    coordinators, and aspiring leaders. Topics include spiritual
                    leadership, team management, vision casting, and pastoral
                    excellence.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Next Conference:</strong> April 14-16, 2025
                  </p>
                </div>
              </div>
            </div> */}

            {/* Annual Programs */}
            {/* <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Annual Programs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-6">
                  <div className="text-4xl mb-4">🎉</div>
                  <h4 className="text-lg font-semibold mb-2">
                    Church Anniversary
                  </h4>
                  <p className="text-sm font-semibold mb-3 opacity-90">
                    June 15-17, 2025
                  </p>
                  <p className="opacity-90">
                    Celebration of God's faithfulness, thanksgiving service,
                    testimonies, special events, and fellowship meals
                    commemorating another year of ministry and God's blessings.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg p-6">
                  <div className="text-4xl mb-4">🎄</div>
                  <h4 className="text-lg font-semibold mb-2">
                    Christmas/New Year Programs
                  </h4>
                  <p className="text-sm font-semibold mb-3 opacity-90">
                    December 1 - January 2
                  </p>
                  <p className="opacity-90">
                    Extended celebration including carol nights, nativity plays,
                    Christmas services, new year thanksgiving, and vision
                    setting sessions for the coming year.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Section 3: Online Services */}
      <section className="py-20">
        <div className=" mx-auto ">
          <div className=" mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Online Services
            </h2>
            <WatchUsLiveSection />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Find Your Service
          </h2>
          <p className=" mb-8 max-w-2xl mx-auto text-lg">
            Whether you prefer traditional or contemporary worship, morning or
            evening services, online or in-person, we have a service that works
            for you.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
