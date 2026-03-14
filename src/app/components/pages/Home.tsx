import { Link } from "react-router";
import { Music, Palette, Heart, Brain, Users, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1764176269321-6d14f4af09c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjbGFzc2ljYWwlMjBtdXNpYyUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MzQ1MTc5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Indian classical music and culture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Where Heritage Meets Wellness
            </h1>
            <p className="text-xl text-white mb-8">
              Transforming communities through the artistic legacy of Nobel Laureate
              Rabindranath Tagore — bridging music, arts, and cognitive vitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/programs"
                className="px-8 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors text-center"
              >
                Explore Programs
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 bg-white text-amber-600 border-2 border-amber-600 rounded-md hover:bg-amber-50 transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Neelmonilata (NEEL) House is dedicated to advancing mental and emotional well-being,
            education, and cultural enrichment for the public benefit through music, arts,
            and culture inspired by the legacy of Nobel Laureate Rabindranath Tagore.
          </p>
        </div>
      </section>

      {/* Core Elements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Three Interconnected Elements
            </h2>
            <p className="text-xl text-gray-600">
              Our unique approach to community wellness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Music className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl mb-4 text-gray-900">Tagore's Musical Heritage</h3>
              <p className="text-gray-600">
                Sharing Tagore's vocal compositions (Rabindra Sangeet) and instrumental
                works through listening sessions, educational programs, and community
                gatherings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl mb-4 text-gray-900">Vibrational Sound Experiences</h3>
              <p className="text-gray-600">
                Providing access to Vibrational Acoustic Technology—sound frequency
                experiences designed to support relaxation, stress relief, and overall
                wellness.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl mb-4 text-gray-900">
                AI-Enhanced Music Personalization
              </h3>
              <p className="text-gray-600">
                Using sentiment analysis technology to help participants discover Tagore's
                musical works that resonate with their emotional state and personal
                preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                Cognitive Enrichment & Brain Health
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Engaging with Tagore's artistic traditions offers unique opportunities for
                cognitive stimulation and brain health through culturally rich, multisensory
                experiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Brain className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-gray-900 mb-1">Learning New Musical Forms</h4>
                    <p className="text-gray-600 text-sm">
                      Exposure to Tagore's distinct melodic structures and Indian classical
                      music elements exercises pattern recognition and memory.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-gray-900 mb-1">Cross-Cultural Understanding</h4>
                    <p className="text-gray-600 text-sm">
                      Building knowledge of South Asian philosophy and traditions expands
                      cognitive frameworks and promotes mental agility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Palette className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-gray-900 mb-1">Creative Skill Development</h4>
                    <p className="text-gray-600 text-sm">
                      Participating in art, music, handicraft, and culinary activities
                      engages multiple brain regions simultaneously.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764176269321-6d14f4af09c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjbGFzc2ljYWwlMjBtdXNpYyUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MzQ1MTc5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Traditional Indian classical music learning session"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Who We Serve</h2>
            <p className="text-xl text-gray-700">
              We welcome community members of all backgrounds and ages
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Adults seeking lifelong learning opportunities and cognitive stimulation",
              "Seniors interested in brain-healthy activities and social engagement",
              "Individuals exploring new cultural traditions and artistic forms",
              "Communities seeking diverse, enriching wellness practices",
              "Anyone interested in the intersection of heritage arts and contemporary technology",
              "People seeking stress relief and meaningful connection through the arts",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how Tagore's artistic legacy can enrich your life and support your
            well-being journey.
          </p>
          <Link
            to="/get-involved"
            className="inline-block px-8 py-3 bg-white text-amber-600 rounded-md hover:bg-gray-100 transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
}