import { Music, Play, BookOpen, Heart, Headphones, Video } from "lucide-react";
import { useRef, useEffect, useState } from "react";

interface MediaItem {
  title: string;
  artist: string;
  description: string;
  type: "audio" | "youtube";
  filename?: string;
  youtubeId?: string;
  category: string;
}

const mediaItems: MediaItem[] = [
  {
    title: "Neelmonilata",
    artist: "Recited by Sarbari Gupta",
    description: "Experience the profound beauty of Tagore's poem 'Neelmonilata', which inspired our organization's name. This recitation captures the essence of emotional depth and spiritual awakening through Tagore's evocative words.",
    type: "audio",
    filename: "neelmonilata-poem.m4a",
    category: "Poetry Recitation"
  },
  {
    title: "Rabindra Sangeet Plain Vocal",
    artist: "Performed by Kamalika Chakrabarty",
    description: "A beautiful plain vocal rendition of Rabindra Sangeet that showcases the pure, unaccompanied essence of Tagore's musical compositions. This performance highlights the therapeutic and healing qualities inherent in the melodic and lyrical beauty of Tagore's songs.",
    type: "audio",
    filename: "rabindra-sangeet-kamalika.m4a",
    category: "Rabindra Sangeet"
  },
  {
    title: "Rabindra Sangeet Performance",
    artist: "Performed by Kasturi SenBhunia",
    description: "A beautiful performance of Rabindra Sangeet that showcases the pure essence of Tagore's musical compositions. This rendition highlights the therapeutic and healing qualities inherent in the melodic and lyrical beauty of Tagore's songs.",
    type: "youtube",
    youtubeId: "RwFNfbfuiNM",
    category: "Rabindra Sangeet"
  },
  {
    title: "Rabindra Sangeet Performance",
    artist: "Performed by Kasturi SenBhunia",
    description: "Another enchanting rendition of Rabindra Sangeet by Kasturi SenBhunia, demonstrating the timeless appeal and emotional depth of Tagore's musical legacy.",
    type: "youtube",
    youtubeId: "VTc1Au6P5Mk",
    category: "Rabindra Sangeet"
  },
  {
    title: "Rabindra Sangeet and Conversation Duet",
    artist: "Performed by Shreya Guhathakurta & Saswati Guhathakurta",
    description: "A beautiful duet rendition of Rabindra Sangeet by Shreya and Saswati Guhathakurta. This harmonious performance showcases the collaborative spirit and emotional depth of Tagore's compositions.",
    type: "youtube",
    youtubeId: "DLfi5hqLRPI",
    category: "Rabindra Sangeet"
  },
  {
    title: "Rabindra Sangeet and Conversation Duet",
    artist: "Performed by Shreya Guhathakurta & Saswati Guhathakurta",
    description: "Another enchanting duet performance by Shreya and Saswati Guhathakurta, demonstrating the timeless beauty and healing qualities of Tagore's musical heritage through their harmonious voices.",
    type: "youtube",
    youtubeId: "oEflHmi3muo",
    category: "Rabindra Sangeet"
  },
  {
    title: "Rabindra Sangeet Performance",
    artist: "Performed by Papon",
    description: "A soulful rendition of Rabindra Sangeet by acclaimed artist Papon. This performance brings a contemporary voice to Tagore's timeless compositions while preserving their emotional depth and spiritual essence.",
    type: "youtube",
    youtubeId: "wHzZPNrzXDY",
    category: "Rabindra Sangeet"
  },
  {
    title: "Rabindra Sangeet Instrumental",
    artist: "Instrumental Performance",
    description: "A beautiful instrumental interpretation of Rabindra Sangeet that showcases the melodic essence of Tagore's compositions without words. This performance demonstrates how the pure musical form alone can convey deep emotion and healing.",
    type: "youtube",
    youtubeId: "TzCPEFwK9WU",
    category: "Instrumental"
  },
  {
    title: "Devotional Rabindra Sangeet",
    artist: "Performed by Poushali Bannerjee",
    description: "A deeply spiritual devotional rendition of Rabindra Sangeet by Poushali Bannerjee. This performance captures the transcendent quality of Tagore's devotional compositions, offering listeners a pathway to inner peace and spiritual connection.",
    type: "youtube",
    youtubeId: "RNw460TsOXY",
    category: "Devotional"
  },
  {
    title: "Devotional Rabindra Sangeet",
    artist: "Performed by Poushali Bannerjee",
    description: "Another beautiful devotional performance by Poushali Bannerjee that showcases the sacred dimensions of Tagore's music. This soulful rendition invites contemplation and spiritual awakening through the timeless power of devotional song.",
    type: "youtube",
    youtubeId: "6wQYEtjRjPo",
    category: "Devotional"
  }
];

