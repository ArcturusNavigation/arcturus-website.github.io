import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Arcturus</h3>
            <p className="mb-2">
              <strong>Email:</strong> arcturus-logistics@mit.edu
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/mit.arcturus/"
                className="text-white hover:text-primary-light transition-colors text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a
                href="https://www.tiktok.com/@mitarcturus"
                className="text-white hover:text-primary-light transition-colors text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-primary-light transition-colors">
                  Team Members
                </Link>
              </li>
              <li>
                <Link to="/blog/outreach" className="hover:text-primary-light transition-colors">
                  Outreach
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="hover:text-primary-light transition-colors">
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>

          {/* Competitions */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Competitions</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://robonation.org/"
                  className="hover:text-primary-light transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RoboNation
                </a>
              </li>
              <li>
                <a
                  href="https://roboboat.org/"
                  className="hover:text-primary-light transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RoboBoat
                </a>
              </li>
              <li>
                <a
                  href="https://www.njordchallenge.com/"
                  className="hover:text-primary-light transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Njord Challenge
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
          <p>&copy; {new Date().getFullYear()} MIT Arcturus</p>
          <a
            href="https://accessibility.mit.edu"
            className="hover:text-primary-light transition-colors underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
