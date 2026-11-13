
import { Link } from 'react-router-dom'

function Services() {
  const services = [
    {
      title: 'Business Consulting',
      description: 'Professional guidance for business planning, development and growth.',
      number: '01',
    },
    {
      title: 'Digital Transformation',
      description: 'Improve your business through modern technology and digital tools.',
      number: '02',
    },
    {
      title: 'E-commerce Solutions',
      description: 'Develop online business strategies and digital commerce platforms.',
      number: '03',
    },
    {
      title: 'Business Strategy',
      description: 'Create practical strategies for long-term business success.',
      number: '04',
    },
    {
      title: 'Technology Solutions',
      description: 'Explore software, automation and innovative technology solutions.',
      number: '05',
    },
    {
      title: 'Growth Planning',
      description: 'Identify opportunities and develop plans for sustainable growth.',
      number: '06',
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <p className="text-blue-300 font-semibold uppercase tracking-widest mb-4">
          What We Offer
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Our Services
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Practical business and digital solutions designed
          to support your next stage of growth.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {services.map((service) => (
            <div
              key={service.number}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <p className="text-blue-700 font-bold text-2xl mb-6">
                {service.number}
              </p>

              <h2 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <Link
                to="/contact"
                className="text-blue-700 font-semibold hover:underline"
              >
                Enquire Now →
              </Link>
            </div>
          ))}

        </div>

      </section>

    </main>
  )
}

export default Services