export function ExperienceLegacy() {
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const youtubeRefs = useRef<any[]>([]);
  const [ytApiReady, setYtApiReady] = useState(false);
  
  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // YouTube API ready callback
    (window as any).onYouTubeIframeAPIReady = () => {
      setYtApiReady(true);
    };

    return () => {
      // Cleanup YouTube players
      youtubeRefs.current.forEach(player => {
        if (player && player.destroy) {
          player.destroy();
        }
      });
    };
  }, []);

  useEffect(() => {
    if (!ytApiReady) return;

    // Initialize YouTube players
    mediaItems.forEach((item, index) => {
      if (item.type === 'youtube') {
        const player = new (window as any).YT.Player(`youtube-player-${index}`, {
          events: {
            onStateChange: (event: any) => {
              // When this video starts playing (state = 1)
              if (event.data === 1) {
                handleMediaPlay(index);
              }
            }
          }
        });
        youtubeRefs.current[index] = player;
      }
    });
  }, [ytApiReady]);

  const handleMediaPlay = (playingIndex: number) => {
    // Pause all audio elements except the one playing
    audioRefs.current.forEach((audio, index) => {
      if (audio && index !== playingIndex && !audio.paused) {
        audio.pause();
      }
    });

    // Pause all YouTube videos except the one playing
    youtubeRefs.current.forEach((player, index) => {
      if (player && index !== playingIndex && player.getPlayerState && player.getPlayerState() === 1) {
        player.pauseVideo();
      }
    });
  };

  useEffect(() => {
    // Add play event listeners to audio elements
    audioRefs.current.forEach((audio, index) => {
      if (audio) {
        const playListener = () => handleMediaPlay(index);
        audio.addEventListener('play', playListener);
      }
    });

    return () => {
      audioRefs.current.forEach((audio) => {
        if (audio) {
          audio.removeEventListener('play', () => {});
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
            <Headphones className="text-amber-600" size={20} />
            <span className="text-amber-800 font-medium">Audio & Video Experience</span>
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
            Rabindra Mosaic
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Immerse yourself in the timeless beauty of Rabindranath Tagore's poetry and music. 
            Let these carefully curated recordings transport you to a world of emotional healing and spiritual awakening.
          </p>
        </div>
      </section>

      {/* Media Players Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {mediaItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8 md:p-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      {item.type === "youtube" ? (
                        <Video className="text-white" size={28} />
                      ) : (
                        <Music className="text-white" size={28} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-2">
                        {item.category}
                      </div>
                      <h3 className="text-3xl mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-lg text-amber-600 font-medium">{item.artist}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {item.description}
                  </p>

                  {/* Media Player */}
                  {item.type === "audio" ? (
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6">
                      <audio
                        ref={(el) => {
                          audioRefs.current[index] = el;
                        }}
                        controls
                        className="w-full"
                        preload="metadata"
                        style={{
                          height: '54px',
                          borderRadius: '8px'
                        }}
                      >
                        <source src={`/audio/${item.filename}`} type="audio/mp4" />
                        <source src={`/audio/${item.filename}`} type="audio/x-m4a" />
                        Your browser does not support the audio element.
                      </audio>
                      <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                        <Play size={16} className="text-amber-600" />
                        <span>Press play to listen</span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4">
                      <div className="aspect-video w-full">
                        <iframe
                          id={`youtube-player-${index}`}
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${item.youtubeId}?enablejsapi=1`}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="rounded-lg"
                        ></iframe>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                        <Play size={16} className="text-amber-600" />
                        <span>Click to watch on YouTube</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Heart className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Emotional Healing</h3>
              <p className="text-gray-700">
                Tagore's works provide comfort and emotional resonance during challenging times
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Music className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Musical Heritage</h3>
              <p className="text-gray-700">
                Discover the rich tradition of Rabindra Sangeet and its therapeutic qualities
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <BookOpen className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Poetic Wisdom</h3>
              <p className="text-gray-700">
                Experience profound insights through Tagore's timeless poetry and literature
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
            Join Our Musical Journey
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Explore our programs and discover how Tagore's legacy can enrich your life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/programs"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg text-lg"
            >
              Explore Programs
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