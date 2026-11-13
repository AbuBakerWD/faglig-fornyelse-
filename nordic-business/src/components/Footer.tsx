
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between gap-8 pb-8">

          <div>
            <h2 className="text-2xl font-bold mb-3">
              Nordic<span className="text-blue-400">Business.</span>
            </h2>

            <p className="text-gray-400 max-w-sm">
              Building better businesses through innovation,
              technology and smart strategies.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link to="/" className="hover:text-white">Home</Link>
              <Link to="/about" className="hover:text-white">About</Link>
              <Link to="/services" className="hover:text-white">Services</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Nordic Business. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer
