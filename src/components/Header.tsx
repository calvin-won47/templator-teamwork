
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Teamwork</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isProductsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <Link to="/features" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    Project Management
                  </Link>
                  <Link to="/features" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    Team Collaboration
                  </Link>
                  <Link to="/features" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    Time Tracking
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              to="/features"
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                isActive('/features') ? 'text-blue-600' : ''
              }`}
            >
              Features
            </Link>
            
            <Link
              to="/pricing"
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                isActive('/pricing') ? 'text-blue-600' : ''
              }`}
            >
              Pricing
            </Link>

            <Link
              to="/blog"
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                isActive('/blog') ? 'text-blue-600' : ''
              }`}
            >
              Blog
            </Link>
            
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isResourcesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  <Link to="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    Blog
                  </Link>
                  <Link to="/resources" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    Help Center
                  </Link>
                  <Link to="/resources" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    Templates
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              to="/about"
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                isActive('/about') ? 'text-blue-600' : ''
              }`}
            >
              About
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="btn-primary"
            >
              Start free trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/features"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/resources"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/login"
                  className="block text-gray-700 hover:text-blue-600 transition-colors mb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="btn-primary block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Start free trial
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
