
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 md:py-36">

          <p className="text-blue-300 uppercase tracking-widest font-semibold mb-5">
            Welcome to Nordic Business
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-8">
            Building  Businesses for a Better Future.
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-10">
            We help businesses grow through smart strategies,
            digital solutions and professional consulting.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-lg font-semibold transition"
            >
              Explore Services
            </Link>

            <Link
              to="/contact"
              className="border border-white/40 hover:bg-white hover:text-slate-900 px-7 py-4 rounded-lg font-semibold transition"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="max-w-3xl">
          <p className="text-blue-700 font-bold uppercase tracking-widest mb-3">
            Who We Are
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Your Partner in Business Growth
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Nordic Business is a modern business concept focused
            on helping companies improve their operations,
            embrace technology and discover new opportunities.
          </p>

          <Link
            to="/about"
            className="inline-block mt-7 text-blue-700 font-bold hover:underline"
          >
            Learn More →
          </Link>
        </div>

      </section>

      {/* Services Preview */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <p className="text-blue-700 font-bold uppercase tracking-widest mb-3">
              What We Do
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our Core Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: 'Business Consulting',
                description: 'Practical guidance to improve business performance.',
                number: '01',
              },
              {
                title: 'Digital Solutions',
                description: 'Modern digital tools to support business growth.',
                number: '02',
              },
              {
                title: 'Business Strategy',
                description: 'Strategic planning to discover new opportunities.',
                number: '03',
              },
            ].map((service) => (
              <div
                key={service.number}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <p className="text-blue-700 font-bold text-xl mb-5">
                  {service.number}
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-20 px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Let's Build Something Great Together
        </h2>

        <p className="text-blue-100 mb-8">
          Have a business idea? Let's talk about it.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition"
        >
          Contact Our Team
        </Link>

      </section>

    </main>
  )
}

export default Home
