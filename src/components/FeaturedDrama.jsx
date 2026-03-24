import React from 'react'
import { Link } from 'wouter'
import { Play, ChevronRight } from 'lucide-react'

export default function FeaturedDrama({ series }) {
  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={series.coverImage}
          alt={series.title}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-dark-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <p className="text-accent-gold text-sm font-semibold mb-4 uppercase tracking-wider">
            Featured Series
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-text-light mb-6 leading-tight">
            {series.title}
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-md leading-relaxed">
            {series.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href={`/book/${series.id}`}>
              <a className="gradient-accent text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 hover:shadow-lg transition-shadow">
                <Play className="w-5 h-5 fill-current" />
                Play Now
              </a>
            </Link>
            <button className="border border-accent-red text-accent-red font-bold py-3 px-8 rounded-lg hover:bg-accent-red/10 transition-colors flex items-center gap-2">
              Learn More
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 flex gap-8">
            <div>
              <p className="text-2xl font-bold text-text-light">{series.episodeCount}</p>
              <p className="text-text-muted text-sm">Episodes</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent-gold">{series.rating}★</p>
              <p className="text-text-muted text-sm">Rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light">{series.duration}</p>
              <p className="text-text-muted text-sm">Total</p>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="hidden md:block animate-slide-in">
          <div className="relative">
            <div className="absolute inset-0 gradient-accent rounded-lg blur-3xl opacity-30"></div>
            <img
              src={series.coverImage}
              alt={series.title}
              className="relative w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
