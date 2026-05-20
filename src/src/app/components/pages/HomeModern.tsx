import { Music, Waves, Sparkles, ArrowRight, Brain, Heart, Users, BookOpen } from "lucide-react";
import { Link } from "react-router";

export function HomeModern() {
  return (
    <div className="bg-white">
      {/* Minimal Hero - Split Screen */}
      <section className="min-h-screen grid md:grid-cols-2">
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-2 bg-amber-600/10 rounded-full mb-6">
              <span className="text-amber-700 text-sm font-medium">501(c)(3) Tax-Exempt • EIN 41-4493101</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 text-gray-900 leading-tight">
              Culture<br />
              Meets<br />
              <span className="text-amber-600">Wellness</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
              Advancing mental and emotional well-being through Rabindranath Tagore's timeless artistic legacy
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/programs"
                className="group inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all hover:shadow-lg"
              >
                <span className="text-lg">Explore Programs</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all"
              >
                <span className="text-lg">Our Story</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative min-h-[500px] md:min-h-screen">
          <img
            src="/images/home.jpg"
            alt="Neelmonilata House"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2 text-amber-400">2,000+</div>
              <div className="text-gray-300">Tagore Compositions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2 text-amber-400">3</div>
              <div className="text-gray-300">Core Pillars</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2 text-amber-400">150+</div>
              <div className="text-gray-300">Years of Legacy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2 text-amber-400">∞</div>
              <div className="text-gray-300">Impact Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission - Asymmetric Layout */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm mb-6">
                Our Mission
              </div>
              <h2 className="text-4xl md:text-6xl mb-6 text-gray-900 leading-tight">
                Honoring tradition while embracing innovation
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Neelmonilata (NEEL) House is dedicated to advancing mental and emotional well-being,
                education, and cultural enrichment for the public benefit through music, arts,
                and culture inspired by Nobel Laureate Rabindranath Tagore.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 text-lg group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
            <div className="md:col-span-5">
              <div className="relative">
                <img
                  src="/images/cognitive_enrichment.jpg"
                  alt="Cultural enrichment"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-500 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-orange-500 rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars - Horizontal Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm mb-6">
              Our Approach
            </div>
            <h2 className="text-4xl md:text-6xl mb-4 text-gray-900">Three Interconnected Pillars</h2>
          </div>

          <div className="space-y-8">
            {/* Pillar 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-2 h-64 md:h-auto">
                  <img
                    src="/images/musical_heritage.jpg"
                    alt="Tagore's Musical Heritage"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Music className="text-amber-600" size={24} />
                    </div>
                    <span className="text-amber-600 font-medium">Pillar 01</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl mb-4 text-gray-900">Tagore's Musical Heritage</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Over 2,000 compositions blending Indian classical music with innovative
                    melodic structures, shared through listening sessions and educational programs.
                  </p>
                  <Link to="/approach" className="inline-flex items-center text-amber-600 hover:text-amber-700 group">
                    <span className="text-lg">Explore This Pillar</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-2 h-64 md:h-auto md:order-2">
                  <img
                    src="/images/vibrational_sound.jpg"
                    alt="Vibrational Sound Experiences"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center md:order-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Waves className="text-amber-600" size={24} />
                    </div>
                    <span className="text-amber-600 font-medium">Pillar 02</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl mb-4 text-gray-900">Vibrational Sound Experiences</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Evidence-based sound frequency technology designed to support relaxation,
                    stress relief, and overall wellness in community settings.
                  </p>
                  <Link to="/approach" className="inline-flex items-center text-amber-600 hover:text-amber-700 group">
                    <span className="text-lg">Explore This Pillar</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-2 h-64 md:h-auto">
                  <img
                    src="/images/ai_enhanced.jpg"
                    alt="AI-Enhanced Music Personalization"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Sparkles className="text-amber-600" size={24} />
                    </div>
                    <span className="text-amber-600 font-medium">Pillar 03</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl mb-4 text-gray-900">AI-Enhanced Music Personalization</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Sentiment analysis technology matches Tagore's musical works to your
                    emotional state for meaningful personalized listening experiences.
                  </p>
                  <Link to="/approach" className="inline-flex items-center text-amber-600 hover:text-amber-700 group">
                    <span className="text-lg">Explore This Pillar</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 md:py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-6">Why It Matters</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tagore's artistic traditions offer unique opportunities for cognitive stimulation
              through culturally rich, multisensory experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <Brain className="text-amber-400" size={28} />
              </div>
              <h3 className="text-2xl mb-3">Cognitive Enrichment</h3>
              <p className="text-gray-300 leading-relaxed">
                Pattern recognition and memory formation through melodic structures
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-amber-400" size={28} />
              </div>
              <h3 className="text-2xl mb-3">Emotional Well-being</h3>
              <p className="text-gray-300 leading-relaxed">
                Stress relief and emotional balance through music and arts
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-amber-400" size={28} />
              </div>
              <h3 className="text-2xl mb-3">Community Connection</h3>
              <p className="text-gray-300 leading-relaxed">
                Building meaningful relationships through shared cultural experiences
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="text-amber-400" size={28} />
              </div>
              <h3 className="text-2xl mb-3">Lifelong Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                Creating new neural connections through cultural education
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm mb-6">
                Our Programs
              </div>
              <h2 className="text-4xl md:text-6xl mb-6 text-gray-900">
                Experience Tagore's Legacy
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join us for workshops, performances, and educational programs that bring
                Tagore's artistic vision to life in contemporary settings.
              </p>
            </div>
            <div>
              <img
                src="/images/community_event.jpg"
                alt="Community Programs"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/experience-legacy"
              className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Music className="text-amber-600 mb-4" size={32} />
              <h3 className="text-2xl mb-3 text-gray-900">Rabindra Mosaic</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Experience performances of Tagore's music, poetry, and dance
              </p>
              <span className="inline-flex items-center text-amber-600 group-hover:text-amber-700">
                Explore <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
              </span>
            </Link>

            <Link
              to="/explore-learning"
              className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <BookOpen className="text-amber-600 mb-4" size={32} />
              <h3 className="text-2xl mb-3 text-gray-900">Learning Hub</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Discover Tagore's life, philosophy, and artistic contributions
              </p>
              <span className="inline-flex items-center text-amber-600 group-hover:text-amber-700">
                Learn More <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
              </span>
            </Link>

            <Link
              to="/quiz"
              className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Sparkles className="text-amber-600 mb-4" size={32} />
              <h3 className="text-2xl mb-3 text-gray-900">Interactive Quiz</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Test your knowledge of Tagore's life and artistic legacy
              </p>
              <span className="inline-flex items-center text-amber-600 group-hover:text-amber-700">
                Take Quiz <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA - Bold Banner */}
      <section className="py-24 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl mb-6 text-white leading-tight">
                Join Our Journey
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Be part of a community dedicated to advancing mental and emotional well-being
                through art, music, and culture.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/get-involved"
                className="flex-1 inline-flex items-center justify-center px-8 py-5 bg-white text-amber-600 rounded-xl hover:bg-gray-50 transition-all hover:shadow-lg text-lg group"
              >
                <span>Get Involved</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/programs"
                className="flex-1 inline-flex items-center justify-center px-8 py-5 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-amber-600 transition-all text-lg"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
