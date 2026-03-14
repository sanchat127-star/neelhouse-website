import { Music, Waves, Sparkles, Brain, Globe, Palette, BookOpen, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Approach() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">Our Approach</h1>
            <p className="text-xl text-gray-700">
              Community-based wellness programs centered on three interconnected elements
              that honor tradition while embracing innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Three Elements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Element 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <Music className="text-amber-600" size={28} />
                </div>
                <h2 className="text-3xl text-gray-900">Tagore's Musical Heritage</h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                We share Tagore's vocal compositions (Rabindra Sangeet) and instrumental
                works through listening sessions, educational programs, and community
                gatherings that promote relaxation, emotional expression, and cultural
                appreciation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    Over 2,000 compositions blending Indian classical and innovative melodic
                    structures
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    Guided listening sessions with educational context and cultural insights
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    Community gatherings celebrating the emotional depth of Rabindra Sangeet
                  </p>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764176269321-6d14f4af09c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjbGFzc2ljYWwlMjBtdXNpYyUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MzQ1MTc5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Indian classical music instruments"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Element 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1621789938983-a9543075f0bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwc2luZ2luZyUyMGJvd2xzfGVufDF8fHx8MTc3MzQ1MTc5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Peaceful meditation and relaxation"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <Waves className="text-amber-600" size={28} />
                </div>
                <h2 className="text-3xl text-gray-900">Vibrational Sound Experiences</h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                We provide access to Vibrational Acoustic Technology—sound frequency
                experiences designed to support relaxation, stress relief, and overall
                wellness in community and educational settings.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    Evidence-based sound frequency technology for deep relaxation
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    Non-clinical, complementary approach to stress management
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    Accessible experiences in community centers and educational spaces
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Element 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <Sparkles className="text-amber-600" size={28} />
                </div>
                <h2 className="text-3xl text-gray-900">AI-Enhanced Music Personalization</h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Using sentiment analysis technology, we help participants discover Tagore's
                musical works that resonate with their current emotional state and personal
                preferences, creating meaningful individualized listening experiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    Sentiment analysis matches music to your emotional state
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    Personalized recommendations from Tagore's vast musical catalog
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    Bridge between traditional art forms and modern technology
                  </p>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbXVzaWN8ZW58MXx8fHwxNzczNDUxNzk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI-Enhanced Music Technology"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cognitive Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Cognitive Enrichment & Brain Health
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Engaging with Tagore's artistic traditions offers unique opportunities for
              cognitive stimulation and brain health through culturally rich, multisensory
              experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Music className="text-amber-600 mb-4" size={32} />
              <h3 className="text-lg mb-2 text-gray-900">Musical Forms & Ragas</h3>
              <p className="text-gray-600 text-sm">
                Exposure to Tagore's distinct melodic structures and Indian classical music
                elements exercises pattern recognition, auditory processing, and memory
                formation
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Globe className="text-amber-600 mb-4" size={32} />
              <h3 className="text-lg mb-2 text-gray-900">Language Exploration</h3>
              <p className="text-gray-600 text-sm">
                Encountering Bengali lyrics and poetry stimulates linguistic centers and
                supports neuroplasticity through multilingual exposure
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <BookOpen className="text-amber-600 mb-4" size={32} />
              <h3 className="text-lg mb-2 text-gray-900">Cultural Learning</h3>
              <p className="text-gray-600 text-sm">
                Discovering unfamiliar artistic traditions creates new neural pathways and
                enhances cognitive flexibility
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Palette className="text-amber-600 mb-4" size={32} />
              <h3 className="text-lg mb-2 text-gray-900">Creative Skills</h3>
              <p className="text-gray-600 text-sm">
                Participating in art, music, handicraft, and culinary activities engages
                multiple brain regions simultaneously
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Lightbulb className="text-amber-600 mb-4" size={32} />
              <h3 className="text-lg mb-2 text-gray-900">Cross-Cultural Understanding</h3>
              <p className="text-gray-600 text-sm">
                Building knowledge of South Asian philosophy, aesthetics, and traditions
                expands cognitive frameworks and promotes mental agility
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Brain className="text-amber-600 mb-4" size={32} />
              <h3 className="text-lg mb-2 text-gray-900">Neuroplasticity</h3>
              <p className="text-gray-600 text-sm">
                Learning new things creates new neural connections and supports brain
                function across the lifespan
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
              <h3 className="text-lg mb-2 text-gray-900">Research-Backed Benefits</h3>
              <p className="text-gray-600 text-sm">
                Research demonstrates that learning new things—particularly culturally rich,
                multisensory experiences combining music, visual arts, and physical
                creativity—supports brain function across the lifespan, enhances mental
                flexibility, and may contribute to cognitive resilience as we age.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}