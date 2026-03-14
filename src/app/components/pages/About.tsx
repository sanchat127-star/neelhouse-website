import { ImageWithFallback } from "../figma/ImageWithFallback";

export function About() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">About Neelmonilata (NEEL) House</h1>
            <p className="text-xl text-gray-700">
              Building vibrant communities where Tagore's artistic legacy serves as a bridge
              between cultural heritage and contemporary wellness practices.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl mb-6 text-gray-900">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Neelmonilata (NEEL) House is dedicated to advancing mental and emotional well-being,
              education, and cultural enrichment for the public benefit through music,
              arts, and culture inspired by the legacy of Nobel Laureate Rabindranath
              Tagore.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We provide music-based and arts-based programs, including vocal and
              instrumental music, vibrational acoustic practices, and technology-supported
              personalized music experiences, as complementary, non-clinical approaches to
              emotional wellness.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through education, cultural preservation, and community-based programming in
              art, painting, handicrafts, and food, we seek to promote resilience,
              creativity, and inclusive community engagement.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-amber-50 rounded-lg p-12 mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl mb-6 text-gray-900">Our Vision</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To build vibrant communities where Tagore's artistic legacy serves as a
                bridge between cultural heritage and contemporary wellness practices, making
                transformative arts experiences accessible to diverse populations across the
                United States while supporting cognitive vitality and lifelong learning.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-3xl mb-12 text-center text-gray-900">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="text-lg mb-2 text-gray-900">Cultural Heritage</h3>
                <p className="text-gray-600 text-sm">
                  Preserving and sharing Tagore's rich artistic traditions
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-lg mb-2 text-gray-900">Wellness</h3>
                <p className="text-gray-600 text-sm">
                  Supporting holistic well-being through arts and music
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg mb-2 text-gray-900">Inclusivity</h3>
                <p className="text-gray-600 text-sm">
                  Welcoming all backgrounds and creating accessible experiences
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-lg mb-2 text-gray-900">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  Blending tradition with modern technology for enhanced experiences
                </p>
              </div>
            </div>
          </div>

          {/* Non-Profit Status */}
          <div className="mt-20 bg-white border-2 border-amber-200 rounded-lg p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl">🏛️</span>
                </div>
                <div>
                  <h2 className="text-3xl mb-4 text-gray-900">Non-Profit Organization</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Neelmonilata (NEEL) House is a registered non-profit organization dedicated to serving
                    the public benefit through arts, culture, and wellness programs. We have applied for
                    501(c)(3) tax-exempt status with the Internal Revenue Service (IRS).
                  </p>
                </div>
              </div>
              
              <div className="bg-amber-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl mb-3 text-gray-900">Tax-Exempt Status Pending</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Our application for federal tax-exempt status under Section 501(c)(3) of the Internal
                  Revenue Code is currently pending with the IRS. Once approved, NEEL House will be
                  recognized as a charitable organization, and contributions may be tax-deductible to
                  the extent permitted by law.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Please consult with your tax advisor regarding the deductibility of any donations
                  made before our 501(c)(3) status is finalized.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg mb-2 text-gray-900">Our Commitment to Transparency</h3>
                  <p className="text-gray-700 leading-relaxed">
                    As a non-profit organization, we are committed to operating with complete
                    transparency and accountability. All funds received are used exclusively to
                    support our mission of advancing mental and emotional well-being, education,
                    and cultural enrichment through the arts.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-2 text-gray-900">How Your Support Makes a Difference</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every contribution helps us expand access to transformative arts experiences,
                    develop innovative wellness programs, preserve cultural heritage, and build
                    vibrant, inclusive communities. Your support enables us to provide these
                    life-enriching programs to diverse populations across the United States.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}