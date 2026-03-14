import { ImageWithFallback } from "../figma/ImageWithFallback";
import tagoreImage from "figma:asset/92d86cfaed8332bee08efc9a50eac4b77bfa935a.png";

export function Inspiration() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">Our Inspiration</h1>
            <p className="text-xl text-gray-700">
              Discover the rich legacy of Rabindranath Tagore and the beautiful story 
              behind our name, Neelmonilata.
            </p>
          </div>
        </div>
      </section>

      {/* About Tagore */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8 text-gray-900">About Rabindranath Tagore</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start mb-8">
              <div>
                <ImageWithFallback
                  src={tagoreImage}
                  alt="Rabindranath Tagore"
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Rabindranath Tagore (1861-1941) was a Bengali polymath who reshaped
                  literature and music. As the first non-European to win the Nobel Prize in
                  Literature in 1913, Tagore's influence spans poetry, music, art, and
                  philosophy.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  He composed over 2,000 songs, known as Rabindra Sangeet, which blend Indian
                  classical music with innovative melodic structures. His paintings,
                  literature, and educational philosophy continue to inspire millions worldwide.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Tagore's works emphasize universal humanism, the connection between nature
                  and spirituality, and the transformative power of arts and education. His
                  legacy provides a rich foundation for our wellness and cultural enrichment
                  programs.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-amber-200">
              <h3 className="text-2xl mb-4 text-gray-900">Shantiniketan: Tagore's Vision</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In 1901, Tagore founded <strong>Shantiniketan</strong> (meaning "Abode of Peace") in rural 
                West Bengal, India. What began as an experimental school grew into Visva-Bharati University, 
                a UNESCO World Heritage Site that embodies Tagore's revolutionary educational philosophy.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At Shantiniketan, Tagore created a unique learning environment that broke away from 
                conventional education. Classes were held outdoors under trees, emphasizing harmony with 
                nature, creative expression, and the integration of arts with academics. Students learned 
                music, dance, drama, and visual arts alongside traditional subjects.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Shantiniketan became a meeting place of East and West, attracting scholars, artists, and 
                thinkers from around the world. Tagore's vision was to create a space where cultures could 
                dialogue, where education nurtured the whole person, and where the arts were central to 
                human development.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Today, Shantiniketan continues to inspire educational and cultural institutions worldwide, 
                including NEEL House, which carries forward Tagore's belief in the transformative power of 
                arts, community, and connection to nature.
              </p>
              <p className="text-gray-700 text-sm">
                Learn more about Shantiniketan at{' '}
                <a 
                  href="https://www.santiniketan.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700 underline"
                >
                  www.santiniketan.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration - Neelmonilata Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8 text-gray-900">The Story of Neelmonilata</h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 mb-8">
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-4">💠</span>
                <div>
                  <h3 className="text-xl mb-3 text-gray-900">The Meaning of Neelmonilata</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This term combines "Nil" (blue) and "Monilata" (a vine or creeper), often symbolizing 
                    beauty and grace. Together, it evokes imagery of a blue vine, possibly representing a 
                    connection to nature or the sky.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed">
                The story of the poem "Neelmonilata" is a beautiful example of Rabindranath Tagore's deep 
                connection with nature and his friendship with the British sociologist and educator, W.W. Pearson.
              </p>

              <h3 className="text-2xl mb-4 text-gray-900">The Flower from Argentina</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Knowing Tagore's fascination for blue flowers, W.W. Pearson brought him a sapling all the way 
                from Argentina (some sources say South America generally) during the era of long sea voyages. 
                Pearson took great care of the plant on the ship's deck, ensuring it survived the journey to India.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Tagore planted the sapling in front of his house, Konark, in Santiniketan. He waited with great 
                anticipation for months, watching the creeper grow, but it did not bloom immediately.
              </p>

              <h3 className="text-2xl mb-4 text-gray-900">The Naming and the Poem</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The "birth" of the poem and the name happened through a moment of "long-distance longing":
              </p>

              <div className="bg-amber-50 rounded-lg p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg mb-2 text-gray-900">The Bloom</h4>
                    <p className="text-gray-700 leading-relaxed">
                      One spring, the creeper finally burst into a profusion of jewel-like, purple-blue flowers. 
                      Tagore was mesmerized by its beauty.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg mb-2 text-gray-900">The Name</h4>
                    <p className="text-gray-700 leading-relaxed">
                      For a long time, the plant remained unnamed in Bengali. Later, while Tagore was away in 
                      Bharatpur, Rajasthan, he began to miss the flower. He realized that while the flower was 
                      close to him, it didn't need a formal name, but its absence made him want to "call" it something.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg mb-2 text-gray-900">Neelmonilata</h4>
                    <p className="text-gray-700 leading-relaxed">
                      He coined the name Nilmonilata (meaning "Blue Jewel Creeper"). In botanical terms, the 
                      flower is the <em>Petrea volubilis</em>, also known as the Purple Wreath or Queen's Wreath.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg mb-2 text-gray-900">The Poem</h4>
                    <p className="text-gray-700 leading-relaxed">
                      He composed the poem "Nilmonilata" to immortalize this exotic gift. It was later included 
                      in his nature-focused collection of poems titled <em>Bonobani</em> (The Voice of the Forest, 1931).
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed italic text-center text-lg">
                The poem blends nature, love, silence, and the divine, suggesting that the deepest 
                experiences simply happen—and that is enough.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}