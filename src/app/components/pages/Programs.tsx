import { Music, Palette, Utensils, BookOpen, Users, Languages } from "lucide-react";
// import programsImage from "../../../assets/images/programs.jpg";
// import communityEventImage from "../../../assets/images/community_event.jpg";

export function Programs() {
  const programs = [
    {
      icon: Music,
      title: "Music Appreciation & Listening Circles",
      description:
        "Featuring Tagore's compositions with educational context. Experience the beauty of Rabindra Sangeet in an intimate, supportive community setting.",
      features: [
        "Guided listening sessions",
        "Context on ragas and musical forms",
        "Emotional expression through music",
        "Cultural appreciation and history",
      ],
    },
    {
      icon: Palette,
      title: "Art Workshops",
      description:
        "Inspired by Tagore's paintings and creative philosophy. Explore various artistic mediums while learning about Tagore's unique visual language.",
      features: [
        "Painting and drawing sessions",
        "Study of Tagore's artistic style",
        "Creative expression techniques",
        "Mindfulness through art",
      ],
    },
    {
      icon: Users,
      title: "Handicraft & Creative Expression",
      description:
        "Sessions promoting mindfulness, skill-building, and connection through traditional Bengali handicrafts and contemporary creative practices.",
      features: [
        "Traditional Bengali crafts",
        "Skill development workshops",
        "Mindful making practices",
        "Community collaboration projects",
      ],
    },
    {
      icon: Utensils,
      title: "Cultural Culinary Experiences",
      description:
        "Exploring Bengali traditions and communal gathering through food. Learn about traditional recipes while building community connections.",
      features: [
        "Bengali cooking demonstrations",
        "Traditional recipe sharing",
        "Communal dining experiences",
        "Cultural food history",
      ],
    },
    {
      icon: BookOpen,
      title: "Educational Seminars",
      description:
        "On Tagore's literature, philosophy, and artistic contributions. Deep dives into his poetry, novels, and philosophical works.",
      features: [
        "Literature study groups",
        "Philosophy discussions",
        "Historical context lectures",
        "Interactive Q&A sessions",
      ],
    },
    {
      icon: Languages,
      title: "Language & Poetry Exploration",
      description:
        "Introducing Bengali phrases and poetic forms. Experience the musicality and depth of Bengali language through Tagore's poetry.",
      features: [
        "Basic Bengali language lessons",
        "Poetry reading circles",
        "Translation workshops",
        "Linguistic cultural insights",
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">Our Programs</h1>
            <p className="text-xl text-gray-700">
              Non-clinical, community-centered offerings that blend cultural enrichment with
              wellness and cognitive stimulation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img src="/images/programs.jpg?" alt="Our Programs" className="w-full h-[400px] object-cover rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon className="text-amber-600" size={24} />
                    </div>
                    <h3 className="text-xl text-gray-900">{program.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{program.description}</p>
                  <div className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Intergenerational Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">
                Intergenerational Community Events
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                We host special events that bring together community members of all ages to
                celebrate cultural heritage and engage in shared learning experiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Cultural Festivals</h4>
                    <p className="text-gray-600 text-sm">
                      Celebrating Bengali traditions and Tagore's birthday (Rabindra
                      Jayanti) with music, art, and community gatherings
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Youth & Senior Partnerships</h4>
                    <p className="text-gray-600 text-sm">
                      Programs that pair younger and older community members for mutual
                      learning and cultural exchange
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Family Workshops</h4>
                    <p className="text-gray-600 text-sm">
                      Activities designed for families to explore Tagore's arts together
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="/images/community_event.jpg?" alt="Intergenerational Community Events" className="w-full h-[400px] object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center text-gray-900">
            What to Expect from Our Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-lg mb-2 text-gray-900">Cognitive Stimulation</h3>
              <p className="text-gray-600 text-sm">
                Engage your mind through learning new musical forms, languages, and creative
                practices
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-lg mb-2 text-gray-900">Emotional Wellness</h3>
              <p className="text-gray-600 text-sm">
                Experience stress relief and emotional expression through arts and music
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg mb-2 text-gray-900">Community Connection</h3>
              <p className="text-gray-600 text-sm">
                Build meaningful relationships with others who share your interest in
                cultural enrichment
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg mb-2 text-gray-900">Cultural Discovery</h3>
              <p className="text-gray-600 text-sm">
                Explore Bengali and South Asian traditions through authentic experiences
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-lg mb-2 text-gray-900">Creative Expression</h3>
              <p className="text-gray-600 text-sm">
                Develop new skills in art, music, handicrafts, and other creative forms
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg mb-2 text-gray-900">Lifelong Learning</h3>
              <p className="text-gray-600 text-sm">
                Continue your educational journey with programs designed for all ages and
                backgrounds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Join a Program?</h2>
          <p className="text-xl mb-8 opacity-90">
            Connect with us to learn about upcoming programs and how you can participate.
          </p>
          <a
            href="/get-involved"
            className="inline-block px-8 py-3 bg-white text-amber-600 rounded-md hover:bg-gray-100 transition-colors"
          >
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
}