import { Heart, DollarSign, Wallet, Building2, TrendingUp } from "lucide-react";
import { useEffect } from "react";

export function Donate() {
  // Load DAF Direct widget script
  useEffect(() => {
    // Set the global settings variable
    (window as any)._dafdirect_settings = "414493101_2111_772cda82-8272-4c98-8024-249dfb69d155";

    // Create and inject the DAF Direct script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.dafdirect.org/ddirect/dafdirect4.js';

    // Add script to the document body
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      delete (window as any)._dafdirect_settings;
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">Support Our Mission</h1>
            <p className="text-xl text-gray-700">
              Your generosity helps us expand programs and reach more communities through
              Rabindranath Tagore's artistic legacy, advancing mental and emotional well-being for all.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
              <DollarSign className="text-amber-600" size={20} />
              <span className="text-amber-800 font-medium">Ways to Give</span>
            </div>
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Donation Options</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your tax-deductible contributions help us expand our programs and reach more communities.
              We are a 501(c)(3) tax-exempt organization. EIN: 41-4493101
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Traditional Donation */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-2 border-amber-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={28} />
                </div>
                <h3 className="text-2xl text-gray-900">Make a Donation</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Support our mission with a direct tax-deductible donation to help us expand our
                programs and reach more communities through Tagore's artistic legacy.
              </p>
              <a
                href="https://link.clover.com/urlshortener/TxmXZR"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg text-center"
              >
                Donate Now
              </a>
            </div>

            {/* DAF Donation */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-2 border-blue-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <Wallet className="text-white" size={28} />
                </div>
                <h3 className="text-2xl text-gray-900">Donor-Advised Funds</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We now accept grants from Donor-Advised Funds. If you or your advisor manages one,
                you can support us directly through our DAF Direct link below.
              </p>

              {/* DAF Direct Widget Container */}
              <div className="w-full min-h-[80px] flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                <div className="daf-widget-container w-full flex flex-col justify-center items-center">
                  {/* DAF Direct widget button will appear inline here */}
                  <div id="dafdirect-widget" className="mb-4"></div>

                  {/* Fallback link */}
                  <div className="text-center">
                    <a
                      href="https://www.dafdirect.org/DAFDirect/daflink?_dafdirect_settings=414493101_2111_772cda82-8272-4c98-8024-249dfb69d155"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
                    >
                      <Wallet size={20} />
                      Give from Your DAF
                    </a>
                    <p className="text-xs text-gray-500 mt-2">
                      Securely recommend a grant through DAF Direct
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Having trouble? Contact us at{' '}
                  <a href="mailto:info@neelhouse.org" className="text-blue-600 hover:text-blue-700 underline">
                    info@neelhouse.org
                  </a>
                </p>
              </div>
            </div>

            {/* Employer Matching */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-2 border-green-200 lg:col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <Building2 className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl text-gray-900">Employer Matching</h3>
                  <div className="flex items-center gap-1 text-green-600 mt-1">
                    <TrendingUp size={16} />
                    <span className="text-sm font-medium">Double or Triple Your Impact!</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Many employers match charitable donations made by their employees, instantly doubling
                or even tripling your contribution at no extra cost to you!
              </p>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-green-600">✓</span> How It Works:
                </h4>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="font-semibold text-green-600 flex-shrink-0">1.</span>
                    <span>Make your donation to NEELMONILATA NEEL HOUSE</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-green-600 flex-shrink-0">2.</span>
                    <span>Check if your employer participates in matching programs</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-green-600 flex-shrink-0">3.</span>
                    <span>Submit your match request through your company's portal</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-green-600 flex-shrink-0">4.</span>
                    <span>Your employer matches your gift automatically!</span>
                  </li>
                </ol>
              </div>
              <div className="space-y-3">
                <a
                  href="https://benevity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg text-center"
                >
                  Find Us on Benevity
                </a>
                <p className="text-xs text-gray-600 text-center">
                  Search for "NEELMONILATA NEEL HOUSE" on your employer's giving platform
                </p>
              </div>
            </div>
          </div>

          {/* Employer Matching Highlight Banner */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <TrendingUp className="text-white" size={40} />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                    Did You Know? Your Employer May Match Your Donation!
                  </h3>
                  <p className="text-green-50 text-lg">
                    Thousands of companies match charitable donations. Check if yours does and{' '}
                    <span className="font-semibold text-white">double or triple your impact</span> today.
                    We're registered on Benevity and most major corporate giving platforms.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="https://benevity.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-white text-green-700 rounded-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl font-semibold"
                  >
                    Check Eligibility
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 max-w-3xl mx-auto text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 shadow-md">
            <h3 className="text-xl mb-4 text-gray-900">Tax-Exempt Status</h3>
            <p className="text-gray-700 leading-relaxed">
              Neelmonilata (NEEL) House is a 501(c)(3) tax-exempt nonprofit organization.
              All donations are tax-deductible to the fullest extent allowed by law.
              <br />
              <strong className="text-amber-700">EIN: 41-4493101</strong>
            </p>
          </div>

          {/* Employer Matching FAQ */}
          <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-md border-2 border-green-100">
            <h3 className="text-2xl mb-6 text-gray-900 text-center">
              Common Questions About Employer Matching
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-green-600">Q:</span>
                  Which companies typically offer matching programs?
                </h4>
                <p className="text-gray-700 ml-6">
                  Many Fortune 500 companies including Google, Microsoft, Apple, Bank of America,
                  Boeing, Chevron, IBM, Intel, and thousands of others offer matching gift programs.
                  Check with your HR department or search for NEELMONILATA NEEL HOUSE on your company's giving
                  portal (often powered by Benevity, YourCause, or similar platforms).
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-green-600">Q:</span>
                  How do I know if my employer participates?
                </h4>
                <p className="text-gray-700 ml-6">
                  Contact your company's HR department, check your employee benefits portal, or
                  visit{' '}
                  <a
                    href="https://benevity.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 underline"
                  >
                    Benevity.com
                  </a>{' '}
                  to search for your employer's matching program.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-green-600">Q:</span>
                  What's the typical match ratio?
                </h4>
                <p className="text-gray-700 ml-6">
                  Most companies match donations 1:1 (dollar-for-dollar), though some offer 2:1 or
                  even 3:1 matches. This means your $100 donation could become $200, $300, or more!
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-green-600">Q:</span>
                  How long does the matching process take?
                </h4>
                <p className="text-gray-700 ml-6">
                  Processing times vary by company, but typically take 4-8 weeks. You'll receive
                  confirmation when your employer processes the match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl mb-4 text-gray-900">Your Support Makes a Difference</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Every contribution helps us expand access to transformative arts experiences and
              cognitive wellness programs through Tagore's timeless legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/programs"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg text-lg"
              >
                Explore Our Programs
              </a>
              <a
                href="/get-involved"
                className="px-8 py-4 bg-white text-amber-600 border-2 border-amber-500 rounded-lg hover:bg-amber-50 transition-colors text-lg shadow-md"
              >
                Other Ways to Help
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
