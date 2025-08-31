import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-16 bg-card border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-link/5"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          
          {/* Brand + Copyright */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-8 inline-flex items-center group">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <Logo width="100px" />
                </div>
              </div>
              <div>
                <p className="text-sm text-text-secondary font-medium">
                  &copy; {new Date().getFullYear()} All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-wide mb-6 text-sm font-bold uppercase text-accent relative">
                Company
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-accent rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map((item) => (
                  <li key={item}>
                    <Link
                      className="text-base font-medium text-text-secondary hover:text-accent transition-colors duration-300 relative group"
                      to="/"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-wide mb-6 text-sm font-bold uppercase text-accent relative">
                Support
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-accent rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {['Account', 'Help', 'Contact Us', 'Customer Support'].map((item) => (
                  <li key={item}>
                    <Link
                      className="text-base font-medium text-text-secondary hover:text-accent transition-colors duration-300 relative group"
                      to="/"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legals */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-wide mb-6 text-sm font-bold uppercase text-accent relative">
                Legals
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-accent rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item) => (
                  <li key={item}>
                    <Link
                      className="text-base font-medium text-text-secondary hover:text-accent transition-colors duration-300 relative group"
                      to="/"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer
