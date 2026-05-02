import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronRight, BookOpen } from "lucide-react";

export default function About() {
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
          <h1 className="text-5xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200">
            Our Journey, Faith, and Vision for Kingdom Impact
          </p>
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
                  className="bg-white rounded-lg p-6  border-primary"
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
              Our Leadership In Precious Stone Parish Area HQ
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                {
                  name: "Pastor Ogunbajo",
                  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
                },
                {
                  name: "Pastor Mrs. Ogunbajo",
                  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
                },
                {
                  name: "A/P Adewale Ogunofejo",
                  img: "/images/adewale.jpeg",
                },
                {
                  name: "A/P Olapeju Akinpelu",
                  img: "/images/akinpelu.jpeg",
                },
                {
                  name: "Deaconess Foluke Aribisala",
                  img: "/images/aribisala.jpeg",
                },
              ].map((pastor) => (
                <div
                  key={pastor.name}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-full aspect-square overflow-hidden rounded-xl mb-3 shadow-md">
                    <img
                      src={pastor.img}
                      alt={pastor.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <p className="text-gray-900 font-semibold text-sm">
                    {pastor.name}
                  </p>
                </div>
              ))}
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
            <div className="bg-white rounded-lg p-8 mb-8 shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                Our Vision
              </h3>
              <div className="space-y-4">
                {[
                  "To make heaven",
                  "To take as many as possible with us",
                  "To have a member of RCCG in every family of all nations",
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

            {/* Mission Objectives */}
            <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Mission Objectives
              </h3>
              <div className="space-y-4">
                {[
                  "To accomplish Number 1 above, HOLINESS will be LIFESTYLE",
                  "We want to plant churches on every street, in every city, town and community in all Nations of the World",
                  "We will pursue these objectives until every Nation in the world is reached for JESUS CHRIST OUR LORD",
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
