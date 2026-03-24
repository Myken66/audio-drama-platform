import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';
import { Play, Pause, SkipBack, SkipForward, Volume2, Clock, Star, Users, ChevronLeft } from 'lucide-react';
import { series } from '../data/episodes';

export default function BookDetailPage() {
  const [currentEpisodeId, setCurrentEpisodeId] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const audioRef = useRef(null);

  const currentEpisode = series.episodes.find(ep => ep.id === currentEpisodeId);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (autoAdvance && currentEpisodeId < series.totalEpisodes) {
        setCurrentEpisodeId(currentEpisodeId + 1);
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [autoAdvance, currentEpisodeId]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextEpisode = () => {
    if (currentEpisodeId < series.totalEpisodes) {
      setCurrentEpisodeId(currentEpisodeId + 1);
      setCurrentTime(0);
      setIsPlaying(true);
    }
  };

  const handlePrevEpisode = () => {
    if (currentEpisodeId > 1) {
      setCurrentEpisodeId(currentEpisodeId - 1);
      setCurrentTime(0);
      setIsPlaying(true);
    }
  };

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 text-dark-300 hover:text-white transition">
              <ChevronLeft className="w-5 h-5" />
              <span>Back</span>
            </a>
          </Link>
          <h1 className="text-xl font-display font-bold text-white">AudioDrama</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Book Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Cover Image */}
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={series.coverImage}
                  alt={series.title}
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </div>
              <button className="w-full py-3 gradient-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-900/50 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-white" />
                Add to Library
              </button>
            </div>
          </div>

          {/* Book Info */}
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-red-900/30 text-red-400 text-sm font-semibold rounded-full">Complete Series</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
                {series.title}
              </h1>
              <p className="text-lg text-dark-300">by {series.author}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-dark-800 rounded-lg p-4">
                <div className="flex items-center gap-2 text-accent-gold mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold text-lg">{series.rating}</span>
                </div>
                <p className="text-dark-400 text-sm">{series.reviews.toLocaleString()} Reviews</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <div className="flex items-center gap-2 text-accent-gold mb-2">
                  <Users className="w-5 h-5" />
                  <span className="font-bold text-lg">{series.totalEpisodes}</span>
                </div>
                <p className="text-dark-400 text-sm">Episodes</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <div className="flex items-center gap-2 text-accent-gold mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold text-lg">{Math.floor(series.totalDuration / 60)}m</span>
                </div>
                <p className="text-dark-400 text-sm">Total Duration</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold text-white">About This Series</h3>
              <p className="text-dark-300 leading-relaxed">{series.longDescription}</p>
            </div>

            {/* Genres */}
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold text-white">Genres & Tags</h3>
              <div className="flex flex-wrap gap-2">
                {series.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-dark-700 text-dark-200 text-sm rounded-lg hover:bg-dark-600 transition cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Audio Player Section */}
        <div className="bg-dark-800 rounded-2xl p-8 mb-16">
          <div className="space-y-6">
            {/* Current Episode Info */}
            <div className="space-y-2">
              <p className="text-dark-400 text-sm">Now Playing</p>
              <h2 className="text-2xl font-display font-bold text-white">
                Episode {currentEpisode?.id}: {currentEpisode?.title}
              </h2>
              <p className="text-dark-300">{currentEpisode?.description}</p>
            </div>

            {/* Audio Player */}
            <audio ref={audioRef} src={currentEpisode?.audioUrl} />

            {/* Progress Bar */}
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleProgressChange}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-red-500"
              />
              <div className="flex items-center justify-between text-sm text-dark-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(currentEpisode?.duration || 0)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handlePrevEpisode}
                disabled={currentEpisodeId === 1}
                className="p-3 rounded-full bg-dark-700 text-white hover:bg-dark-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <SkipBack className="w-5 h-5" />
              </button>

              <button
                onClick={handlePlayPause}
                className="p-4 rounded-full gradient-accent text-white hover:shadow-lg hover:shadow-red-900/50 transition-all duration-300"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 fill-white" />
                ) : (
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                )}
              </button>

              <button
                onClick={handleNextEpisode}
                disabled={currentEpisodeId === series.totalEpisodes}
                className="p-3 rounded-full bg-dark-700 text-white hover:bg-dark-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <SkipForward className="w-5 h-5" />
              </button>
            </div>

            {/* Settings */}
            <div className="flex items-center justify-between pt-4 border-t border-dark-700">
              <label className="flex items-center gap-2 text-dark-300 cursor-pointer hover:text-white transition">
                <input
                  type="checkbox"
                  checked={autoAdvance}
                  onChange={(e) => setAutoAdvance(e.target.checked)}
                  className="w-4 h-4 rounded bg-dark-700 border-dark-600 cursor-pointer"
                />
                <span className="text-sm">Auto-advance to next episode</span>
              </label>
              <div className="flex items-center gap-2 text-dark-300">
                <Volume2 className="w-5 h-5" />
                <span className="text-sm">Volume</span>
              </div>
            </div>
          </div>
        </div>

        {/* Episodes Grid */}
        <div className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-white">All Episodes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {series.episodes.map((episode) => (
              <div
                key={episode.id}
                onClick={() => {
                  setCurrentEpisodeId(episode.id);
                  setCurrentTime(0);
                  setIsPlaying(true);
                }}
                className={`group cursor-pointer rounded-xl p-6 transition-all duration-300 ${
                  currentEpisodeId === episode.id
                    ? 'bg-gradient-to-br from-red-900/40 to-red-950/40 border-2 border-red-500'
                    : 'bg-dark-800 hover:bg-dark-700 border-2 border-transparent'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="space-y-1">
                    <p className="text-dark-400 text-sm font-mono">Episode {episode.id}</p>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-accent-gold transition">
                      {episode.title}
                    </h3>
                  </div>
                  <button className="p-2 rounded-full bg-dark-700 text-white group-hover:gradient-accent group-hover:shadow-lg transition-all duration-300">
                    <Play className="w-4 h-4 fill-white" />
                  </button>
                </div>

                <p className="text-dark-400 text-sm mb-4 line-clamp-2">{episode.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-dark-700">
                  <span className="text-dark-400 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {formatTime(episode.duration)}
                  </span>
                  {currentEpisodeId === episode.id && isPlaying && (
                    <span className="text-accent-gold text-xs font-semibold">Now Playing</span>
                  )}
                </div>

                {episode.cliffhanger && (
                  <div className="mt-4 pt-4 border-t border-dark-700">
                    <p className="text-xs text-accent-gold italic">"{episode.cliffhanger}"</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-dark-700 mt-16 py-12 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 text-center text-dark-400 text-sm">
          <p>&copy; 2026 AudioDrama. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
