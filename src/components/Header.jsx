import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/Pictures/arcturus-logo-crp.png"
            alt="Arcturus Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-white hover:text-primary-light transition-colors ${isActive('/') ? 'text-primary-light' : ''}`}
          >
            Home
          </Link>

          <Link
            to="/team"
            className={`text-white hover:text-primary-light transition-colors ${isActive('/team') ? 'text-primary-light' : ''}`}
          >
            Team Members
          </Link>

          <div className="relative group">
            <button className="text-white hover:text-primary-light flex items-center gap-1">
              Technical Work
              <i className="bi bi-chevron-down text-xs"></i>
            </button>
            <div className="absolute top-full left-0 mt-1 bg-white rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 min-w-[160px]">
              <Link to="/blog/autonomy" className="block px-4 py-2 text-text-dark hover:bg-gray-100">
                Autonomy
              </Link>
              <Link to="/blog/mechanical" className="block px-4 py-2 text-text-dark hover:bg-gray-100">
                Mechanical
              </Link>
              <Link to="/blog/electrical" className="block px-4 py-2 text-text-dark hover:bg-gray-100">
                Electrical
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="text-white hover:text-primary-light flex items-center gap-1">
              Past Seasons
              <i className="bi bi-chevron-down text-xs"></i>
            </button>
            <div className="absolute top-full left-0 mt-1 bg-white rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 min-w-[160px]">
              <Link to="/blog/year-22" className="block px-4 py-2 text-text-dark hover:bg-gray-100">
                2021-2022
              </Link>
              <Link to="/blog/year-23" className="block px-4 py-2 text-text-dark hover:bg-gray-100">
                2022-2023
              </Link>
            </div>
          </div>

          <Link
            to="/blog/outreach"
            className={`text-white hover:text-primary-light transition-colors ${isActive('/blog/outreach') ? 'text-primary-light' : ''}`}
          >
            Outreach
          </Link>

          <Link
            to="/sponsors"
            className={`text-white hover:text-primary-light transition-colors ${isActive('/sponsors') ? 'text-primary-light' : ''}`}
          >
            Sponsors
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`bi ${mobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col py-2">
            <Link
              to="/"
              className="px-6 py-2.5 text-text hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/team"
              className="px-6 py-2.5 text-text hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team Members
            </Link>
            <div className="px-6 py-2 text-sm text-gray-500 font-semibold">Technical Work</div>
            <Link
              to="/blog/autonomy"
              className="px-8 py-2 text-text hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Autonomy
            </Link>
            <Link
              to="/blog/mechanical"
              className="px-8 py-2 text-text hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mechanical
            </Link>
            <Link
              to="/blog/electrical"
              className="px-8 py-2 text-text hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Electrical
            </Link>
            <div className="px-6 py-2 text-sm text-gray-500 font-semibold">Past Seasons</div>
            <Link
              to="/blog/year-22"
              className="px-8 py-2 text-text hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              2021-2022
            </Link>
            <Link
              to="/blog/year-23"
              className="px-8 py-2 text-text hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              2022-2023
            </Link>
            <Link
              to="/blog/outreach"
              className="px-6 py-2.5 text-text hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Outreach
            </Link>
            <Link
              to="/sponsors"
              className="px-6 py-2.5 text-text hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sponsors
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
