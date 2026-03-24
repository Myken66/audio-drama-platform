import React from 'react'
import { Play, Clock } from 'lucide-react'

export default function EpisodeGrid({ episodes, currentEpisode, onSelectEpisode }) {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl text-text-light mb-12">
          All Episodes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              onClick={() => onSelectEpisode(episode)}
              className={`group cursor-pointer rounded-lg p-6 transition-all ${
                currentEpisode.id === episode.id
                  ? 'glass-effect border border-accent-red'
                  : 'glass-effect hover-lift'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <p className="text-accent-gold text-sm font-semibold mb-1">
                    Episode {episode.id}
                  </p>
                  <h3 className="font-display text-xl text-text-light mb-2 group-hover:text-accent-red transition-colors">
                    {episode.title}
                  </h3>
                  <p className="text-text-muted text-sm line-clamp-2 mb-3">
                    {episode.description}
                  </p>
                  <p className="text-text-muted text-xs italic mb-3">
                    "{episode.hook}"
                  </p>
                </div>
                <Play className="w-6 h-6 text-accent-gold ml-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-text-muted">
                  <Clock className="w-4 h-4" />
                  <span>{episode.duration}</span>
                </div>
                {currentEpisode.id === episode.id && (
                  <span className="text-accent-red font-semibold">Now Playing</span>
                )}
              </div>

              {/* Cliffhanger Preview */}
              <div className="mt-4 pt-4 border-t border-dark-700">
                <p className="text-text-muted text-xs">
                  <span className="text-accent-red font-semibold">Cliffhanger: </span>
                  "{episode.cliffhanger}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
