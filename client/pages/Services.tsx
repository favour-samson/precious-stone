import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Clock,
  Music,
  Tv,
  Radio,
  Calendar,
  Users,
} from "lucide-react";

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
                <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-secondary">
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

              {/* Children's Church */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  👶 Children's Church
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-1">
                      Time
                    </p>
                    <p className="text-gray-900">
                      During Second Service (10:00 AM)
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-1">
                      Age Groups
                    </p>
                    <p className="text-gray-900">Ages 3-12</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-1">
                      Location
                    </p>
                    <p className="text-gray-900">Children's Ministry Wing</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  A special service designed specifically for children featuring
                  Bible stories, interactive lessons, age-appropriate music, and
                  activities. Trained volunteers provide a safe, fun learning
                  environment.
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
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary">
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
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Online Services
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Can't join us in person? Experience our services from anywhere in
              the world.
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
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Schedule
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>
                        • <strong>Sundays:</strong> 8:00 AM
                      </p>
                      <p>
                        • <strong>Tuesdays:</strong> 5:30 PM (Bible Study)
                      </p>
                      <p>
                        • <strong>Thursdays:</strong> 5:30 PM (Prayer Meeting)
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-6">
                    Join us live on Facebook from your home, office, or anywhere
                    in the world.
                  </p>
                  <div className="space-y-2">
                    {/* Facebook Live — active */}
                    <a
                      href="https://www.facebook.com/profile.php?id=100052050854770"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#1877F2] text-white font-semibold rounded-lg hover:bg-[#1664d8] transition text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      Watch Live on Facebook
                    </a>

                    {/* YouTube — uncomment when ready */}
                    {/* 
                href="https://www.youtube.com/@yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#FF0000] text-white font-semibold rounded-lg hover:bg-[#cc0000] transition text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
                Watch Live on YouTube
              </a> */}
                  </div>
                </div>
              </div>

              {/* Audio Streaming — Mixlr */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                  <Radio className="w-10 h-10 mb-3" />
                  <h3 className="text-2xl font-semibold">Audio Streaming</h3>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Listen Live
                    </h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Prefer audio? Tune in live through our Mixlr broadcast
                      during all services.
                    </p>
                  </div>
                  {/* Mixlr Embedded Player */}
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    <iframe
                      src="https://favour347.mixlr.com"
                      title="Mixlr Live Audio"
                      width="100%"
                      height="180"
                      frameBorder="0"
                      scrolling="no"
                      allow="autoplay"
                    />
                  </div>
                  <a
                    href="https://favour347.mixlr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition text-sm"
                  >
                    Open in Mixlr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Find Your Service
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Whether you prefer traditional or contemporary worship, morning or
            evening services, online or in-person, we have a service that works
            for you.
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
