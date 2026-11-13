
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition duration-200 ${
      isActive
        ? 'text-blue-700 font-bold'
        : 'text-gray-600 hover:text-blue-700'
    }`

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold text-slate-900">
          Nordic<span className="text-blue-700">Business.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        <Link
          to="/contact"
          className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-lg font-semibold transition"
        >
          Get Started
        </Link>

      </div>
    </nav>
  )
}

export default Navbar
