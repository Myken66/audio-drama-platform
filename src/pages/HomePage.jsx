import React from 'react';
import { Link } from 'wouter';
import { Play, Star, Users, Headphones, ChevronRight } from 'lucide-react';
import { series, episodes } from '../data/episodes';

export default function HomePage() {
  const topEpisodes = episodes.slice(0, 6);

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">▶</span>
            </div>
            <h1 className="text-2xl font-display font-bold text-white">AudioDrama</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-dark-300 hover:text-white transition">Home</a>
            <a href="#" className="text-dark-300 hover:text-white transition">Browse</a>
            <a href="#" className="text-dark-300 hover:text-white transition">Trending</a>
          </nav>
        </div>
      </header>

      {/* Featured Hero Section with Background */}
      <section className="py-20 px-4 md:px-8 relative" style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663468380137/EFHz6wzVmuBF3BLxiEYRes/hero-background-YbLS4kh8LuLptAoFr9DHVh.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <p className="text-accent-gold text-sm font-semibold mb-2 uppercase tracking-wider">
              Featured Series
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-white leading-tight">
              His Billion Dollar Betrayal
            </h1>
          </div>

          {/* Featured Drama Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Card-Style Cover Image with Hover-to-Play */}
            <div className="lg:col-span-1">
              <Link href="/book/his-billion-dollar-betrayal">
                <a className="group block">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-square">
                    {/* Cover Image */}
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663468380137/EFHz6wzVmuBF3BLxiEYRes/book-cover-betrayal-UWSSz3j9hNa3CzFbV6vB33.webp"
                      alt={series.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      {/* Play Button */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                        <button className="gradient-accent text-white p-6 rounded-full shadow-2xl hover:shadow-3xl transition-shadow">
                          <Play className="w-8 h-8 fill-current" />
                        </button>
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-accent-red text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Complete Series
                    </div>
                  </div>
                </a>
              </Link>

              {/* Quick Stats Below Card */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(series.rating)
                            ? 'fill-accent-gold text-accent-gold'
                            : 'text-dark-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white font-semibold">{series.rating}</span>
                  <span className="text-dark-400 text-sm">({series.reviews.toLocaleString()})</span>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-dark-400">
                    <Headphones className="w-4 h-4" />
                    <span>Premium Quality</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Series Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <p className="text-dark-300 text-lg mb-6 leading-relaxed">
                  {series.description}
                </p>
              </div>

              {/* Key Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 p-6 bg-dark-800 rounded-xl">
                <div>
                  <p className="text-accent-gold text-sm font-semibold mb-2">Episodes</p>
                  <p className="text-3xl font-bold text-white">{series.totalEpisodes}</p>
                </div>
                <div>
                  <p className="text-accent-gold text-sm font-semibold mb-2">Duration</p>
                  <p className="text-3xl font-bold text-white">45m</p>
                </div>
                <div>
                  <p className="text-accent-gold text-sm font-semibold mb-2">Genre</p>
                  <p className="text-white font-semibold">{series.genre.slice(0, 2).join(', ')}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/book/his-billion-dollar-betrayal">
                  <a className="gradient-accent text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-red-900/50 transition-all">
                    <Play className="w-5 h-5 fill-current" />
                    Start Listening
                  </a>
                </Link>
                <button className="border border-accent-red text-accent-red font-bold py-3 px-8 rounded-lg hover:bg-accent-red/10 transition-colors flex items-center gap-2">
                  Learn More
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Genre Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {series.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-dark-800 text-dark-300 text-sm rounded-full border border-dark-700 hover:border-accent-red transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episodes Section */}
      <section className="py-16 px-4 md:px-8 bg-dark-800 bg-opacity-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              Latest Episodes
            </h2>
            <p className="text-dark-400 text-lg">
              Start your binge-worthy journey with these gripping episodes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topEpisodes.map((episode) => (
              <Link key={episode.id} href="/book/his-billion-dollar-betrayal">
                <a className="group">
                  <div className="glass-effect rounded-lg p-6 hover-lift cursor-pointer h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <p className="text-accent-gold text-sm font-semibold mb-2">
                          Episode {episode.id}
                        </p>
                        <h3 className="font-display text-xl text-white mb-3 group-hover:text-accent-red transition-colors">
                          {episode.title}
                        </h3>
                        <p className="text-dark-400 text-sm line-clamp-2 mb-4">
                          {episode.description}
                        </p>
                      </div>
                      <Play className="w-6 h-6 text-accent-gold ml-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    </div>

                    <div className="mt-auto pt-4 border-t border-dark-700">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-dark-400">3 min</span>
                        <span className="text-accent-red font-semibold">Play Now</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/book/his-billion-dollar-betrayal">
              <a className="inline-block border border-accent-red text-accent-red font-bold py-3 px-8 rounded-lg hover:bg-accent-red/10 transition-colors flex items-center gap-2">
                View All Episodes
                <ChevronRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 glass-effect rounded-lg">
            <Headphones className="w-12 h-12 text-accent-gold mx-auto mb-4" />
            <p className="text-4xl font-bold text-white mb-2">
              2.8M+
            </p>
            <p className="text-dark-400">Active Listeners</p>
          </div>
          <div className="text-center p-6 glass-effect rounded-lg">
            <Star className="w-12 h-12 text-accent-red mx-auto mb-4" />
            <p className="text-4xl font-bold text-white mb-2">
              {series.rating}★
            </p>
            <p className="text-dark-400">Average Rating</p>
          </div>
          <div className="text-center p-6 glass-effect rounded-lg">
            <Users className="w-12 h-12 text-accent-gold mx-auto mb-4" />
            <p className="text-4xl font-bold text-white mb-2">
              {series.reviews.toLocaleString()}+
            </p>
            <p className="text-dark-400">Reviews</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-700 mt-16 py-12 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-display font-bold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-dark-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Browse</a></li>
                <li><a href="#" className="hover:text-white transition">Trending</a></li>
                <li><a href="#" className="hover:text-white transition">New Releases</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-dark-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-dark-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-white mb-4">Follow</h4>
              <ul className="space-y-2 text-dark-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">TikTok</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row items-center justify-between text-dark-400 text-sm">
            <p>&copy; 2026 AudioDrama. All rights reserved.</p>
            <p>Premium Audio Drama Platform</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
