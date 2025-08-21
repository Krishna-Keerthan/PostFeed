import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-br from-blue-50 to-blue-100 border-t border-blue-200">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-700/5"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-8 inline-flex items-center group">
                <div className="transition-transform duration-300 group-hover:scale-105">
                  <Logo width="100px" />
                </div>
              </div>
              <div>
                <p className="text-sm text-blue-700/80 font-medium">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-wide mb-6 text-sm font-bold uppercase text-blue-700 relative">
                Company
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-500 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-base font-medium text-blue-900/80 hover:text-blue-700 transition-colors duration-200 relative group"
                    to="/"
                  >
                    Features
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-blue-900/80 hover:text-blue-700 transition-colors duration-200 relative group"
                    to="/"
                  >
                    Pricing
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-blue-900/80 hover:text-blue-700 transition-colors duration-200 relative group"
                    to="/"
                  >
                    Affiliate Program
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-blue-900/80 hover:text-blue-700 transition-colors duration-200 relative group"
                    to="/"
                  >
                    Press Kit
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-wide mb-6 text-sm font-bold uppercase text-blue-700 relative">
                Support
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-500 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-base font-medium text-blue-900/80 hover:text-blue-700 transition-colors duration-200 relative group"
                    to="/"
                  >
                    Account
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-blue-900/80 hover:text-blue-700 transition-colors duration-200 relative group"
                    to="/"
                  >
                    Help
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-blue-900/80 hover:text-blue-700 transition-colors duration-200 relative group"
                    to="/"
                  >
                    Contact Us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-blue-900/80 hover:text-blue-700 transition-colors duration-200 relative group"
                    to="/"
                  >
                    Customer Support
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-wide mb-6 text-sm font-bold uppercase text-blue-700 relative">
                Legals
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-500 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-base font-medium text-blue-900/80 hover:text-blue-700 transition-colors duration-200 relative group"
                    to="/"
                  >
                    Terms &amp; Conditions
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-blue-900/80 hover:text-blue-700 transition-colors duration-200 relative group"
                    to="/"
                  >
                    Privacy Policy
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-blue-900/80 hover:text-blue-700 transition-colors duration-200 relative group"
                    to="/"
                  >
                    Licensing
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer