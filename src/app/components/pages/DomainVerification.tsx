import { CheckCircle, Globe, Shield } from "lucide-react";

export function DomainVerification() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
              <Shield className="text-green-600" size={20} />
              <span className="text-green-800 font-medium">Domain Verification</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">Domain Verification</h1>
            <p className="text-xl text-gray-700">
              Official domain verification page for NEELMONILATA NEEL HOUSE
            </p>
          </div>
        </div>
      </section>

      {/* Verification Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 shadow-lg border-2 border-green-200 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-2xl text-gray-900">Official Domain Verification Statement</h2>
              </div>
            </div>
            <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
              <p>
                The official website <strong className="text-green-700">https://www.neelhouse.org</strong> is{' '}
                <strong>OWNED AND OPERATED</strong> by our organization{' '}
                <strong className="text-amber-700">NEELMONILATA NEEL HOUSE</strong>.
              </p>
              <p>
                This public page is provided for domain verification purposes and is maintained on
                our official website.
              </p>
            </div>
          </div>

          {/* Organization Details */}
          <div className="bg-white rounded-xl p-8 shadow-md border-2 border-amber-200 mb-12">
            <h3 className="text-2xl mb-6 text-gray-900">Organization Information</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <Globe className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Legal Name:</p>
                  <p>NEELMONILATA NEEL HOUSE</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Website:</p>
                  <a
                    href="https://www.neelhouse.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 underline"
                  >
                    https://www.neelhouse.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Organization Type:</p>
                  <p>501(c)(3) Tax-Exempt Nonprofit Organization</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">EIN:</p>
                  <p>41-4493101</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Physical Address:</p>
                  <p>
                    80 N. McQueen Rd, Apt 2019<br />
                    Gilbert, Arizona 85233
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Contact Email:</p>
                  <a
                    href="mailto:info@neelhouse.org"
                    className="text-amber-600 hover:text-amber-700 underline"
                  >
                    info@neelhouse.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl mb-4 text-gray-900">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Neelmonilata (NEEL) House is dedicated to advancing mental and emotional well-being,
              education, and cultural enrichment for the public benefit through music, arts, and
              culture inspired by the legacy of Nobel Laureate Rabindranath Tagore.
            </p>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center text-sm text-gray-600">
            <p>
              This verification page is publicly accessible and maintained for domain verification purposes.
            </p>
            <p className="mt-2">
              Last Updated: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl mb-4 text-gray-900">Learn More About Our Organization</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg text-lg"
            >
              About Us
            </a>
            <a
              href="/programs"
              className="px-8 py-4 bg-white text-amber-600 border-2 border-amber-500 rounded-lg hover:bg-amber-50 transition-colors text-lg shadow-md"
            >
              Our Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
