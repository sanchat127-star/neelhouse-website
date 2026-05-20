import { Mail, Coffee, Music, BookOpen, Palette, Heart, Sparkles, MapPin } from "lucide-react";

export function GetInvolved() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
              <Coffee className="text-amber-600" size={20} />
              <span className="text-amber-800 font-medium">Corporate Wellness Programs</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">Get Involved</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We are excited to collaborate with your Employee Resource Group (ERG) to bring a unique
              cultural wellness experience to your workplace through our signature event —
              <span className="font-semibold text-amber-700"> "Tagore and Tea."</span>
            </p>
          </div>
        </div>
      </section>

      {/* Tagore and Tea Program */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">Tagore and Tea</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                This engaging and interactive session blends culture, mindfulness, music, art, and
                community-building into a memorable employee experience.
              </p>
            </div>

            {/* Program Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Coffee className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-3 text-gray-900">Tea Exploration</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Explore and taste different varieties of tea while learning about their cultural
                      significance and wellness benefits
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Music className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-3 text-gray-900">Rabindra Sangeet</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Enjoy the timeless beauty of Rabindra Sangeet (vocal & instrumental) inspired by
                      the works of Rabindranath Tagore
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-3 text-gray-900">Literary Experience</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Listen to a short story or a reading from one of Rabindranath Tagore's letters,
                      offering insight into his literary brilliance and humanistic philosophy
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-3 text-gray-900">Movement & Dance</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Participate in light, joyful movement and expressive dance activities suitable
                      for all comfort levels
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Palette className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-3 text-gray-900">Cultural Showcase</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Experience a curated short video presentation showcasing traditional fabrics,
                      sweets, sculptures, art, and crafts that celebrate rich cultural heritage
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Heart className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-3 text-gray-900">Guided Meditation</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Unwind with a guided meditation session designed to promote relaxation,
                      reflection, and connection
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Benefits */}
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-10 mb-16 border-2 border-amber-200">
              <h3 className="text-2xl mb-6 text-gray-900 text-center">Why Choose Tagore and Tea?</h3>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                "Tagore and Tea" creates a warm and inclusive atmosphere that encourages cultural
                appreciation, employee engagement, creativity, and mindful well-being. The program
                is ideal for ERGs focused on:
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-white rounded-full text-amber-700 font-medium shadow-sm">
                  Diversity & Inclusion
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-amber-700 font-medium shadow-sm">
                  Wellness
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-amber-700 font-medium shadow-sm">
                  Arts & Culture
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-amber-700 font-medium shadow-sm">
                  Community Connection
                </span>
              </div>
            </div>

            {/* Call to Collaborate */}
            <div className="text-center bg-white rounded-xl p-8 shadow-md border-2 border-amber-200 mb-8">
              <h3 className="text-2xl mb-4 text-gray-900">Let's Partner Together</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We would love the opportunity to partner with your organization and co-create an
                enriching experience for your employees. Together, we can foster meaningful conversations,
                cultural exchange, and moments of calm in today's fast-paced workplace.
              </p>
              <p className="text-lg text-gray-800 font-medium mb-6">
                We look forward to bringing this fun-filled, educational, and soulful experience to
                your community!
              </p>
              <a
                href="mailto:info@neelhouse.org"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl text-lg"
              >
                <Mail size={24} />
                Contact Us: info@neelhouse.org
              </a>
              <p className="text-sm text-gray-600 mt-4">
                Please don't hesitate to reach out with any questions!
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-md border-2 border-amber-200">
              <h3 className="text-2xl mb-6 text-gray-900 text-center">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <a
                      href="mailto:info@neelhouse.org"
                      className="text-amber-600 hover:text-amber-700 underline"
                    >
                      info@neelhouse.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Physical Address</h4>
                    <p className="text-gray-700 leading-relaxed">
                      NEELMONILATA NEEL HOUSE<br />
                      80 N. McQueen Rd, Apt 2019<br />
                      Gilbert, Arizona - 85233
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Additional Resources */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl mb-6 text-gray-900">Explore More Ways to Connect</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/programs"
                className="px-8 py-4 bg-white text-amber-600 border-2 border-amber-500 rounded-lg hover:bg-amber-50 transition-colors text-lg shadow-md"
              >
                View All Programs
              </a>
              <a
                href="/donate"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg text-lg"
              >
                Support Our Mission
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}