import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, Users, Heart, Music, Zap, Smile, BookOpen, HelpingHand, Link as LinkIcon } from "lucide-react";

export default function Ministries() {
  const ministries = [
    {
      id: 1,
      title: "Children's Ministry (RCCG Kids)",
      icon: "👶",
      description: "Safe, nurturing environment for kids",
      color: "from-blue-100 to-cyan-100",
      content: {
        ageGroups: ["Infants & Toddlers (0-2 years)", "Preschool (3-5 years)", "Early Elementary (6-8 years)", "Late Elementary (9-12 years)"],
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
        meetingTimes: "Saturdays, 5:00 PM - 7:00 PM",
        ageGroup: "Ages 13-25",
        events: [
          "Monthly youth fellowship and games",
          "Quarterly youth conventions and camps",
          "Annual youth conference (nationally)",
          "Career guidance and mentorship programs",
          "Mission trips and outreach projects",
        ],
        leadershipTeam: [
          "Pastor David Okafor (Youth Pastor)",
          "Comfort Ejiro (Assistant Youth Pastor)",
          "Multiple youth coordinators and mentors",
        ],
        socialMedia: ["Instagram: @rccg_preciousstone_youth", "Facebook: RCCG Precious Stone Youth"],
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
          "Monthly breakfast meetings with teachings",
          "Quarterly men's retreat and bonding",
          "Annual men's conference (March)",
          "Community service projects",
          "Sports and recreational activities",
        ],
        accountabilityGroups: [
          "Weekly accountability groups (different locations)",
          "Mentorship pairings for spiritual growth",
          "Discussion forums on faith and family",
        ],
        resources: [
          "Devotional materials for men",
          "Books and study guides on biblical manhood",
          "Financial wisdom resources",
          "Leadership development materials",
        ],
      },
    },
    {
      id: 4,
      title: "Women's Fellowship",
      icon: "👩‍🤝‍👩",
      description: "Supporting and strengthening women",
      color: "from-pink-100 to-rose-100",
      content: {
        programs: [
          "Monthly women's meeting (First Friday, 7:00 PM)",
          "Weekly Bible study groups",
          "Prayer circles (various times)",
          "Professional development workshops",
          "Marriage and relationship coaching",
        ],
        bibleStudyGroups: [
          "Morning groups (Tuesday & Thursday)",
          "Evening groups (Monday & Wednesday)",
          "Online groups (for remote members)",
        ],
        annualRetreat: "July 15-17, 2025 - Theme: 'Women of Purpose'",
        prayerCircles: [
          "Intercessory prayer (every Wednesday, 6:00 AM)",
          "Spontaneous prayer groups by location",
          "24/7 prayer chain for urgent requests",
        ],
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
        auditionDetails: [
          "Auditions held monthly (Third Saturday, 2:00 PM)",
          "No previous experience necessary",
          "All vocal ranges welcome",
          "Commitment: 2 rehearsals weekly + services",
        ],
        rehearsalSchedule: [
          "Tuesday: 6:30 PM - 8:00 PM (Main choir)",
          "Thursday: 7:00 PM - 8:30 PM (Youth choir)",
          "Saturday: 10:00 AM - 12:00 PM (Full rehearsal)",
        ],
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
      description: "24/7 intercessory prayer support",
      color: "from-indigo-100 to-blue-100",
      content: {
        prayerChain:
          "24/7 prayer warrior network. Submit prayer requests that get distributed to our dedicated prayer team for immediate intercession.",
        prayerRequestForm: "Available online and at church. Requests can be anonymous or public based on preference.",
        prayerMeetingSchedule: [
          "Fridays: 6:30 PM - 8:00 PM (Corporate prayer meeting)",
          "Wednesdays: 5:30 AM - 6:30 AM (Early morning prayer)",
          "Every morning: 6:00 AM (WhatsApp prayer broadcast)",
        ],
        testimonies: [
          "Monthly 'Prayers Answered' testimonial service",
          "Video testimonies shared during services",
          "Written testimonies in church bulletin",
        ],
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
          "Free health clinics (quarterly)",
          "Educational scholarship programs",
          "Food distribution to the needy",
          "Widows and orphans support",
          "Skills training for youth",
        ],
        missionTrips: [
          "Quarterly local outreach missions",
          "Annual international mission trips (2-3 countries)",
          "Medical and humanitarian missions",
          "Disaster relief operations",
        ],
        streetEvangelism: [
          "Weekend street evangelism teams",
          "Evangelism training workshops",
          "Follow-up discipleship programs",
        ],
        partnerships: [
          "Collaborate with other churches",
          "NGO partnerships for social impact",
          "Government health and education initiatives",
        ],
      },
    },
    {
      id: 8,
      title: "Marriage & Family",
      icon: "💍",
      description: "Building strong families",
      color: "from-fuchsia-100 to-purple-100",
      content: {
        marriageCounseling:
          "Professional biblical counseling for married couples facing challenges. Confidential, caring, and Christ-centered approach.",
        premaritalClasses: [
          "4-week premarital preparation classes",
          "Monthly classes: Every Saturday, 2:00 PM - 4:00 PM",
          "Topics: Communication, finances, intimacy, faith",
          "Registration: First visit to pastors' office",
        ],
        familyRetreats: [
          "Annual family camp (August)",
          "Weekend family bonding activities",
          "Parent-teen relationship workshops",
        ],
        parentingWorkshops: [
          "Monthly parenting seminars (topics rotate)",
          "Child discipline and development guidance",
          "Managing teenage years",
          "Blended family resources",
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
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=1200&h=600&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">Our Ministries</h1>
          <p className="text-xl text-gray-200">Find your place of service and spiritual growth</p>
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
                <p className="font-semibold text-gray-900 text-sm">{ministry.title.split("(")[0].trim()}</p>
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
              <div key={ministry.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Header */}
                <div className={`bg-gradient-to-r ${ministry.color} p-8`}>
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">{ministry.icon}</div>
                    <div>
                      <h2 className="text-3xl font-semibold text-gray-900 mb-2">{ministry.title}</h2>
                      <p className="text-gray-700 text-lg">{ministry.description}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Ministry 1: Children's Ministry */}
                  {ministry.id === 1 && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Age Groups</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {ministry.content.ageGroups.map((group, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                              <div className="w-2 h-2 bg-blue-500 rounded-full" />
                              <span className="text-gray-700">{group}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Curriculum</h3>
                        <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                          {ministry.content.curriculum}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Policies</h3>
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
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Volunteer Opportunities</h3>
                        <p className="text-gray-700 mb-4">{ministry.content.volunteerInfo}</p>
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
                          <h3 className="font-semibold text-gray-900 mb-2">Meeting Times</h3>
                          <p className="text-gray-700">{ministry.content.meetingTimes}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-gray-900 mb-2">Age Group</h3>
                          <p className="text-gray-700">{ministry.content.ageGroup}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Youth Events</h3>
                        <ul className="space-y-2">
                          {ministry.content.events.map((event, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Zap className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-gray-700">{event}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership Team</h3>
                        <ul className="space-y-2 bg-gray-50 p-4 rounded-lg">
                          {ministry.content.leadershipTeam.map((leader, i) => (
                            <li key={i} className="text-gray-700">
                              {leader}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                        <div className="space-y-2">
                          {ministry.content.socialMedia.map((link, i) => (
                            <div key={i} className="flex items-center gap-2 text-primary font-semibold">
                              <LinkIcon size={18} />
                              {link}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Ministry 3: Men's Fellowship */}
                  {ministry.id === 3 && (
                    <div className="space-y-8">
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Regular Meeting</h3>
                        <p className="text-gray-700">{ministry.content.meetingSchedule}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Men's Events</h3>
                        <ul className="space-y-2">
                          {ministry.content.events.map((event, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Heart className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-gray-700">{event}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Accountability Groups</h3>
                        <ul className="space-y-2 bg-gray-50 p-4 rounded-lg">
                          {ministry.content.accountabilityGroups.map((group, i) => (
                            <li key={i} className="text-gray-700">
                              • {group}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Resources</h3>
                        <ul className="space-y-2">
                          {ministry.content.resources.map((resource, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <BookOpen className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-gray-700">{resource}</span>
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
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Women's Programs</h3>
                        <ul className="space-y-2">
                          {ministry.content.programs.map((program, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Heart className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-gray-700">{program}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Bible Study Groups</h3>
                        <ul className="space-y-2 bg-gray-50 p-4 rounded-lg">
                          {ministry.content.bibleStudyGroups.map((group, i) => (
                            <li key={i} className="text-gray-700">
                              • {group}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-pink-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Annual Retreat</h3>
                        <p className="text-gray-700">{ministry.content.annualRetreat}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Prayer Circles</h3>
                        <ul className="space-y-2">
                          {ministry.content.prayerCircles.map((circle, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Zap className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-gray-700">{circle}</span>
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
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Choir Information</h3>
                        <p className="text-gray-700">{ministry.content.choirInfo}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Audition Details</h3>
                        <ul className="space-y-2 bg-gray-50 p-4 rounded-lg">
                          {ministry.content.auditionDetails.map((detail, i) => (
                            <li key={i} className="text-gray-700">
                              • {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Rehearsal Schedule</h3>
                        <ul className="space-y-2">
                          {ministry.content.rehearsalSchedule.map((schedule, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Clock className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-gray-700">{schedule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">We Need</h3>
                        <ul className="space-y-2">
                          {ministry.content.equipmentNeeds.map((need, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Music className="text-primary flex-shrink-0 mt-0.5" size={18} />
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
                        <h3 className="font-semibold text-gray-900 mb-2">24/7 Prayer Chain</h3>
                        <p className="text-gray-700 mb-4">{ministry.content.prayerChain}</p>
                        <button className="px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-sm">
                          Submit Prayer Request
                        </button>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Prayer Request Form</h3>
                        <p className="text-gray-700">{ministry.content.prayerRequestForm}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Prayer Meeting Schedule</h3>
                        <ul className="space-y-2">
                          {ministry.content.prayerMeetingSchedule.map((meeting, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Clock className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-gray-700">{meeting}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Testimonies of Answered Prayers</h3>
                        <ul className="space-y-2">
                          {ministry.content.testimonies.map((testimony, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Smile className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-gray-700">{testimony}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Ministry 7: Outreach & Evangelism */}
                  {ministry.id === 7 && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Programs</h3>
                        <ul className="space-y-2">
                          {ministry.content.communityPrograms.map((program, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <HelpingHand className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-gray-700">{program}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Mission Trips</h3>
                        <ul className="space-y-2 bg-gray-50 p-4 rounded-lg">
                          {ministry.content.missionTrips.map((trip, i) => (
                            <li key={i} className="text-gray-700">
                              • {trip}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Street Evangelism</h3>
                        <ul className="space-y-2">
                          {ministry.content.streetEvangelism.map((activity, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Zap className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Partnership Opportunities</h3>
                        <ul className="space-y-2">
                          {ministry.content.partnerships.map((partner, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Users className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-gray-700">{partner}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
                        Join an Outreach Team
                      </button>
                    </div>
                  )}

                  {/* Ministry 8: Marriage & Family */}
                  {ministry.id === 8 && (
                    <div className="space-y-8">
                      <div className="bg-fuchsia-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Marriage Counseling</h3>
                        <p className="text-gray-700">{ministry.content.marriageCounseling}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Premarital Classes</h3>
                        <ul className="space-y-2 bg-gray-50 p-4 rounded-lg">
                          {ministry.content.premaritalClasses.map((class_, i) => (
                            <li key={i} className="text-gray-700">
                              • {class_}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Retreats</h3>
                        <ul className="space-y-2">
                          {ministry.content.familyRetreats.map((retreat, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Heart className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-gray-700">{retreat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Parenting Workshops</h3>
                        <ul className="space-y-2">
                          {ministry.content.parentingWorkshops.map((workshop, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Users className="text-primary flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-gray-700">{workshop}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
                        Book Marriage Counseling
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
          <h2 className="text-3xl font-serif font-bold mb-6">Get Involved Today</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Whether you want to volunteer, join a group, or receive support, there's a ministry waiting for you.
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
