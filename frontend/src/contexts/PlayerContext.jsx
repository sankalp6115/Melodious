import React, { createContext, useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import { getAssetUrl } from '../utils/assets';


export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [lyrics, setLyrics] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isLooped, setIsLooped] = useState(false);
  const [volume, setVolume] = useState(40);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isOnekoEnabled, setIsOnekoEnabled] = useState(false);

  // New Shuffle State
  const [shuffledIndices, setShuffledIndices] = useState([]);
  const [shufflePointer, setShufflePointer] = useState(0);

  // Context-Based Playback (Playlist/Artist specific)
  const [activeQueue, setActiveQueue] = useState([]);

  useEffect(() => {
    const channel = new BroadcastChannel("music_channel");
    channel.onmessage = (event) => {
      const { action, value } = event.data;
      if (action === "toggleOneko") setIsOnekoEnabled(value);
    };
    return () => channel.close();
  }, []);

  const audioRef = useRef(null);

  // ... (fetch logic remains same)
  useEffect(() => {
    // Derive backend host dynamically
    const BACKEND_HOST = window.location.hostname;
    const BACKEND = `http://${BACKEND_HOST}:8000`;
    const API_BASE = `${BACKEND}/api`;
    const DEFAULT_ART = `${BACKEND}/assets/album-arts/default-art.jpg`;

    const fetchData = async () => {
      try {
        const [songsRes, lyricsRes] = await Promise.all([
          fetch(`${API_BASE}/songs`),
          fetch(`${API_BASE}/lyrics`)
        ]);
        let songsData = await songsRes.json();
        const lyricsData = await lyricsRes.json();

        songsData = songsData.map(song => ({
          ...song,
          file: `${BACKEND}/api/songs/stream/${encodeURIComponent(song.file)}`,
          albumArt: getAssetUrl(song.albumArt),
          artists: Array.isArray(song.artists) ? song.artists : (song.artists ? [song.artists] : []),
        }));

        setSongs(songsData);
        setLyrics(lyricsData);
      } catch (err) {
        console.error("API load failed:", err);
      }
    };
    fetchData();
  }, []);

  // Sync activeQueue with total library on first load
  useEffect(() => {
    if (songs.length > 0 && activeQueue.length === 0) {
      setActiveQueue(songs);
    }
  }, [songs]);

  // Shuffle Logic
  useEffect(() => {
    if (isShuffled && songs.length > 0) {
      const indices = Array.from({ length: songs.length }, (_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      setShuffledIndices(indices);
      const currentPos = indices.indexOf(currentSongIndex);
      setShufflePointer(currentPos !== -1 ? currentPos : 0);
    } else {
      setShuffledIndices([]);
    }
  }, [isShuffled, songs.length]);

  // Search logic
  useEffect(() => {
    if (!searchQuery) {
      setSearchResults([]);
      return;
    }

    const fuseOptions = {
        threshold: 0.6,
        keys: ["title", "artists", "album", "genre"],
    };
    const fuse = new Fuse(songs, fuseOptions);
    const results = fuse.search(searchQuery);
    setSearchResults(results.map(r => r.item.id));
  }, [searchQuery, songs]);

  const currentSong = activeQueue.length > 0 ? activeQueue[currentSongIndex] : songs[currentSongIndex];

  const playSong = (index, queue = null) => {
    if (queue) {
      setActiveQueue(queue);
    }
    setCurrentSongIndex(index);
    if (isShuffled && shuffledIndices.length > 0) {
      const pos = shuffledIndices.indexOf(index);
      if (pos !== -1) setShufflePointer(pos);
    }
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    const queue = activeQueue.length > 0 ? activeQueue : songs;
    if (queue.length === 0) return;
    
    if (isShuffled && shuffledIndices.length > 0) {
      const nextPointer = (shufflePointer + 1) % shuffledIndices.length;
      setShufflePointer(nextPointer);
      setCurrentSongIndex(shuffledIndices[nextPointer]);
    } else {
      setCurrentSongIndex((currentSongIndex + 1) % queue.length);
    }
    setIsPlaying(true);
  };

  const prevSong = () => {
    const queue = activeQueue.length > 0 ? activeQueue : songs;
    if (queue.length === 0) return;

    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      return;
    }
    if (isShuffled && shuffledIndices.length > 0) {
      const prevPointer = (shufflePointer - 1 + shuffledIndices.length) % shuffledIndices.length;
      setShufflePointer(prevPointer);
      setCurrentSongIndex(shuffledIndices[prevPointer]);
    } else {
      setCurrentSongIndex((currentSongIndex - 1 + queue.length) % queue.length);
    }
    setIsPlaying(true);
  };

  // System controls
if ('mediaSession' in navigator) {
  navigator.mediaSession.setActionHandler('play', () => {
    togglePlayPause();
  });

  navigator.mediaSession.setActionHandler('pause', () => {
    togglePlayPause();
  });

  navigator.mediaSession.setActionHandler('previoustrack', () => {
    prevSong();
  });

  navigator.mediaSession.setActionHandler('nexttrack', () => {
    nextSong();
  });
}

  // Helper for UI to know what's truly next
  const getNextSongInfo = () => {
    const queue = activeQueue.length > 0 ? activeQueue : songs;
    if (queue.length === 0) return null;
    if (isShuffled && shuffledIndices.length > 0) {
      const nextPointer = (shufflePointer + 1) % shuffledIndices.length;
      return queue[shuffledIndices[nextPointer]];
    }
    return queue[(currentSongIndex + 1) % queue.length];
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const seek = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  // Sync to audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100 * 0.7;
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.loop = isLooped;
    }
  }, [volume, playbackRate, isLooped]);

  // Ensure play is reliably called on song switches so WebAudio context can resume naturally
  useEffect(() => {
    if (isPlaying && audioRef.current && activeQueue.length > 0) {
      // Small timeout to allow src to be fully patched in the DOM before playing
      const t = setTimeout(() => {
         if (audioRef.current) audioRef.current.play().catch(() => {});
      }, 50);
      return () => clearTimeout(t);
    }
  }, [currentSongIndex, isPlaying, activeQueue]);

  const [parsedLyrics, setParsedLyrics] = useState([]);

  useEffect(() => {
    if (songs.length === 0) return;
    const song = songs[currentSongIndex];
    const songLyrics = lyrics.find((l) => String(l.song_id) === String(song.id));
    if (songLyrics) {
      setParsedLyrics(parseLyrics(songLyrics.lyrics || songLyrics.content));
    } else {
      setParsedLyrics([]);
    }
  }, [currentSongIndex, songs, lyrics]);

  function parseLyrics(text) {
    if (!text) return [];
    return text.split("\n").map(line => {
      const match = line.match(/^\[(\d+):(\d+)\.(\d+)\](.*)/);
      if (match) return {
        time: parseInt(match[1]) * 60 + parseInt(match[2]) + parseInt(match[3]) / 100,
        text: match[4].trim()
      };
      return null;
    }).filter(l => l);
  }

  return (
    <>
    <PlayerContext.Provider value={{
      songs, activeQueue, currentSong, lyrics, parsedLyrics,
      currentSongIndex, isPlaying, isShuffled, isLooped, volume, playbackRate, currentTime, duration,
      searchQuery, setSearchQuery, searchResults, isOnekoEnabled,
      getNextSongInfo,
      setIsShuffled, setIsLooped, setVolume, setPlaybackRate, setActiveQueue,
      playSong, togglePlayPause, nextSong, prevSong, seek,
      audioRef
    }}>
      {children}
      {songs.length > 0 && (
        <audio
          ref={audioRef}
          src={activeQueue[currentSongIndex]?.file || songs[currentSongIndex]?.file}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => {
             if (!isLooped) nextSong();
          }}
          autoPlay={isPlaying}
          crossOrigin="anonymous"
        />
      )}
    </PlayerContext.Provider>
    </>
  );
};
