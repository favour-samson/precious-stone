import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Play, Download, Filter, Mic, Calendar, BookOpen } from "lucide-react";
import { useState } from "react";

export default function Sermons() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const sermons = [
    {
      id: 1,
      title: "Faith in the Midst of Challenges",
      date: "2025-02-23",
      scripture: "John 3:16",
      speaker: "Pastor John Adeleke",
      series: "Faith Series",
      type: "video",
      views: 2500,
      duration: "45 min",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f70504195?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "The Power of Prayer",
      date: "2025-02-16",
      scripture: "Matthew 6:6",
      speaker: "Pastor Sarah Williams",
      series: "Prayer Series",
      type: "video",
      views: 1800,
      duration: "38 min",
      thumbnail: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Living a Life of Purpose",
      date: "2025-02-09",
      scripture: "Ephesians 4:1",
      speaker: "Pastor Michael Brown",
      series: "Purpose Series",
      type: "video",
      views: 2100,
      duration: "42 min",
      thumbnail: "https://images.unsplash.com/photo-1528365842597-2d2e76319fdf?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Love Never Fails",
      date: "2025-02-02",
      scripture: "1 Corinthians 13:4",
      speaker: "Pastor Grace Johnson",
      series: "Love Series",
      type: "audio",
      views: 1600,
      duration: "35 min",
      thumbnail: "https://images.unsplash.com/photo-1532236122827-19cd4b2a7d5c?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Overcoming Fear",
      date: "2025-01-26",
      scripture: "2 Timothy 1:7",
      speaker: "Pastor John Adeleke",
      series: "Faith Series",
      type: "video",
      views: 3200,
      duration: "48 min",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      title: "The Joy of Giving",
      date: "2025-01-19",
      scripture: "Acts 20:35",
      speaker: "Pastor David Okafor",
      series: "Generosity Series",
      type: "audio",
      views: 1400,
      duration: "32 min",
      thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
    },
  ];

  const currentSeries = {
    title: "Faith Series",
    description:
      "A powerful series exploring how faith transforms our lives, overcomes challenges, and positions us for God's blessings. Whether facing impossible situations or seeking to deepen your trust in God, this series will strengthen your foundation.",
    sermons: [
      "Faith in the Midst of Challenges",
      "Overcoming Fear",
      "Faith for the Future",
    ],
    artwork: "https://images.unsplash.com/photo-1516321318423-f06f70504195?w=600&h=400&fit=crop",
    discussionQuestions: [
      "How have you experienced God's faithfulness in your life?",
      "What are the main barriers to faith in your journey?",
      "How can we grow our faith during uncertain times?",
      "What does it mean to 'walk by faith and not by sight'?",
    ],
  };

  const popularSeries = [
    {
      title: "Faith Series",
      views: "8,500+ views",
      type: "Topical",
      color: "from-blue-100 to-cyan-100",
    },
    {
      title: "Prayer Series",
      views: "7,200+ views",
      type: "Topical",
      color: "from-purple-100 to-pink-100",
    },
    {
      title: "Love Series",
      views: "6,800+ views",
      type: "Topical",
      color: "from-red-100 to-pink-100",
    },
    {
      title: "Christmas Series",
      views: "9,300+ views",
      type: "Seasonal",
      color: "from-green-100 to-emerald-100",
    },
    {
      title: "Easter Series",
      views: "8,100+ views",
      type: "Seasonal",
      color: "from-yellow-100 to-orange-100",
    },
    {
      title: "New Year Series",
      views: "7,600+ views",
      type: "Seasonal",
      color: "from-indigo-100 to-blue-100",
    },
  ];

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
          <h1 className="text-5xl font-serif font-bold mb-4">Sermon Library</h1>
          <p className="text-xl text-gray-200">Access powerful messages that transform lives</p>
        </div>
      </section>

      {/* Section 1: Sermon Library with Search & Filters */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by date, topic, scripture, or speaker..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              {/* Series Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Series</label>
                <select
                  value={selectedSeries}
                  onChange={(e) => setSelectedSeries(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                  <option value="all">All Series</option>
                  <option value="faith">Faith Series</option>
                  <option value="prayer">Prayer Series</option>
                  <option value="purpose">Purpose Series</option>
                  <option value="love">Love Series</option>
                  <option value="generosity">Generosity Series</option>
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                  <option value="all">All Years</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                  <option value="all">All Types</option>
                  <option value="video">Video</option>
                  <option value="audio">Audio</option>
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                  <option value="newest">Newest First</option>
                  <option value="mostviewed">Most Viewed</option>
                  <option value="series">By Series</option>
                </select>
              </div>

              {/* Reset Button */}
              <div className="flex items-end">
                <button className="w-full px-4 py-2 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition text-sm">
                  <Filter size={16} className="inline mr-2" />
                  Reset
                </button>
              </div>
            </div>

            {/* Sermon Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sermons.map((sermon) => (
                <div key={sermon.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition group">
                  {/* Thumbnail */}
                  <div className="relative h-40 bg-gray-300 overflow-hidden">
                    <img
                      src={sermon.thumbnail}
                      alt={sermon.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                    <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition">
                      <Play className="text-white opacity-0 group-hover:opacity-100 transition" size={40} />
                    </button>
                    <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                      {sermon.type === "video" ? "VIDEO" : "AUDIO"}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-2">
                      <Calendar size={12} className="inline mr-1" />
                      {new Date(sermon.date).toLocaleDateString()}
                    </p>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{sermon.title}</h3>
                    <p className="text-xs text-primary font-semibold mb-2">{sermon.series}</p>
                    <p className="text-xs text-gray-600 mb-3">{sermon.scripture}</p>
                    <p className="text-xs text-gray-500 mb-4">By {sermon.speaker}</p>

                    {/* Stats */}
                    <div className="flex justify-between items-center text-xs text-gray-600 mb-4 pb-4 border-t">
                      <span>{sermon.views.toLocaleString()} views</span>
                      <span>{sermon.duration}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-primary text-white font-sm rounded hover:bg-opacity-90 transition text-xs">
                        <Play size={14} />
                        {sermon.type === "video" ? "Watch" : "Listen"}
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-gray-100 text-gray-700 font-sm rounded hover:bg-gray-200 transition text-xs">
                        <Download size={14} />
                        Notes
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Current Series */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Current Series</h2>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Series Image */}
                <div>
                  <img
                    src={currentSeries.artwork}
                    alt={currentSeries.title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>

                {/* Series Info */}
                <div>
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">{currentSeries.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{currentSeries.description}</p>

                  {/* Sermons in Series */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Sermons in This Series</h4>
                    <ul className="space-y-2">
                      {currentSeries.sermons.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary font-bold">•</span>
                          <span className="text-gray-700">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition mb-6">
                    Watch All Sermons
                  </button>
                </div>
              </div>

              {/* Discussion Questions */}
              <div className="bg-gray-50 p-8 border-t">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Discussion Questions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentSeries.discussionQuestions.map((q, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-primary">
                      <p className="text-gray-700 text-sm">{q}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Media Formats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Access Sermons in Multiple Formats</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Video Sermons */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="text-5xl mb-4">🎥</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Video Sermons</h3>
                <p className="text-gray-700 mb-6">
                  Watch full sermons on YouTube or Vimeo. Perfect for seeing facial expressions and visual illustrations.
                </p>
                <div className="space-y-3">
                  <button className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition text-sm">
                    Watch on YouTube
                  </button>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-sm">
                    Watch on Vimeo
                  </button>
                </div>
              </div>

              {/* Audio Podcasts */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="text-5xl mb-4">🎙️</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Audio Podcasts</h3>
                <p className="text-gray-700 mb-6">
                  Listen to sermons on your favorite podcast platform. Great for commutes and workouts.
                </p>
                <div className="space-y-3">
                  <button className="w-full px-4 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition text-sm">
                    Apple Podcasts
                  </button>
                  <button className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition text-sm">
                    Spotify
                  </button>
                </div>
              </div>

              {/* Sermon Notes */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sermon Notes</h3>
                <p className="text-gray-700 mb-6">
                  Download detailed sermon notes and outline in PDF format for easy reference and study.
                </p>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                  Download Notes Library
                </button>
              </div>

              {/* Discussion Guides */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Discussion Guides</h3>
                <p className="text-gray-700 mb-6">
                  Use our discussion guides for small groups, Bible study, and personal reflection.
                </p>
                <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                  Access Guides
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Popular Series */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Popular Series</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularSeries.map((series, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${series.color} rounded-lg p-6 hover:shadow-lg transition cursor-pointer`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{series.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{series.type}</p>
                  <p className="text-sm font-semibold text-primary mb-4">{series.views}</p>
                  <button className="w-full px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                    Watch Series
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Subscribe Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Never Miss a Sermon</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Podcast Subscriptions */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Podcast Subscriptions</h3>
                <p className="text-gray-700 mb-6">
                  Subscribe to our podcast on your favorite platform and get new sermons automatically.
                </p>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition">
                    🍎 Apple Podcasts
                  </button>
                  <button className="w-full px-4 py-3 flex items-center justify-center gap-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
                    🎵 Spotify
                  </button>
                  <button className="w-full px-4 py-3 flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                    🔵 Google Podcasts
                  </button>
                </div>
              </div>

              {/* YouTube & Email */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">More Ways to Stay Updated</h3>
                <p className="text-gray-700 mb-6">
                  Subscribe to YouTube, get email updates, or download our mobile app.
                </p>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 flex items-center justify-center gap-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">
                    ▶️ YouTube Channel
                  </button>
                  <button className="w-full px-4 py-3 flex items-center justify-center gap-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
                    📧 Email Updates
                  </button>
                  <button className="w-full px-4 py-3 flex items-center justify-center gap-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition">
                    📱 Mobile App
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
