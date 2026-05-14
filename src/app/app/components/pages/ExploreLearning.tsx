import { MapPin, ExternalLink, Award, Music, Users, BookOpen } from "lucide-react";

interface School {
  name: string;
  state: string;
  stateCode: string;
  focus: string;
  website: string;
  highlights: string[];
  color: string;
}

const schools: School[] = [
  {
    name: "Parampara School of Music (Parampara USA)",
    state: "Connecticut",
    stateCode: "CT",
    focus: "A highly specialized academy led by Kasturi SenBhunia. It is one of the few in the US providing a Diploma track in Rabindra Sangeet through affiliation with the Sarbabharatiya Sangeet-O-Sanskriti Parishad.",
    website: "https://paramparausa.com",
    highlights: [
      "Diploma Track in Rabindra Sangeet",
      "Affiliated with Sarbabharatiya Sangeet-O-Sanskriti Parishad",
      "Led by Kasturi SenBhunia"
    ],
    color: "from-blue-500 to-indigo-600"
  },
  {
    name: "Tagore Center Foundation",
    state: "Texas",
    stateCode: "TX",
    focus: "Located in Houston, this is a premier global center dedicated to the preservation of Tagore's musical and literary works. It functions as a hub for advanced workshops, residential programs, and regular classes specifically for Rabindra Sangeet.",
    website: "https://tagorecenterfoundation.org",
    highlights: [
      "Premier Global Center for Tagore's Works",
      "Advanced Workshops & Residential Programs",
      "Regular Rabindra Sangeet Classes"
    ],
    color: "from-orange-500 to-red-600"
  },
  {
    name: "Excellence Academy of Indian Music",
    state: "California",
    stateCode: "CA",
    focus: "Offers a dedicated Rabindra Sangeet department led by Smt. Shruti Sen. The curriculum is notable for its lineage, following the teachings of legendary exponents like Subinoy Roy, emphasizing the technical purity of the Swarabitan (notations).",
    website: "https://excellenceacademyofmusic.com",
    highlights: [
      "Led by Smt. Shruti Sen",
      "Follows teachings of Subinoy Roy",
      "Emphasizes Swarabitan technical purity"
    ],
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "Sangeet Bitan Music School of Atlanta",
    state: "Georgia",
    stateCode: "GA",
    focus: "A specialized institution for Bengali music led by Rikhia Saha. It offers systematic training in Rabindra Sangeet with an emphasis on performance and stylistic nuance, catering to both children and adults.",
    website: "https://sangeetbitanatlanta.com",
    highlights: [
      "Led by Rikhia Saha",
      "Specialized in Bengali Music",
      "Systematic Training Program",
      "Focus on Performance & Stylistic Nuance"
    ],
    color: "from-green-500 to-teal-600"
  }
];

export function ExploreLearning() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
            <Music className="text-amber-600" size={20} />
            <span className="text-amber-800 font-medium">Authentic Rabindra Sangeet Training</span>
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
            Rabindra Learning Hub
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover premier institutions across the United States dedicated to preserving and teaching 
            the authentic tradition of Rabindra Sangeet
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Award className="text-blue-600" size={24} />
              </div>
              <div className="text-3xl mb-2 text-gray-900">4</div>
              <div className="text-gray-600">Premier Academies</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                <MapPin className="text-orange-600" size={24} />
              </div>
              <div className="text-3xl mb-2 text-gray-900">4</div>
              <div className="text-gray-600">States Covered</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <Users className="text-purple-600" size={24} />
              </div>
              <div className="text-3xl mb-2 text-gray-900">100+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <BookOpen className="text-green-600" size={24} />
              </div>
              <div className="text-3xl mb-2 text-gray-900">Legacy</div>
              <div className="text-gray-600">Authentic Training</div>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {schools.map((school, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${school.color} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl mb-2">{school.name}</h3>
                      <div className="flex items-center gap-2">
                        <MapPin size={18} />
                        <span className="text-lg">{school.state} ({school.stateCode})</span>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {school.stateCode}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {school.focus}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-lg mb-3 text-gray-900 flex items-center gap-2">
                      <Award className="text-amber-600" size={20} />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {school.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">•</span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Website Link */}
                  <a
                    href={school.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Visit Website
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl mb-6 text-center text-gray-900">
              Nationwide Presence
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              From the East Coast to the West Coast, these institutions are keeping the flame of 
              Rabindra Sangeet alive, offering authentic training in the tradition of Tagore's musical heritage.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {schools.map((school, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${school.color} rounded-full mb-3 text-white text-2xl shadow-lg`}>
                    {school.stateCode}
                  </div>
                  <div className="text-sm text-gray-600">{school.state}</div>
                  <div className="text-xs text-gray-500 mt-1">{school.name.split(' ')[0]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <Music className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl mb-4">
              Begin Your Musical Journey
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Connect with these institutions to experience the authentic tradition of Rabindra Sangeet 
              and immerse yourself in Tagore's timeless musical legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/programs"
                className="px-8 py-4 bg-white text-amber-600 rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                Explore Our Programs
              </a>
              <a
                href="/get-involved"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-lg hover:bg-white/30 transition-colors text-lg"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl mb-4 text-gray-900">
            About Rabindra Sangeet Training
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Rabindra Sangeet, the songs of Rabindranath Tagore, represents a unique musical tradition 
            that blends classical ragas with folk melodies and profound poetry. Authentic training 
            emphasizes not just technical mastery but also the emotional and spiritual depth that makes 
            each composition a transformative experience. These institutions carry forward this sacred tradition, 
            ensuring that future generations can experience the healing power of Tagore's music.
          </p>
        </div>
      </section>
    </div>
  );
}