import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  MapPin,
  Music,
  Heart,
  Users,
  Zap,
  Calendar,
  Play,
  Youtube,
  Baby,
  Target,
  Dumbbell,
  UsersRound,
  Mic2,
  Hand,
  DollarSign,
  UserPlus,
  Facebook,
  Instagram,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { WatchUsLiveSection } from "@/components/WatchUsLiveSection";
import { BsTiktok } from "react-icons/bs";

export default function Index() {
  const sermons = [
    {
      id: 1,
      date: "February 23, 2025",
      title: "Faith in the Midst of Challenges",
      verse: "John 3:16",
      pastor: "Pastor John Doe",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f70504195?w=400&h=300&fit=crop",
      facebookUrl: "https://www.facebook.com/your-page/videos/VIDEO_ID_1",
    },
    {
      id: 2,
      date: "February 16, 2025",
      title: "The Power of Prayer",
      verse: "Matthew 6:6",
      pastor: "Pastor Sarah Williams",
      thumbnail:
        "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&h=300&fit=crop",
      facebookUrl: "https://www.facebook.com/your-page/videos/VIDEO_ID_2",
    },
    {
      id: 3,
      date: "February 9, 2025",
      title: "Living a Life of Purpose",
      verse: "Ephesians 4:1",
      pastor: "Pastor Michael Brown",
      thumbnail:
        "https://images.unsplash.com/photo-1528365842597-2d2e76319fdf?w=400&h=300&fit=crop",
      facebookUrl: "https://www.facebook.com/your-page/videos/VIDEO_ID_3",
    },
    {
      id: 4,
      date: "February 2, 2025",
      title: "Love Never Fails",
      verse: "1 Corinthians 13:4",
      pastor: "Pastor Grace Johnson",
      thumbnail:
        "https://images.unsplash.com/photo-1532236122827-19cd4b2a7d5c?w=400&h=300&fit=crop",
      facebookUrl: "https://www.facebook.com/your-page/videos/VIDEO_ID_4",
    },
  ];

  // Add this at the top of your component (or in a separate file)
  const heroSlides = [
    {
      image: "/images/pastor.jpeg",
      caption: "A Community of Faith, Family, and Fellowship",
    },
    {
      image: "/images/hero-2.jpeg",
      caption: "Come As You Are, Leave Transformed",
    },
    {
      image: "/images/hero-3.jpeg",
      caption: "Experience the Presence of God Together",
    },
    {
      image: "/images/hero-4.jpeg",
      caption: "Growing in Grace, Rooted in Love",
    },
  ];

  // Add these inside your component, above the return
  const [currentSlide, setCurrentSlide] = useState(0);
  const [newsletter, setNewsletter] = useState({ name: "", email: "" });
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterDone, setNewsletterDone] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newsletter),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setNewsletterDone(true);
      toast.success("You've subscribed to our newsletter!");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setNewsletterLoading(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Section 1: Hero Banner */}
      <section className="relative h-screen text-white overflow-hidden">
        {/* Background Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: index === currentSlide ? 1 : 0 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-top scale-105"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}

        {/* Prev / Next Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full transition backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full transition backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">
              RCCG Precious Stone Parish (Area Headquarters)
            </h1>

            {/* Animated caption per slide */}
            <p
              key={currentSlide}
              className="text-xl md:text-2xl text-gray-200 mb-8 font-light animate-fade-in"
            >
              {heroSlides[currentSlide].caption}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/connect"
                className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Plan Your Visit
              </Link>
              <button
                onClick={() =>
                  document
                    .getElementById("watch-live")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Play size={20} />
                Watch Online
              </button>
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
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
              <div className="h-40 relative">
                <img
                  src="/images/hero-2.jpeg"
                  alt="Morning Worship Service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar size={18} />
                  <span className="text-sm font-semibold">
                    Every First Sunday
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Thanksgiving Service
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Join us for an uplifting worship experience and inspiring
                  message.
                </p>
                <p className="text-sm text-gray-500">8:00 AM</p>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-40 relative">
                <img
                  src="/images/hero-4.jpeg"
                  alt="Midweek Bible Study"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar size={18} />
                  <span className="text-sm font-semibold">Every Tuesday</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Digging Deep (Bible Study)
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Deepen your faith through interactive Bible study and
                  fellowship.
                </p>
                <p className="text-sm text-gray-500">5:30 PM</p>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-40 relative">
                <img
                  src="/images/service-1.jpeg"
                  alt="Midweek Bible Study"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar size={18} />
                  <span className="text-sm font-semibold">Every Thursday</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Faith Clinic
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  It's a time when we prayer and pour out our burdens unto the
                  Lord.
                </p>
                <p className="text-sm text-gray-500">5:30 PM</p>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-40 relative">
                <img
                  src="/images/service-3.jpeg"
                  alt="Youth Fellowship Night"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar size={18} />
                  <span className="text-sm font-semibold">
                    Every Third Sunday
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Youth Sunday
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Community service, games, and fellowship for all young
                  adults(YAYA).
                </p>
                <p className="text-sm text-gray-500">8:00 AM</p>
              </div>
            </div>
          </div>

          {/* <div className="text-center">
            <Link
              to="/events"
              className="inline-block px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition"
            >
              View Full Calendar
            </Link>
          </div> */}
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
                  <p className="text-gray-600">Service start: 8:00 AM</p>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold text-lg text-gray-900 mb-1">
                    Midweek Service
                  </h4>
                  <p className="text-gray-600">
                    Bible Study(digging deep): Tuesdays 5:30 PM
                  </p>
                  <p className="text-gray-600">
                    Prayer Meeting(faith clinic): Thurdays 5:30 PM
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-lg text-gray-900 mb-1">
                    Special Programs
                  </h4>
                  <p className="text-gray-600">
                    Thanksgiving Service: First Sunday
                  </p>
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
                      Ajila Road 7, Elebu, Ibadan, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5:  Sermons */}
      <WatchUsLiveSection />

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
                  src="/images/pelumi.jpeg"
                  alt="Testimony"
                  className="w-16 h-[3.7rem] rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Sis. Abioye Oluwapelumi
                  </h4>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "I thank God for His mercies over my life and family. I bless
                the His name to for how He has been using precious stones parish
                to groom me"
              </p>
            </div>

            {/* Testimony 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/awoyele.jpeg"
                  alt="Testimony"
                  className="w-16 h-[3.7rem] rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Mrs. Emmanuella Oyewole{" "}
                  </h4>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "The Women Arm of the church has been a beautiful place to be.
                Precious Stone Parish big enough to accommodate everyone and
                also small enough to recognize everyone."
              </p>
            </div>

            {/* Testimony 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/favour.jpeg"
                  alt="Testimony"
                  className="w-16 h-[3.8rem] rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Bro. Favour Thomas
                  </h4>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "This church truly embodies the gospel. The leadership is
                faithful to God’s Word, the community is warm and welcoming, and
                Christ is at the center of everything. I’m grateful to call this
                my church home."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-4">Stay Connected</h2>
            <p className="text-white/80 text-lg mb-8">
              Subscribe to our newsletter and never miss a sermon, event, or announcement.
            </p>
            {newsletterDone ? (
              <div className="bg-white/10 border border-white/30 rounded-xl p-6 text-center">
                <p className="text-white font-semibold text-lg">You're subscribed!</p>
                <p className="text-white/80 text-sm mt-1">Thank you for joining our community. God bless you!</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={newsletter.name}
                  onChange={(e) => setNewsletter((p) => ({ ...p, name: e.target.value }))}
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={newsletter.email}
                  onChange={(e) => setNewsletter((p) => ({ ...p, email: e.target.value }))}
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  disabled={newsletterLoading}
                  className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition disabled:opacity-60 disabled:cursor-not-allowed text-sm shrink-0"
                >
                  {newsletterLoading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* Facebook */}
            <div className="flex justify-center items-center flex-col">
              <div className="flex bg-white rounded-full w-16 h-16 shadow-md items-center justify-center mb-4">
                <Facebook className="text-blue-600" size={30} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Facebook
              </h3>
              <a
                href="https://www.facebook.com/share/1Ky6CrUmiB/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition text-sm">
                  Follow Us
                </button>
              </a>
            </div>

            {/* Instagram */}
            <div className="flex justify-center items-center flex-col">
              <div className="flex bg-white rounded-full w-16 h-16 shadow-md items-center justify-center mb-4">
                <Instagram className="text-pink-600" size={30} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Instagram
              </h3>
              <a
                href="https://www.instagram.com/rccgpreciousstoneparish?igsh=MWN0bnNxdGV4dGxoeA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition text-sm">
                  Follow Us
                </button>
              </a>
            </div>

            {/* YouTube */}
            <div className="flex justify-center items-center flex-col">
              <div className="flex bg-white rounded-full w-16 h-16 shadow-md items-center justify-center mb-4">
                <Youtube className="text-red-600" size={30} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                YouTube
              </h3>
              <a
                href="https://youtube.com/@rccgpreciousstoneparish?si=g9fy6uARVDVrU7W3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition text-sm">
                  Follow Us
                </button>
              </a>
            </div>

            {/* TikTok */}
            <div className="flex justify-center items-center flex-col">
              <div className="flex bg-white rounded-full w-16 h-16 shadow-md items-center justify-center mb-4">
                <BsTiktok className="text-purple" size={30} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                TikTok
              </h3>
              <a
                href="https://vm.tiktok.com/ZS9N7pkD2JCSw-7zpLX/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition text-sm">
                  Follow Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
