import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, Users, Filter, Check } from "lucide-react";
import { useState } from "react";

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [rsvpedEvents, setRsvpedEvents] = useState<number[]>([]);

  const events = [
    {
      id: 1,
      title: "Morning Worship Service",
      date: "2025-02-23",
      time: "7:30 AM",
      location: "Main Sanctuary",
      category: "Worship Services",
      color: "bg-red-100 border-red-500",
      icon: "🙏",
      description: "Traditional worship service with hymns and Scripture meditation",
      capacity: 1500,
      attending: 1200,
    },
    {
      id: 2,
      title: "Second Service - Contemporary Worship",
      date: "2025-02-23",
      time: "10:00 AM",
      location: "Main Sanctuary",
      category: "Worship Services",
      color: "bg-red-100 border-red-500",
      icon: "🎵",
      description: "Dynamic worship with contemporary music and practical teaching",
      capacity: 1500,
      attending: 1100,
    },
    {
      id: 3,
      title: "Wednesday Bible Study",
      date: "2025-02-26",
      time: "7:00 PM",
      location: "Main Sanctuary",
      category: "Bible Studies",
      color: "bg-blue-100 border-blue-500",
      icon: "📖",
      description: "In-depth Scripture study and discussion",
      capacity: 300,
      attending: 180,
    },
    {
      id: 4,
      title: "Youth Fellowship Night",
      date: "2025-03-01",
      time: "5:00 PM",
      location: "Fellowship Hall",
      category: "Fellowship Events",
      color: "bg-purple-100 border-purple-500",
      icon: "🎯",
      description: "Games, worship, and community for youth ages 13-25",
      capacity: 400,
      attending: 250,
    },
    {
      id: 5,
      title: "Prayer Meeting",
      date: "2025-02-28",
      time: "6:30 PM",
      location: "Prayer Chapel",
      category: "Prayer Meetings",
      color: "bg-indigo-100 border-indigo-500",
      icon: "💫",
      description: "Corporate intercession for church, nation, and personal needs",
      capacity: 100,
      attending: 65,
    },
    {
      id: 6,
      title: "Community Health Outreach",
      date: "2025-03-08",
      time: "9:00 AM",
      location: "Community Center",
      category: "Outreach/Mission",
      color: "bg-green-100 border-green-500",
      icon: "⚕️",
      description: "Free health screening and medical consultations for the community",
      capacity: 500,
      attending: 0,
    },
    {
      id: 7,
      title: "Leadership Training Workshop",
      date: "2025-03-15",
      time: "9:00 AM",
      location: "Conference Room",
      category: "Training/Workshops",
      color: "bg-yellow-100 border-yellow-500",
      icon: "👨‍🏫",
      description: "Develop leadership skills for ministry and life impact",
      capacity: 80,
      attending: 45,
    },
    {
      id: 8,
      title: "Night of Worship",
      date: "2025-03-21",
      time: "7:00 PM",
      location: "Main Sanctuary",
      category: "Special Programs",
      color: "bg-pink-100 border-pink-500",
      icon: "🎶",
      description: "Extended worship experience with guest musicians",
      capacity: 1500,
      attending: 0,
    },
    {
      id: 9,
      title: "Easter Celebration Service",
      date: "2025-04-20",
      time: "8:00 AM",
      location: "Main Sanctuary",
      category: "Holiday Events",
      color: "bg-orange-100 border-orange-500",
      icon: "✨",
      description: "Special service celebrating Christ's resurrection",
      capacity: 2000,
      attending: 0,
    },
    {
      id: 10,
      title: "Men's Fellowship Breakfast",
      date: "2025-03-08",
      time: "8:00 AM",
      location: "Fellowship Hall",
      category: "Fellowship Events",
      color: "bg-purple-100 border-purple-500",
      icon: "🍳",
      description: "Monthly gathering with breakfast, fellowship, and teaching",
      capacity: 150,
      attending: 80,
    },
  ];

  const featuredEvents = [
    {
      title: "Revival Meetings 2025",
      dates: "March 17-20, 2025",
      image: "https://images.unsplash.com/photo-1516321318423-f06f70504195?w=600&h=400&fit=crop",
      description:
        "3 days of intensive spiritual renewal with powerful preaching, extended worship, and Holy Spirit ministry. Guest speakers from across the nation.",
      speakers: ["Pastor John Adeleke", "Bishop David Oyedepo", "Evangelist Tunde Maye"],
      highlights: ["Night services 7 PM daily", "Healing and deliverance ministry", "Special music performances"],
    },
    {
      title: "Church Anniversary Celebration",
      dates: "June 15-17, 2025",
      image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&h=400&fit=crop",
      description:
        "Join us as we celebrate 27 years of God's faithfulness. Three days of thanksgiving, testimonies, special events, and celebration.",
      highlights: ["Thanksgiving service", "Testimonies from members", "Special programs and fellowship"],
    },
  ];

  const recurringEvents = [
    { day: "Sunday", time: "7:30 AM", event: "First Service", type: "Weekly" },
    { day: "Sunday", time: "10:00 AM", event: "Second Service", type: "Weekly" },
    { day: "Wednesday", time: "7:00 PM", event: "Bible Study", type: "Weekly" },
    { day: "Friday", time: "6:30 PM", event: "Prayer Meeting", type: "Weekly" },
    { day: "First Saturday", time: "8:00 AM", event: "Men's Fellowship", type: "Monthly" },
    { day: "First Friday", time: "7:00 PM", event: "Women's Prayer Circle", type: "Monthly" },
    { day: "Third Friday", time: "7:00 PM", event: "Night of Worship", type: "Monthly" },
  ];

  const handleRSVP = (eventId: number) => {
    setRsvpedEvents((prev) =>
      prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]
    );
  };

  const filteredEvents =
    selectedCategory === "all" ? events : events.filter((e) => e.category === selectedCategory);

  const categories = [
    "all",
    "Worship Services",
    "Bible Studies",
    "Fellowship Events",
    "Prayer Meetings",
    "Outreach/Mission",
    "Training/Workshops",
    "Special Programs",
    "Holiday Events",
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
          <h1 className="text-5xl font-serif font-bold mb-4">Events Calendar</h1>
          <p className="text-xl text-gray-200">Don't miss out on what's happening at RCCG Precious Stone</p>
        </div>
      </section>

      {/* Section 1: Monthly View with Calendar */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">February 2025 Calendar</h2>

            {/* Calendar Grid */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-center font-semibold text-gray-700 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28].map(
                  (day) => {
                    const hasEvent = events.some((e) => new Date(e.date).getDate() === day);
                    const eventOnDay = events.find((e) => new Date(e.date).getDate() === day);

                    return (
                      <div
                        key={day}
                        className={`aspect-square p-2 rounded-lg text-center cursor-pointer transition ${
                          hasEvent
                            ? `${eventOnDay?.color} border-2 hover:shadow-md`
                            : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                        }`}
                      >
                        <p className="text-sm font-semibold">{day}</p>
                        {hasEvent && eventOnDay && (
                          <p className="text-xs text-gray-700 mt-1 truncate">{eventOnDay.icon}</p>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { color: "bg-red-100", label: "Worship" },
                { color: "bg-blue-100", label: "Bible Study" },
                { color: "bg-purple-100", label: "Fellowship" },
                { color: "bg-green-100", label: "Outreach" },
                { color: "bg-yellow-100", label: "Training" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded ${item.color} border-2`} />
                  <span className="text-sm text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Upcoming Events List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">Upcoming Events</h2>

            {/* Category Filter */}
            <div className="mb-8 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-semibold text-sm transition ${
                    selectedCategory === cat
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                  }`}
                >
                  {cat === "all" ? "All Events" : cat}
                </button>
              ))}
            </div>

            {/* Events List */}
            <div className="space-y-4">
              {filteredEvents.map((event) => (
                <div key={event.id} className={`border-l-4 rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition ${event.color}`}>
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{event.icon}</span>
                        <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                        <span className="ml-auto text-xs font-semibold text-gray-600 bg-white px-2 py-1 rounded">
                          {event.category}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} className="text-primary" />
                          {new Date(event.date).toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} className="text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} className="text-primary" />
                          {event.location}
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm">{event.description}</p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
                        <Users size={14} />
                        {event.attending} / {event.capacity} attending
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 md:w-32">
                      <button
                        onClick={() => handleRSVP(event.id)}
                        className={`px-4 py-2 font-semibold rounded-lg transition text-sm ${
                          rsvpedEvents.includes(event.id)
                            ? "bg-green-500 text-white hover:bg-green-600"
                            : "bg-primary text-white hover:bg-opacity-90"
                        }`}
                      >
                        {rsvpedEvents.includes(event.id) ? (
                          <>
                            <Check size={16} className="inline mr-1" />
                            RSVP'd
                          </>
                        ) : (
                          "RSVP"
                        )}
                      </button>
                      <button className="px-4 py-2 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition text-sm">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Featured Events</h2>

            <div className="space-y-8">
              {featuredEvents.map((event, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    {/* Image */}
                    <div>
                      <img src={event.image} alt={event.title} className="w-full h-80 object-cover rounded-lg" />
                    </div>

                    {/* Details */}
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-lg text-primary font-semibold mb-4">📅 {event.dates}</p>
                      <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>

                      {event.speakers && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Featured Speakers</h4>
                          <ul className="space-y-2">
                            {event.speakers.map((speaker, i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-700">
                                <span className="text-primary">•</span>
                                {speaker}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {event.highlights && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Highlights</h4>
                          <ul className="space-y-2">
                            {event.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-700">
                                <span className="text-primary">✓</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex gap-3">
                        <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
                          Register Now
                        </button>
                        <button className="px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition">
                          Volunteer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Recurring Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Recurring Events</h2>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Day</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Time</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Event</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Frequency</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {recurringEvents.map((rec, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900 font-semibold">{rec.day}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{rec.time}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{rec.event}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                            {rec.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-primary font-semibold text-sm hover:underline">Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Never Miss an Event</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our event notifications and stay updated on all activities at RCCG Precious Stone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-opacity-90 transition">
              Subscribe to Updates
            </button>
            <button className="px-8 py-3 bg-white bg-opacity-20 text-white font-semibold rounded-lg hover:bg-opacity-30 transition border border-white">
              Add to Calendar
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
