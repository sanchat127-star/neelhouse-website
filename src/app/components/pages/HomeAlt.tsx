import { Music, Waves, Sparkles, ArrowRight, Brain } from "lucide-react";
import { Link } from "react-router";

export function HomeAlt() {
  return (
    <div>
      {/* Full-Width Hero with Overlay */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/home.jpg?"
            alt="Community gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl mb-6 text-white">
            Where Culture Meets Wellness
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Advancing mental and emotional well-being through the timeless legacy
            of Rabindranath Tagore's music, arts, and culture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors text-lg"
            >
              Explore Programs
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/get-involved"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-full hover:bg-white/20 transition-colors text-lg"
            >
              Get Involved
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Mission - Overlapping Card */}
      <section className="relative -mt-32 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
            <h2 className="text-4xl mb-6 text-gray-900">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Neelmonilata (NEEL) House is dedicated to advancing mental and emotional well-being,
              education, and cultural enrichment for the public benefit through music, arts,
              and culture inspired by the legacy of Nobel Laureate Rabindranath Tagore.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars - Side by Side Cards */}
      <section className="py-32 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Our Three Pillars</h2>
            <p className="text-xl text-gray-600">
              Interconnected elements that honor tradition while embracing innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img
                  src="/images/musical_heritage.jpg?"
                  alt="Indian classical music and dance"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Music className="text-amber-600" size={28} />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">Tagore's Musical Heritage</h3>
                <p className="text-gray-600 mb-4">
                  Over 2,000 compositions blending Indian classical music with innovative
                  melodic structures, shared through listening sessions and educational programs.
                </p>
                <Link to="/approach" className="inline-flex items-center text-amber-600 hover:text-amber-700">
                  Learn More <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img
                  src="/images/vibrational_sound.jpg?"
                  alt="Vibrational sound therapy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Waves className="text-amber-600" size={28} />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">Vibrational Sound Experiences</h3>
                <p className="text-gray-600 mb-4">
                  Evidence-based sound frequency technology designed to support relaxation,
                  stress relief, and overall wellness in community settings.
                </p>
                <Link to="/approach" className="inline-flex items-center text-amber-600 hover:text-amber-700">
                  Learn More <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img
                  src="/images/ai_enhanced.jpg?"
                  alt="AI-Enhanced Music Technology"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="text-amber-600" size={28} />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">AI-Enhanced Music Personalization</h3>
                <p className="text-gray-600 mb-4">
                  Sentiment analysis technology matches Tagore's musical works to your
                  emotional state for meaningful personalized listening experiences.
                </p>
                <Link to="/approach" className="inline-flex items-center text-amber-600 hover:text-amber-700">
                  Learn More <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cognitive Benefits - Split Layout */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/images/cognitive_enrichment.jpg?"
                alt="Learning and cognitive enrichment"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
                Cognitive Enrichment & Brain Health
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Engaging with Tagore's artistic traditions offers unique opportunities for
                cognitive stimulation through culturally rich, multisensory experiences.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Music className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-gray-900">Musical Forms & Ragas</h3>
                    <p className="text-gray-600">
                      Pattern recognition and memory formation through melodic structures
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-gray-900">Neuroplasticity</h3>
                    <p className="text-gray-600">
                      Creating new neural connections through cultural learning
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-gray-900">Creative Skills</h3>
                    <p className="text-gray-600">
                      Engaging multiple brain regions through art, music, and culture
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/approach"
                className="inline-flex items-center mt-8 px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
              >
                Discover Our Approach
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Full Width */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/community_event.jpg?"
            alt="Community gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-orange-900/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Join Our Community
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Experience the transformative power of Tagore's artistic legacy. Participate in
            our programs, attend workshops, or support our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="inline-flex items-center px-8 py-4 bg-white text-amber-900 rounded-full hover:bg-amber-50 transition-colors text-lg"
            >
              View Programs
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/get-involved"
              className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors text-lg"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}