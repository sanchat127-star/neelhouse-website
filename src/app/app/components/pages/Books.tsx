import { BookOpen, ExternalLink, Sparkles } from "lucide-react";

export function Books() {
  const books = [
    {
      title: "Lyrics to Love: The World of Rabindranath Tagore",
      url: "https://www.amazon.com/Lyrics-Love-World-Rabindranath-Tagore/dp/B086Y7D4YH",
      description: "A melodious journey through Tagore's poetic universe, where every verse is a love letter to humanity.",
    },
    {
      title: "Rabindranath Tagore's Flights of Fancy (AI-Illustrated)",
      url: "https://www.amazon.com/Rabindranath-Tagores-Flights-Fancy-AI-Illustrated/dp/B0CM9T6ZZ9",
      description: "Where ancient wisdom meets cutting-edge technology—Tagore's stories reimagined through the lens of artificial intelligence.",
    },
    {
      title: "The Incomparable Tagore: The Myriad Manifestations of the Magnificent",
      url: "https://www.amazon.com/Incomparable-Tagore-Myriad-Manifestations-Magnificent/dp/B0B9LD1Y6S",
      description: "Unveiling the polymath extraordinaire—poet, painter, philosopher, and pioneer all rolled into one remarkable Renaissance man.",
    },
    {
      title: "Rabindranath Tagore's Stories to Cherish",
      url: "https://www.amazon.com/Rabindranath-Tagores-Stories-Cherish-Tagore/dp/B0DJK2KMKX",
      description: "Timeless tales that speak to the heart, curated for modern readers seeking wisdom wrapped in storytelling magic.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">Books by Amitabha Basu</h1>
            <p className="text-xl text-gray-700">
              Discovering Tagore's legacy through the eyes of a passionate storyteller
            </p>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 md:p-12 mb-20">
              <div className="flex items-start gap-4 mb-6">
                <Sparkles className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl mb-4 text-gray-900">Meet the Author</h2>
                  <p className="text-lg text-gray-800 leading-relaxed mb-4">
                    <span className="text-amber-700">Amitabha Basu</span> isn't just an author—he's a
                    literary archaeologist, unearthing the treasures of Rabindranath Tagore's genius
                    and polishing them for contemporary readers who might otherwise never discover
                    their brilliance.
                  </p>
                  <p className="text-lg text-gray-800 leading-relaxed mb-4">
                    Think of him as your friendly neighborhood Tagore enthusiast who happens to write
                    books. With the curiosity of a child and the wisdom of a scholar, Amitabha has
                    made it his mission to bridge the century-old gap between Tagore's time and ours.
                    He's the kind of writer who sees a dusty old manuscript and thinks, "How can I make
                    this sing for someone scrolling on their phone in 2026?"
                  </p>
                  <p className="text-lg text-gray-800 leading-relaxed mb-4">
                    What makes his work special? <span className="text-amber-700">He doesn't just
                    translate or anthologize</span>—he contextualizes, illuminates, and occasionally
                    throws in a dash of AI-generated art (because why not marry the 19th-century
                    Bengali Renaissance with 21st-century technology?). Whether he's exploring the
                    romantic verses in <em>Lyrics to Love</em> or celebrating the impossibly diverse
                    talents of the polymath in <em>The Incomparable Tagore</em>, Amitabha writes with
                    infectious enthusiasm.
                  </p>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    His secret? He genuinely loves this stuff. And love, as Tagore himself would tell
                    you, is contagious. Pick up any of his books, and you'll find yourself nodding
                    along, discovering why a Nobel Prize-winning poet from Bengal continues to matter
                    in our chaotic, beautiful, complicated world.
                  </p>
                </div>
              </div>
            </div>

            {/* Books Grid */}
            <div>
              <h2 className="text-3xl mb-12 text-center text-gray-900">Explore the Collection</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {books.map((book, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-amber-200 rounded-xl p-6 hover:shadow-xl hover:border-amber-400 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl text-gray-900 leading-tight">{book.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">{book.description}</p>
                    <a
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 group-hover:shadow-lg"
                    >
                      View on Amazon
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-20 text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-12">
              <h2 className="text-3xl mb-4 text-gray-900">Ready to Dive In?</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Each book is a doorway to understanding Tagore's multifaceted genius.
                Whether you're a longtime admirer or a curious newcomer, Amitabha Basu's
                accessible and engaging writing style makes the perfect companion for your journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.amazon.com/s?i=stripbooks&rh=p_27%3AAmitabha+Basu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View All Books by Amitabha Basu
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
