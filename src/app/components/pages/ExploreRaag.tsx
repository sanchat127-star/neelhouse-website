import { Music, Sparkles, BookOpen, Heart, Video } from "lucide-react";

interface RaagVideo {
  videoId: string;
  title: string;
  description: string;
}

const raagVideos: RaagVideo[] = [
  {
    videoId: "gHcTf1YUIrQ",
    title: "RAAG Exploration 1",
    description: "Discover the intricate melodic patterns and emotional expressions unique to this raag. Experience how traditional Indian classical music theory enhances Rabindra Sangeet."
  },
  {
    videoId: "C8XTp7L31jo",
    title: "RAAG Exploration 2",
    description: "Learn how this raag creates specific moods and atmospheres in Tagore's compositions. Understanding the raag framework deepens appreciation of the songs."
  },
  {
    videoId: "54T12bk6Cvw",
    title: "RAAG Exploration 3",
    description: "Explore the relationship between raag structure and emotional storytelling. See how Tagore masterfully incorporated classical raag principles into his music."
  },
  {
    videoId: "0W0tLIQfcSU",
    title: "RAAG Exploration 4",
    description: "Witness the transformative power of raag-based composition. This exploration shows how melodic frameworks provide endless creative possibilities."
  },
  {
    videoId: "wUoAyC2m0DM",
    title: "RAAG Exploration 5",
    description: "Experience how each raag carries its own character and time of day association. Learn the deeper connections between raag theory and emotional expression."
  }
];

export function ExploreRaag() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
            <Music className="text-amber-600" size={20} />
            <span className="text-amber-800 font-medium">Musical Education</span>
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
            Explore Raag
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Journey into the heart of Indian classical music and discover how raag creates the soul of Rabindra Sangeet
          </p>
        </div>
      </section>

      {/* What is a Raag Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/70">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <Sparkles className="text-white" size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl text-gray-900">What is a Raag?</h2>
            </div>
            
            <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
              <p>
                A <strong>raag</strong> (also spelled <em>raga</em>) is the foundational melodic framework of Indian classical music. 
                It is much more than a simple scale—it is a complete system of musical expression that defines how notes 
                are approached, emphasized, and woven together to create specific moods and emotions.
              </p>
              
              <p>
                Each raag has its own unique personality, characterized by:
              </p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 text-2xl leading-none">•</span>
                  <span><strong>Specific notes (swaras)</strong> that define its melodic structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 text-2xl leading-none">•</span>
                  <span><strong>Ascending (aroha) and descending (avaroha) patterns</strong> that create movement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 text-2xl leading-none">•</span>
                  <span><strong>Emotional essence (rasa)</strong> that evokes feelings like joy, longing, peace, or devotion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 text-2xl leading-none">•</span>
                  <span><strong>Time of day or season</strong> when it is traditionally performed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 text-2xl leading-none">•</span>
                  <span><strong>Characteristic phrases (pakad)</strong> that immediately identify the raag</span>
                </li>
              </ul>

              <div className="bg-white rounded-xl p-6 mt-8 border-l-4 border-amber-500">
                <h3 className="text-2xl mb-4 text-gray-900 flex items-center gap-2">
                  <Heart className="text-amber-600" size={24} />
                  Raag in Rabindra Sangeet
                </h3>
                <p>
                  Rabindranath Tagore masterfully incorporated raag principles into his songs, creating a unique synthesis 
                  of classical structure and folk accessibility. Each Rabindra Sangeet is built upon a raag foundation that 
                  guides its emotional journey. Understanding the raag helps listeners connect more deeply with the song's 
                  intended mood and meaning—whether it's the morning freshness of Raag Bhairav, the romantic evening essence 
                  of Raag Yaman, or the monsoon longing of Raag Malhaar.
                </p>
                <p className="mt-4">
                  By learning about different raags, you gain insight into why certain songs feel uplifting while others 
                  evoke contemplation or melancholy. The raag is the invisible architecture that transforms simple melodies 
                  into profound emotional experiences, making Rabindra Sangeet a powerful tool for mental and emotional well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Raag Video Explorations
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Watch these detailed explorations to understand how each raag creates the foundation for beautiful songs
            </p>
          </div>

          <div className="grid gap-8">
            {raagVideos.map((video, index) => (
              <div
                key={video.videoId}
                className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <Video className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-2">
                        Raag Study #{index + 1}
                      </div>
                      <h3 className="text-2xl md:text-3xl mb-2 text-gray-900">{video.title}</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>

                  {/* Video Player */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4">
                    <div className="aspect-video w-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Why Learn About Raag?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Music className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Deeper Appreciation</h3>
              <p className="text-gray-700 leading-relaxed">
                Understanding raag unlocks deeper layers of meaning in Rabindra Sangeet, revealing the intentional 
                craft behind each composition's emotional power.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Heart className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Emotional Connection</h3>
              <p className="text-gray-700 leading-relaxed">
                Each raag is designed to evoke specific emotions. Learning about them helps you select songs 
                that resonate with your current mood or desired emotional state.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <BookOpen className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Cultural Heritage</h3>
              <p className="text-gray-700 leading-relaxed">
                Raag represents centuries of musical wisdom. Learning this system connects you to a rich 
                cultural tradition that has shaped South Asian music and spirituality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
            Continue Your Musical Journey
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Explore more ways to experience and learn about Tagore's transformative legacy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/experience-legacy"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg text-lg"
            >
              Experience Tagore's Music
            </a>
            <a
              href="/explore-learning"
              className="px-8 py-4 bg-white text-amber-600 border-2 border-amber-500 rounded-lg hover:bg-amber-50 transition-colors text-lg shadow-md"
            >
              Find Learning Centers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
