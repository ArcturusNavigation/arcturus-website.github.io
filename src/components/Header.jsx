import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Search from './Search'

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
            to="/about"
            className={`text-white hover:text-primary-light transition-colors ${isActive('/about') ? 'text-primary-light' : ''}`}
          >
            About Us
          </Link>

          <Link
            to="/team"
            className={`text-white hover:text-primary-light transition-colors ${isActive('/team') ? 'text-primary-light' : ''}`}
          >
            Team Members
          </Link>

          <Link
            to="/blog/fish-n-ships"
            className={`text-white hover:text-primary-light transition-colors ${isActive('/blog/fish-n-ships') ? 'text-primary-light' : ''}`}
          >
            Technical Work
          </Link>

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

          {/* Search Component - positioned at the end */}
          <Search />
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
            {/* Mobile Search */}
            <div className="px-6 py-2.5">
              <Search />
            </div>
            <div className="border-t border-gray-200 my-2"></div>

            <Link
              to="/"
              className="px-6 py-2.5 text-text hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-6 py-2.5 text-text hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/team"
              className="px-6 py-2.5 text-text hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team Members
            </Link>
            <Link
              to="/blog/fish-n-ships"
              className="px-6 py-2.5 text-text hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Technical Work
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
