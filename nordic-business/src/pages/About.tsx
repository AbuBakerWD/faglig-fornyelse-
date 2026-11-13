
import { Link } from 'react-router-dom'

function About() {
  return (
    <main className="min-h-screen">

      <section className="bg-slate-900 text-white py-24 px-6 text-center">
        <p className="text-blue-300 uppercase tracking-widest font-semibold mb-4">
          About Nordic Business
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          We Believe in Better Business
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          We believe that technology, innovation and smart
          decisions can create better business opportunities.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5">
              Our mission is to support businesses with
              practical knowledge, modern technology and
              innovative solutions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We aim to build long-term relationships and
              create sustainable business opportunities.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-8 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Work With Us
            </Link>
          </div>

          <div className="bg-blue-50 rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">
              Our Values
            </h3>

            {[
              'Innovation and creativity',
              'Trust and transparency',
              'Customer-focused solutions',
              'Long-term sustainability',
            ].map((value) => (
              <div key={value} className="flex gap-3 mb-5">
                <span className="text-blue-700 font-bold">✓</span>
                <p className="text-gray-700">{value}</p>
              </div>
            ))}
          </div>

        </div>

      </section>
    </main>
  )
}

export default About
