import React from 'react'
import { Link } from 'wouter'
import { Headphones } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="gradient-accent w-10 h-10 rounded-lg flex items-center justify-center">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <span className="font-display text-2xl text-text-light hidden md:inline">
              AudioDrama
            </span>
          </a>
        </Link>

        <nav className="flex items-center gap-8">
          <Link href="/">
            <a className="text-text-muted hover:text-text-light transition-colors">
              Home
            </a>
          </Link>
          <a href="#" className="text-text-muted hover:text-text-light transition-colors">
            Browse
          </a>
          <a href="#" className="text-text-muted hover:text-text-light transition-colors">
            My Library
          </a>
          <button className="gradient-accent text-white font-semibold py-2 px-6 rounded-lg hover:shadow-lg transition-shadow">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  )
}
