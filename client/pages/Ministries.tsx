import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Clock,
  Users,
  Heart,
  Music,
  Zap,
  Smile,
  BookOpen,
  HelpingHand,
  Link as LinkIcon,
} from "lucide-react";

export default function Ministries() {
  const ministries = [
    {
      id: 1,
      title: "Children's Ministry (RCCG Kids)",
      icon: "👶",
      description: "Safe, nurturing environment for kids",
      color: "from-blue-100 to-cyan-100",
      content: {
        ageGroups: [
          "Infants & Toddlers (0-2 years)",
          "Preschool (3-5 years)",
          "Early Elementary (6-8 years)",
          "Late Elementary (9-12 years)",
        ],
        curriculum:
          "Scripture memory, Bible stories, character development, crafts, games, and practical life lessons tailored to each age group.",
        safetyPolicies: [
          "Background-checked volunteers and staff",
          "Check-in/check-out system for all children",
          "Strict child protection protocols",
          "Clean, well-maintained facilities",
          "Age-appropriate supervision ratios",
        ],
        volunteerInfo:
          "Looking for passionate individuals to teach, assist, or coordinate children's programs. Training provided.",
      },
    },
    {
      id: 2,
      title: "Youth Church (RCCG Youth)",
      icon: "🎯",
      description: "Empowering the next generation",
      color: "from-purple-100 to-pink-100",
      content: {
        ageGroup: "Ages 18–49",
        events: [
          "Youth Fellowship (Local & Zonal)",
          "Zonal Youth Vigil — Quarterly",
          "National Youth Program — 1st week of October",
          "Zonal Youth Conference — 3rd week of October",
        ],
      },
    },
    {
      id: 3,
      title: "Men's Fellowship",
      icon: "💪",
      description: "Building stronger men of faith",
      color: "from-green-100 to-teal-100",
      content: {
        meetingSchedule: "Monthly - First Saturday, 8:00 AM",
        events: [
          "Periodic men's retreat and bonding",
          "Community service projects",
        ],
      },
    },
    {
      id: 4,
      title: "Women's Fellowship",
      icon: "👩",
      description: "Supporting and strengthening women",
      color: "from-pink-100 to-rose-100",
      content: {
        programs: ["Monthly women's meeting", "Prayer circles (various times)"],
      },
    },
    {
      id: 5,
      title: "Music & Worship Ministry",
      icon: "🎵",
      description: "Excellence in worship leading",
      color: "from-yellow-100 to-orange-100",
      content: {
        choirInfo:
          "Our multi-generational choir leads worship with excellence. Members from different backgrounds united in worship.",
        rehearsalSchedule: ["Every Saturday"],
        equipmentNeeds: [
          "Musicians needed (guitars, drums, keyboard, bass)",
          "Sound engineers and technical crew",
          "Worship directors and arrangers",
        ],
      },
    },
    {
      id: 6,
      title: "Prayer Ministry",
      icon: "🙏",
      description: "Daily intercessory prayer support",
      color: "from-indigo-100 to-blue-100",
      content: {
        prayerChain:
          "Daily prayer warrior network. Submit prayer requests that get distributed to our dedicated prayer team for immediate intercession.",
        prayerRequestForm:
          "Available online and at church. Requests can be anonymous or public based on preference.",
      },
    },
    {
      id: 7,
      title: "Outreach & Evangelism",
      icon: "🌍",
      description: "Reaching communities with love",
      color: "from-red-100 to-orange-100",
      content: {
        communityPrograms: [
          "Periodic health clinics",
          "Educational programs",
          "Christain Social resposibility/Food distribution to the parishioners or needy",
        ],
      },
    },
  ];

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
          <h1 className="text-5xl font-serif font-bold mb-4">Our Ministries</h1>
          <p className="text-xl text-gray-200">
            Find your place of service and spiritual growth
          </p>
        </div>
      </section>

      {/* Ministry Grid Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {ministries.map((ministry) => (
              <div
                key={ministry.id}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="text-3xl mb-2">{ministry.icon}</div>
                <p className="font-semibold text-gray-900 text-sm">
                  {ministry.title.split("(")[0].trim()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Ministry Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20 max-w-5xl mx-auto">
            {ministries.map((ministry, idx) => (
              <div
                key={ministry.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${ministry.color} p-8`}>
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">{ministry.icon}</div>
                    <div>
                      <h2 className="text-xl md:text-3xl font-semibold text-gray-900 mb-2">
                        {ministry.title}
                      </h2>
                      <p className="text-gray-700 text-lg">
                        {ministry.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Ministry 1: Children's Ministry */}
                  {ministry.id === 1 && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Age Groups
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {ministry.content.ageGroups.map((group, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                            >
                              <div className="w-2 h-2 bg-blue-500 rounded-full" />
                              <span className="text-gray-700">{group}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Curriculum
                        </h3>
                        <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                          {ministry.content.curriculum}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Safety Policies
                        </h3>
                        <ul className="space-y-2">
                          {ministry.content.safetyPolicies.map((policy, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="text-primary font-bold">✓</span>
                              <span className="text-gray-700">{policy}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Volunteer Opportunities
                        </h3>
                        <p className="text-gray-700 mb-4">
                          {ministry.content.volunteerInfo}
                        </p>
                        <button className="px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                          Become a Volunteer
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Ministry 2: Youth Church */}
                  {ministry.id === 2 && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-gray-900 mb-2">
                            Age Group
                          </h3>
                          <p className="text-gray-700">
                            {ministry.content.ageGroup}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Youth Events
                        </h3>
                        <ul className="space-y-2">
                          {ministry.content.events.map((event, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Zap
                                className="text-primary flex-shrink-0 mt-0.5"
                                size={18}
                              />
                              <span className="text-gray-700">{event}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Ministry 3: Men's Fellowship */}
                  {ministry.id === 3 && (
                    <div className="space-y-8">
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Regular Meeting
                        </h3>
                        <p className="text-gray-700">
                          {ministry.content.meetingSchedule}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Men's Events
                        </h3>
                        <ul className="space-y-2">
                          {ministry.content.events.map((event, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Heart
                                className="text-primary flex-shrink-0 mt-0.5"
                                size={18}
                              />
                              <span className="text-gray-700">{event}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Ministry 4: Women's Fellowship */}
                  {ministry.id === 4 && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Women's Programs
                        </h3>
                        <ul className="space-y-2">
                          {ministry.content.programs.map((program, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Heart
                                className="text-primary flex-shrink-0 mt-0.5"
                                size={18}
                              />
                              <span className="text-gray-700">{program}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Ministry 5: Music & Worship */}
                  {ministry.id === 5 && (
                    <div className="space-y-8">
                      <div className="bg-yellow-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Choir Information
                        </h3>
                        <p className="text-gray-700">
                          {ministry.content.choirInfo}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Rehearsal Schedule
                        </h3>
                        <ul className="space-y-2">
                          {ministry.content.rehearsalSchedule.map(
                            (schedule, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <Clock
                                  className="text-primary flex-shrink-0 mt-0.5"
                                  size={18}
                                />
                                <span className="text-gray-700">
                                  {schedule}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          We Need
                        </h3>
                        <ul className="space-y-2">
                          {ministry.content.equipmentNeeds.map((need, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Music
                                className="text-primary flex-shrink-0 mt-0.5"
                                size={18}
                              />
                              <span className="text-gray-700">{need}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
                        Join Our Choir
                      </button>
                    </div>
                  )}

                  {/* Ministry 6: Prayer Ministry */}
                  {ministry.id === 6 && (
                    <div className="space-y-8">
                      <div className="bg-indigo-50 p-6 rounded-lg">
                        <p className="text-gray-700 mb-4">
                          {ministry.content.prayerChain}
                        </p>
                        <button className="px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                          Submit Prayer Request
                        </button>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Prayer Request Form
                        </h3>
                        <p className="text-gray-700">
                          {ministry.content.prayerRequestForm}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Ministry 7: Outreach & Evangelism */}
                  {ministry.id === 7 && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Community Programs
                        </h3>
                        <ul className="space-y-2">
                          {ministry.content.communityPrograms.map(
                            (program, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <HelpingHand
                                  className="text-primary flex-shrink-0 mt-0.5"
                                  size={18}
                                />
                                <span className="text-gray-700">{program}</span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>

                      <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
                        Join an Outreach Team
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Get Involved Today
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Whether you want to volunteer, join a group, or receive support,
            there's a ministry waiting for you.
          </p>
          <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
            Contact a Ministry Leader
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
