import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Clock,
  MapPin,
  Music,
  Heart,
  Users,
  Zap,
  Calendar,
  Play,
  Download,
  Youtube,
  Baby,
  Target,
  Dumbbell,
  UsersRound,
  Mic2,
  Hand,
  DollarSign,
  UserPlus,
  MailOpen,
  GraduationCap,
  Smartphone,
  Facebook,
  Instagram,
  Gift,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Section 1: Hero Banner */}
      <section className="relative h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=1200&h=800&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">
              RCCG Precious Stone Area HQ
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
              A Community of Faith, Family, and Fellowship
            </p>

            {/* Service Times */}
            <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center">
                <Clock className="text-primary mb-2" size={28} />
                <p className="text-sm text-gray-300 mb-1">First Service</p>
                <p className="text-lg font-semibold">7:30 AM</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="text-primary mb-2" size={28} />
                <p className="text-sm text-gray-300 mb-1">Second Service</p>
                <p className="text-lg font-semibold">10:00 AM</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="text-primary mb-2" size={28} />
                <p className="text-sm text-gray-300 mb-1">Midweek Service</p>
                <p className="text-lg font-semibold">Wednesdays 7 PM</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/connect"
                className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Plan Your Visit
              </Link>
              <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <Play size={20} />
                Watch Online
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Section 2: Welcome Message */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Pastor's Photo */}
            <div className="rounded-xl overflow-hidden shadow-lg h-96">
              <img
                src="/images/pastor-adeboye.png"
                alt="Senior Pastor"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Welcome Content */}
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Welcome to Our Church
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "Welcome to a place where faith is strengthened, families are
                built, and the love of Christ transforms lives. Whether you're
                here for the first time or you've been with us for years, we're
                honored to have you as part of our church family."
              </p>
              <p className="text-gray-600 italic mb-8">
                — Pastor E.A. Adeboye, General Overseer, RCCG Worldwide
              </p>

              {/* Core Values */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Our Core Values
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Heart
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-700">Faith</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-700">Family</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-700">Fellowship</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Music
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-700">Service</span>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-block mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-600 text-lg">
              Join us for these special gatherings and celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {/* Event Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-40 bg-gradient-to-r from-primary to-secondary" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar size={18} />
                  <span className="text-sm font-semibold">Sunday, Feb 23</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Morning Worship Service
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Join us for an uplifting worship experience and inspiring
                  message.
                </p>
                <p className="text-sm text-gray-500">
                  8:00 AM • Main Sanctuary
                </p>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-40 bg-gradient-to-r from-secondary to-primary" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar size={18} />
                  <span className="text-sm font-semibold">
                    Wednesday, Feb 26
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Midweek Bible Study
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Deepen your faith through interactive Bible study and
                  fellowship.
                </p>
                <p className="text-sm text-gray-500">
                  7:00 PM • Fellowship Hall
                </p>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-40 bg-gradient-to-r from-primary via-secondary to-primary" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar size={18} />
                  <span className="text-sm font-semibold">Saturday, Mar 2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Youth Fellowship Night
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Community service, games, and fellowship for all young adults.
                </p>
                <p className="text-sm text-gray-500">
                  6:00 PM • Community Center
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/events"
              className="inline-block px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition"
            >
              View Full Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Service Times & Location */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Service Times & Location
            </h2>
            <p className="text-gray-600 text-lg">
              We'd love to see you in person
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Service Schedule */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Weekly Schedule
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-lg text-gray-900 mb-1">
                    Sunday Services
                  </h4>
                  <p className="text-gray-600">First Service: 7:30 AM</p>
                  <p className="text-gray-600">Second Service: 10:00 AM</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Children's Church: 10:00 AM
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold text-lg text-gray-900 mb-1">
                    Midweek Service
                  </h4>
                  <p className="text-gray-600">
                    Bible Study: Wednesday 7:00 PM
                  </p>
                  <p className="text-gray-600">
                    Prayer Meeting: Friday 7:00 PM
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-lg text-gray-900 mb-1">
                    Special Programs
                  </h4>
                  <p className="text-gray-600">Holy Communion: First Sunday</p>
                  <p className="text-gray-600">Youth Service: Third Sunday</p>
                </div>
              </div>
            </div>

            {/* Location Map */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Find Us
              </h3>

              <div className="rounded-lg h-80 mb-6 overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1978.5656853217363!2d3.822905038337143!3d7.339140698167354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAjila%20Road%2C%20Elebu-Akuru%2C%20Ibadan!5e0!3m2!1sen!2sng!4v1772195240110!5m2!1sen!2sng"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RCCG Precious Stone Location"
                ></iframe>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Ajila Road, Elebu-Akuru, 
                    </p>
                    <p className="text-gray-600">Ibadan, Nigeria</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Parking Available
                    </p>
                    <p className="text-gray-600">
                      Free parking on grounds • Accessible spaces
                    </p>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Recent Sermons */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Recent Sermons
            </h2>
            <p className="text-gray-600 text-lg">
              Be inspired by powerful messages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            {/* Sermon Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition group">
              <div className="relative h-48 bg-gray-300 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f70504195?w=400&h=300&fit=crop"
                  alt="Sermon thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition">
                  <Play
                    className="text-white opacity-0 group-hover:opacity-100 transition"
                    size={40}
                  />
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-2">February 23, 2025</p>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  Faith in the Midst of Challenges
                </h3>
                <p className="text-sm text-gray-600 mb-3">John 3:16</p>
                <p className="text-sm text-gray-500 mb-4">Pastor John Doe</p>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-gray-100 text-gray-700 font-sm rounded hover:bg-gray-200 transition text-xs">
                    <Play size={14} />
                    Watch
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-gray-100 text-gray-700 font-sm rounded hover:bg-gray-200 transition text-xs">
                    <Download size={14} />
                    Listen
                  </button>
                </div>
              </div>
            </div>

            {/* Sermon Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition group">
              <div className="relative h-48 bg-gray-300 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&h=300&fit=crop"
                  alt="Sermon thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition">
                  <Play
                    className="text-white opacity-0 group-hover:opacity-100 transition"
                    size={40}
                  />
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-2">February 16, 2025</p>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  The Power of Prayer
                </h3>
                <p className="text-sm text-gray-600 mb-3">Matthew 6:6</p>
                <p className="text-sm text-gray-500 mb-4">
                  Pastor Sarah Williams
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-gray-100 text-gray-700 font-sm rounded hover:bg-gray-200 transition text-xs">
                    <Play size={14} />
                    Watch
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-gray-100 text-gray-700 font-sm rounded hover:bg-gray-200 transition text-xs">
                    <Download size={14} />
                    Listen
                  </button>
                </div>
              </div>
            </div>

            {/* Sermon Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition group">
              <div className="relative h-48 bg-gray-300 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1528365842597-2d2e76319fdf?w=400&h=300&fit=crop"
                  alt="Sermon thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition">
                  <Play
                    className="text-white opacity-0 group-hover:opacity-100 transition"
                    size={40}
                  />
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-2">February 9, 2025</p>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  Living a Life of Purpose
                </h3>
                <p className="text-sm text-gray-600 mb-3">Ephesians 4:1</p>
                <p className="text-sm text-gray-500 mb-4">
                  Pastor Michael Brown
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-gray-100 text-gray-700 font-sm rounded hover:bg-gray-200 transition text-xs">
                    <Play size={14} />
                    Watch
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-gray-100 text-gray-700 font-sm rounded hover:bg-gray-200 transition text-xs">
                    <Download size={14} />
                    Listen
                  </button>
                </div>
              </div>
            </div>

            {/* Sermon Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition group">
              <div className="relative h-48 bg-gray-300 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1532236122827-19cd4b2a7d5c?w=400&h=300&fit=crop"
                  alt="Sermon thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition">
                  <Play
                    className="text-white opacity-0 group-hover:opacity-100 transition"
                    size={40}
                  />
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-2">February 2, 2025</p>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  Love Never Fails
                </h3>
                <p className="text-sm text-gray-600 mb-3">1 Corinthians 13:4</p>
                <p className="text-sm text-gray-500 mb-4">
                  Pastor Grace Johnson
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-gray-100 text-gray-700 font-sm rounded hover:bg-gray-200 transition text-xs">
                    <Play size={14} />
                    Watch
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-gray-100 text-gray-700 font-sm rounded hover:bg-gray-200 transition text-xs">
                    <Download size={14} />
                    Listen
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/sermons"
              className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
            >
              All Sermons
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Ministries Spotlight */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Ministries
            </h2>
            <p className="text-gray-600 text-lg">
              Find your place of service and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Ministry Card 1 */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Baby className="text-primary" size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Children's Ministry
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Safe, nurturing environment for kids
              </p>
              <Link
                to="/ministries"
                className="inline-block px-4 py-2 text-primary font-medium text-sm hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Ministry Card 2 */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Target className="text-primary" size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Youth Church
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Empowering the next generation
              </p>
              <Link
                to="/ministries"
                className="inline-block px-4 py-2 text-primary font-medium text-sm hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Ministry Card 3 */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Dumbbell className="text-primary" size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Men's Fellowship
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Building stronger men of faith
              </p>
              <Link
                to="/ministries"
                className="inline-block px-4 py-2 text-primary font-medium text-sm hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Ministry Card 4 */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <UsersRound className="text-primary" size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Women's Fellowship
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Supporting and strengthening women
              </p>
              <Link
                to="/ministries"
                className="inline-block px-4 py-2 text-primary font-medium text-sm hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Ministry Card 5 */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Mic2 className="text-primary" size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Music & Worship
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Excellence in worship leading
              </p>
              <Link
                to="/ministries"
                className="inline-block px-4 py-2 text-primary font-medium text-sm hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Ministry Card 6 */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Hand className="text-primary" size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Prayer Ministry
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                24/7 intercessory prayer support
              </p>
              <Link
                to="/ministries"
                className="inline-block px-4 py-2 text-primary font-medium text-sm hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Testimonies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Member Testimonies
            </h2>
            <p className="text-gray-600 text-lg">
              Real stories of faith and transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Testimony 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  alt="Testimony"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Adekunle Oluwaseun
                  </h4>
                  <p className="text-sm text-gray-600">Member since 2020</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "Coming to RCCG Precious Stone changed my life. I found a loving
                community and renewed my faith in God."
              </p>
            </div>

            {/* Testimony 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="Testimony"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Chioma Nwankwo
                  </h4>
                  <p className="text-sm text-gray-600">Member since 2018</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "The women's fellowship here has been instrumental in my
                spiritual growth and building lasting friendships."
              </p>
            </div>

            {/* Testimony 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
                  alt="Testimony"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Pastor Tunde Okafor
                  </h4>
                  <p className="text-sm text-gray-600">Member since 2015</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "This church embodies the gospel. The leadership is faithful,
                the community is warm, and Christ is central."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Quick Links */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Get Involved</h2>
            <p className="text-gray-300 text-lg">
              Find the perfect way to connect with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link
              to="/giving"
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-primary transition group"
            >
              <DollarSign
                size={40}
                className="mb-3 group-hover:scale-110 transition"
              />
              <span className="font-semibold text-center">Online Giving</span>
            </Link>

            <Link
              to="/prayer-requests"
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-primary transition group"
            >
              <Hand
                size={40}
                className="mb-3 group-hover:scale-110 transition"
              />
              <span className="font-semibold text-center">Prayer Requests</span>
            </Link>

            <Link
              to="/connect"
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-primary transition group"
            >
              <Users
                size={40}
                className="mb-3 group-hover:scale-110 transition"
              />
              <span className="font-semibold text-center">Join a Group</span>
            </Link>

            <Link
              to="/connect"
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-primary transition group"
            >
              <UserPlus
                size={40}
                className="mb-3 group-hover:scale-110 transition"
              />
              <span className="font-semibold text-center">Volunteer</span>
            </Link>

            <Link
              to="/resources"
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-primary transition group"
            >
              <Gift
                size={40}
                className="mb-3 group-hover:scale-110 transition"
              />
              <span className="font-semibold text-center">Resources</span>
            </Link>

            <Link
              to="/connect"
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-primary transition group"
            >
              <MailOpen
                size={40}
                className="mb-3 group-hover:scale-110 transition"
              />
              <span className="font-semibold text-center">Email Updates</span>
            </Link>

            <Link
              to="/services"
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-primary transition group"
            >
              <GraduationCap
                size={40}
                className="mb-3 group-hover:scale-110 transition"
              />
              <span className="font-semibold text-center">Classes</span>
            </Link>

            <Link
              to="#"
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-primary transition group"
            >
              <Smartphone
                size={40}
                className="mb-3 group-hover:scale-110 transition"
              />
              <span className="font-semibold text-center">Download App</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 9: Social Media Feed */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Connect With Us
            </h2>
            <p className="text-gray-600 text-lg">
              Follow our latest updates and news
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Facebook */}
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Facebook className="text-blue-600" size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Facebook
              </h3>
              <p className="text-gray-600 text-sm mb-4">12.5K followers</p>
              <button className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition text-sm">
                Follow Us
              </button>
            </div>

            {/* Instagram */}
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Instagram className="text-pink-600" size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Instagram
              </h3>
              <p className="text-gray-600 text-sm mb-4">8.3K followers</p>
              <button className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition text-sm">
                Follow Us
              </button>
            </div>

            {/* YouTube */}
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Youtube className="text-red-600" size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                YouTube
              </h3>
              <p className="text-gray-600 text-sm mb-4">15.2K followers</p>
              <button className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition text-sm">
                Follow Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
