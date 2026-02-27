import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Users, Target, BookOpen } from "lucide-react";

export default function About() {
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
          <h1 className="text-5xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200">
            Our Journey, Faith, and Vision for Kingdom Impact
          </p>
        </div>
      </section>

      {/* Section 1: Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Our Story
            </h2>

            {/* Timeline */}
            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  <div className="w-1 h-24 bg-gradient-to-b from-primary to-gray-200" />
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    1998 - The Founding
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    RCCG Precious Stone Area HQ was founded with a vision to
                    create a place where the love of Christ is preached boldly
                    and lived authentically. Starting with just a small group of
                    committed believers in a humble gathering space, the church
                    was built on the foundation of prayer, faith, and the Word
                    of God.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  <div className="w-1 h-24 bg-gradient-to-b from-primary to-gray-200" />
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    2003 - Building Our Sanctuary
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    By 2003, the congregation had grown to over 500 members. We
                    constructed our current sanctuary, a beautiful facility that
                    accommodates 1,500+ worshippers. This milestone marked our
                    commitment to providing a dedicated space for worship and
                    fellowship.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  <div className="w-1 h-24 bg-gradient-to-b from-primary to-gray-200" />
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    2010 - Expansion & Ministry Growth
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We launched comprehensive ministry departments including
                    Children's Ministry, Youth Church, Men's and Women's
                    Fellowships, and Prayer Ministry. This expansion reflected
                    our commitment to serving all ages and demographics in our
                    congregation.
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  <div className="w-1 h-12 bg-gray-200" />
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    2024 - Present & Future
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Today, RCCG Precious Stone Area HQ stands as a beacon of
                    hope with over 3,000 active members. We continue to evolve,
                    embracing technology and modern ministry approaches while
                    maintaining our core values of faith, family, fellowship,
                    and service.
                  </p>
                </div>
              </div>
            </div>

            {/* Growth Milestones */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "1998", label: "Founded" },
                { number: "3,000+", label: "Active Members" },
                { number: "1,500", label: "Sanctuary Capacity" },
                { number: "8", label: "Active Ministries" },
              ].map((milestone, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-lg p-6 text-center"
                >
                  <p className="text-3xl font-bold text-primary mb-2">
                    {milestone.number}
                  </p>
                  <p className="text-gray-600">{milestone.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Beliefs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Our Beliefs
            </h2>

            {/* Statement of Faith */}
            <div className="bg-white rounded-lg p-8 mb-12 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="text-primary" size={28} />
                Statement of Faith
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We believe in the Holy Bible as the Word of God and the complete
                and only authority for Christian faith and practice. We affirm
                the teachings of the Redeemed Christian Church of God (RCCG)
                which emphasize the essentials of Christian faith: the Trinity,
                redemption through Christ, salvation by grace through faith, and
                the power of the Holy Spirit in the believer's life.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our church is committed to holiness, righteousness, and
                dedication to God's purposes. We believe that every believer is
                called to live a life that glorifies God, impacts their
                community, and prepares souls for eternity.
              </p>
            </div>

            {/* Core Beliefs */}
            <div className="space-y-4 mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Core Beliefs with Scripture References
              </h3>

              {[
                {
                  title: "Salvation Through Jesus Christ",
                  scripture: "John 3:16; Romans 10:9",
                  description:
                    "We believe that Jesus Christ is the Son of God, died for our sins, and rose again. Salvation is available to all who believe in Him.",
                },
                {
                  title: "The Power of the Holy Spirit",
                  scripture: "Acts 2:38; Romans 8:9",
                  description:
                    "We believe in the baptism of the Holy Spirit as an empowering experience for believers to serve God effectively and live victoriously.",
                },
                {
                  title: "The Authority of God's Word",
                  scripture: "2 Timothy 3:16-17; Psalm 119:105",
                  description:
                    "The Bible is God's inspired Word and the ultimate authority for faith, doctrine, and Christian living.",
                },
                {
                  title: "Sanctification & Holiness",
                  scripture: "1 Thessalonians 4:3-7; 1 Peter 1:15-16",
                  description:
                    "We believe believers are called to live holy lives separate from worldly practices, growing in Christ-likeness daily.",
                },
                {
                  title: "The Church as Christ's Body",
                  scripture: "1 Corinthians 12:12-27; Ephesians 1:22-23",
                  description:
                    "The Church is the collective body of believers united in Christ, each member contributing their spiritual gifts.",
                },
              ].map((belief, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 border-l-4 border-primary"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {belief.title}
                  </h4>
                  <p className="text-sm text-primary font-semibold mb-2">
                    {belief.scripture}
                  </p>
                  <p className="text-gray-700">{belief.description}</p>
                </div>
              ))}
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                What to Expect When You Visit
              </h3>
              <ul className="space-y-4">
                {[
                  "A warm welcome from our hospitality team",
                  "Joyful and spirited worship with contemporary and traditional music",
                  "A Bible-based, practical message that speaks to daily life",
                  "Opportunities to connect with our community",
                  "A safe environment for families and children",
                  "Service times accommodating different schedules",
                  "Fellowship opportunities and prayer support",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ChevronRight
                      className="text-primary flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Our Leadership
            </h2>

            {/* Senior Pastor */}
            <div className="mb-16 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                <div className="md:col-span-1">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                    alt="Senior Pastor"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                    Pastor John Adeleke
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-4">
                    Senior Pastor
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Pastor John Adeleke has been serving as Senior Pastor since
                    2005, leading RCCG Precious Stone Area HQ through a period
                    of significant growth and spiritual maturity. With over 25
                    years of pastoral experience, he is known for his powerful
                    preaching, compassionate leadership, and unwavering
                    commitment to biblical truth.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    He holds a Bachelor's degree in Theology and has completed
                    advanced pastoral training through the RCCG Headquarters.
                    Pastor John is married to Pastor (Mrs.) Adama Adeleke and
                    together they have three adult children actively involved in
                    ministry.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Vision:</strong> "To establish a church where
                      Christ is magnified, believers are empowered, and
                      communities are transformed."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pastor's Wife */}
            <div className="mb-16 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                <div className="md:col-span-1">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
                    alt="Pastor's Wife"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                    Pastor (Mrs.) Adama Adeleke
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-4">
                    Co-Pastor & Women's Ministry Leader
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Pastor Adama is an anointed teacher of God's Word with a
                    special passion for women's spiritual development and
                    empowerment. She leads the Women's Fellowship with grace and
                    wisdom, mentoring hundreds of women in their faith journey.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A certified counselor and life coach, Pastor Adama provides
                    spiritual direction and practical guidance to women facing
                    life's challenges. She is actively involved in marriage
                    counseling and family strengthening initiatives within the
                    church.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Passion:</strong> "Empowering women to become
                      powerful vessels of God's grace and agents of
                      transformation."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Associate Pastors */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Associate Pastors & Ministry Leaders
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Pastor David Okafor",
                    role: "Associate Pastor - Youth & Young Adults Ministry",
                  },
                  {
                    name: "Pastor Grace Johnson",
                    role: "Associate Pastor - Children's Ministry",
                  },
                  {
                    name: "Pastor Michael Umeh",
                    role: "Music & Worship Ministry Leader",
                  },
                  {
                    name: "Pastor Chioma Nwankwo",
                    role: "Prayer Ministry Leader",
                  },
                ].map((pastor, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {pastor.name}
                    </h4>
                    <p className="text-primary text-sm font-semibold">
                      {pastor.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Church Council */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Church Council & Leadership Board
              </h3>
              <p className="mb-6 leading-relaxed">
                RCCG Precious Stone Area HQ is governed by a dedicated council
                of mature believers committed to vision execution, spiritual
                accountability, and wise stewardship of resources. The council
                meets monthly to provide oversight, guidance, and strategic
                direction for the church.
              </p>
              <p className="text-sm opacity-90">
                Members include the Senior Pastor, Associate Pastors, ministry
                heads, and elected church council members who collectively guide
                our church toward fulfilling God's purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Vision & Mission
            </h2>

            {/* Vision Statement */}
            <div className="bg-white rounded-lg p-8 mb-8 shadow-md border-l-4 border-primary">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="text-primary" size={28} />
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 italic font-semibold mb-4">
                "To be a beacon of Christ's light, impacting our community and
                the world with the message of redemption, hope, and
                transformation through the power of the Holy Spirit."
              </p>
              <p className="text-gray-700 leading-relaxed">
                We envision RCCG Precious Stone as a thriving church where
                believers experience deep spiritual growth, genuine community,
                and empowering ministry. A place where the lost find salvation,
                the broken find healing, and all believers are equipped to
                fulfill God's purpose in their generation.
              </p>
            </div>

            {/* Mission Objectives */}
            <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Mission Objectives
              </h3>
              <div className="space-y-4">
                {[
                  "To preach the Gospel of Jesus Christ with clarity, boldness, and compassion",
                  "To disciple believers toward spiritual maturity and Christ-likeness",
                  "To provide a loving, welcoming community where all feel valued and accepted",
                  "To equip believers with spiritual gifts and training for effective ministry",
                  "To demonstrate God's love through community outreach and social responsibility",
                  "To maintain doctrinal integrity while embracing contextual relevance",
                ].map((objective, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5-Year Goals */}
            <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                5-Year Strategic Goals (2024-2029)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    goal: "Grow Active Membership",
                    detail:
                      "Increase to 5,000+ engaged members through effective evangelism",
                  },
                  {
                    goal: "Ministry Expansion",
                    detail:
                      "Launch 4 new ministry departments addressing community needs",
                  },
                  {
                    goal: "Facilities Development",
                    detail:
                      "Establish modern learning centers and fellowship spaces",
                  },
                  {
                    goal: "Community Impact",
                    detail:
                      "Establish scholarship programs and social welfare initiatives",
                  },
                  {
                    goal: "Global Missions",
                    detail: "Support mission work in 5 African nations",
                  },
                  {
                    goal: "Digital Transformation",
                    detail:
                      "Enhance online ministry and accessibility for remote members",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {item.goal}
                    </h4>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Initiatives */}
            <div className="bg-gradient-to-r from-secondary to-primary text-white rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Strategic Initiatives
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">
                    • Discipleship & Cell Groups
                  </h4>
                  <p className="text-sm opacity-90">
                    Establishing small groups throughout all communities for
                    intimate discipleship
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    • Youth Empowerment Program
                  </h4>
                  <p className="text-sm opacity-90">
                    Skills training and mentorship for young adults entering the
                    workforce
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    • Outreach & Evangelism Campaign
                  </h4>
                  <p className="text-sm opacity-90">
                    Annual crusades and community engagement events for soul
                    winning
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    • Leadership Development Institute
                  </h4>
                  <p className="text-sm opacity-90">
                    Formal training programs for pastors and ministry leaders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Church Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Church Facilities
            </h2>

            {/* Facility Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  image:
                    "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=600&h=400&fit=crop",
                  title: "Main Sanctuary",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1516321318423-f06f70504195?w=600&h=400&fit=crop",
                  title: "Fellowship Hall",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1517457373614-b7152f80ce57?w=600&h=400&fit=crop",
                  title: "Children's Ministry Wing",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1528365842597-2d2e76319fdf?w=600&h=400&fit=crop",
                  title: "Prayer Chapel",
                },
              ].map((facility, idx) => (
                <div
                  key={idx}
                  className="rounded-lg overflow-hidden shadow-md group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="bg-white p-4">
                    <h3 className="font-semibold text-gray-900">
                      {facility.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Facility Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Facilities Info */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Our Facilities Include
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      icon: "🏛️",
                      title: "Main Sanctuary",
                      detail:
                        "1,500+ seating capacity, modern sound & lighting",
                    },
                    {
                      icon: "👶",
                      title: "Children's Ministry Wing",
                      detail: "Safe, age-appropriate learning spaces",
                    },
                    {
                      icon: "🎓",
                      title: "Educational Center",
                      detail: "Classrooms for Bible study and training",
                    },
                    {
                      icon: "🤝",
                      title: "Fellowship Hall",
                      detail: "Multi-purpose space for gatherings",
                    },
                    {
                      icon: "🙏",
                      title: "Prayer Chapel",
                      detail: "Quiet space for personal prayer & intercession",
                    },
                    {
                      icon: "🅿️",
                      title: "Ample Parking",
                      detail: "500+ parking spaces with accessible areas",
                    },
                  ].map((facility, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 bg-gray-50 p-4 rounded-lg"
                    >
                      <span className="text-3xl">{facility.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {facility.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {facility.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>

              {/* Room Booking & Capacity */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Room Booking Information
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our facilities are available for church events, ministries,
                    and approved community activities.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900">
                        To Book a Facility:
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Contact our administrative office 2 weeks in advance
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Office Hours:
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Monday - Friday: 9:00 AM - 5:00 PM
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email:</p>
                      <p className="text-sm text-gray-600 mt-1">
                        facilities@rccgpreciousstone.org
                      </p>
                    </div>
                  </div>
                  <button className="w-full mt-6 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
                    Request Room Booking
                  </button>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Capacity Details
                  </h3>
                  <div className="space-y-3">
                    {[
                      { room: "Main Sanctuary", capacity: "1,500" },
                      { room: "Fellowship Hall", capacity: "400" },
                      { room: "Conference Room", capacity: "80" },
                      { room: "Children's Wing", capacity: "200" },
                      { room: "Prayer Chapel", capacity: "30" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center pb-3 border-b last:border-b-0"
                      >
                        <span className="text-gray-700">{item.room}</span>
                        <span className="font-semibold text-primary">
                          {item.capacity} people
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Virtual Tour */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-12 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Experience Our Church
              </h3>
              <p className="mb-6 text-lg max-w-2xl mx-auto">
                Take a virtual tour of our facilities to get a feel for our
                welcoming community before your first visit.
              </p>
              <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-opacity-90 transition">
                Start Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We'd love to welcome you to RCCG Precious Stone Area HQ. Come as you
            are and experience the love, acceptance, and authentic faith we
            share.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/connect"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
            >
              Plan Your Visit
            </Link>
            <Link
              to="/"
              className="px-8 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
