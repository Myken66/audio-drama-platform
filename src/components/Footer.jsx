import React from 'react'
import { Headphones, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-dark-700 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="gradient-accent w-10 h-10 rounded-lg flex items-center justify-center">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-xl text-text-light">AudioDrama</span>
            </div>
            <p className="text-text-muted text-sm">
              Premium audio drama platform for binge-worthy storytelling.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-text-light mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-muted hover:text-text-light transition-colors text-sm">Browse</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-light transition-colors text-sm">My Library</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-light transition-colors text-sm">Downloads</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-light transition-colors text-sm">Favorites</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-text-light mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-muted hover:text-text-light transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-light transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-light transition-colors text-sm">Press</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-light transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-text-light mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-text-muted hover:text-accent-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-accent-red transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-accent-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm">
            © 2026 AudioDrama. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-text-muted hover:text-text-light transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-text-muted hover:text-text-light transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-text-muted hover:text-text-light transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
