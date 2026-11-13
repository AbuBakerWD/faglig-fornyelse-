
import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setSubmitted(true)

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        <div>
          <p className="text-blue-700 uppercase tracking-widest font-bold mb-4">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Let's Talk About Your Business
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Tell us about your project, ideas or business
            requirements. We would love to hear from you.
          </p>

          <div className="space-y-5 text-gray-700">
            <p>📍 Denmark</p>
            <p>✉️ info@nordicbusiness.example</p>
            <p>🌐 Nordic Business</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8">

          <h2 className="text-2xl font-bold text-slate-900 mb-7">
            Send Us a Message
          </h2>

          {submitted && (
            <p className="bg-green-100 text-green-800 p-4 rounded-lg mb-5">
              Thank you! Your message has been submitted in this demo.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block font-semibold mb-2">
                Your Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Your Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Your Message
              </label>

              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="How can we help?"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-lg transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </main>
  )
}

export default Contact
