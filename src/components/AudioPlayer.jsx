import React, { useState, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, Download } from 'lucide-react'

export default function AudioPlayer({ episode, isPlaying, onPlayPause, onNext, onPrevious }) {
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(100)

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => (prev + 0.5) % 100)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  const formatTime = (percentage) => {
    const totalSeconds = 180
    const seconds = Math.floor((percentage / 100) * totalSeconds)
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <section className="py-8 px-4 md:px-8 bg-dark-800 border-t border-dark-700">
      <div className="max-w-7xl mx-auto">
        {/* Episode Info */}
        <div className="mb-6">
          <p className="text-accent-gold text-sm font-semibold mb-1">
            Now Playing
          </p>
          <h3 className="font-display text-2xl text-text-light">
            Episode {episode.id}: {episode.title}
          </h3>
          <p className="text-text-muted mt-2">
            {episode.hook}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="bg-dark-700 rounded-full h-2 mb-2 cursor-pointer hover:h-3 transition-all">
            <div
              className="gradient-accent h-full rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-text-muted text-sm">
            <span>{formatTime(progress)}</span>
            <span>{episode.duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onPrevious}
              className="text-text-muted hover:text-text-light transition-colors p-2 hover:bg-dark-700 rounded-lg"
            >
              <SkipBack className="w-6 h-6" />
            </button>

            <button
              onClick={onPlayPause}
              className="gradient-accent text-white p-4 rounded-full hover:shadow-lg transition-shadow"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-current" />
              ) : (
                <Play className="w-6 h-6 fill-current" />
              )}
            </button>

            <button
              onClick={onNext}
              className="text-text-muted hover:text-text-light transition-colors p-2 hover:bg-dark-700 rounded-lg"
            >
              <SkipForward className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-text-muted" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="w-24 h-1 bg-dark-700 rounded-full accent-accent-red"
              />
            </div>

            <button className="text-text-muted hover:text-text-light transition-colors p-2 hover:bg-dark-700 rounded-lg">
              <Download className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
