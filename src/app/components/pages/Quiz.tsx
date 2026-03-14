export function Quiz() {
  return (
    <div>
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Test Your Knowledge About Tagore
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Discover how much you know about the life and legacy of Nobel Laureate
              Rabindranath Tagore
            </p>
            <a
              href="https://neelhouse.my.canva.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors text-lg"
            >
              Take the Quiz →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4 text-gray-900">
            Want to Learn More About Tagore?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Explore our programs and discover how Tagore's artistic legacy can enrich your
            life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/programs"
              className="px-8 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors text-center"
            >
              View Programs
            </a>
            <a
              href="/about"
              className="px-8 py-3 bg-white text-amber-600 border-2 border-amber-600 rounded-md hover:bg-amber-50 transition-colors text-center"
            >
              About Tagore
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}