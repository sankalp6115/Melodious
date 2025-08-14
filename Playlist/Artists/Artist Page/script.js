import { showTooltip } from './../../../Player/scripts/toolTip.js';
import './../../../Player/scripts/easterEggs.js';
import './../../../Player/scripts/searching.js';
import './../../../Player/scripts/minorFunctionalities.js';

const channel = new BroadcastChannel("music_channel");

//Broadcast Channel Setup and Working to exchange between Main Page and Settings Page
// Listen for messages from the settings page
channel.onmessage = (event) => {
  const { action, value } = event.data;

  switch (action) {
    case "toggleOneko":
      if (value) {
        window.onekoStart();
        document.getElementById("oneko-checkbox").checked = true;
        showTooltip("Oneko Cat Enabled");
      } else {
        window.onekoStop();
        document.getElementById("oneko-checkbox").checked = false;
        showTooltip("Oneko Cat Disabled");
      }
      break;
    case "toggleSpeedControl":
      const speedSelect = document.getElementById("speed");
      if (value) {
        speedSelect.style.display = "block";
        showTooltip("Speed Control Enabled");
      } else {
        speedSelect.style.display = "none";
        playerElements.audioPlayer.playbackRate = 1; // Reset to default speed
        speedSelect.value = 1;
        showTooltip("Speed Control Disabled");
      }
      break;
    // Add more cases for future settings (e.g., volume, theme)
    default:
      console.warn("Unknown action received:", action);
  }
};

// Existing Oneko toggle1 code (modified to send updates to settings page)
const toggle1 = document.getElementById("oneko-checkbox");
toggle1.addEventListener("change", (e) => {
  const isEnabled = toggle1.checked;
  if (isEnabled) {
    window.onekoStart();
    showTooltip("Oneko Cat Enabled");
  } else {
    window.onekoStop();
    showTooltip("Oneko Cat Disabled");
  }
  // Notify settings page of the change
  channel.postMessage({
    action: "toggleOneko",
    value: isEnabled,
  });
});

// Existing Speed Control code (modified to send updates to settings page)
const speedSelect = document.getElementById("speed");
if (speedSelect) {
  speedSelect.addEventListener("input", function () {
    playerElements.audioPlayer.playbackRate = speedSelect.value;
    // Notify settings page of speed change (optional)
    channel.postMessage({
      action: "updateSpeed",
      value: speedSelect.value,
    });
  });
  // Add listener for enabling/disabling speed control
  speedSelect.addEventListener("change", () => {
    channel.postMessage({
      action: "toggleSpeedControl",
      value: speedSelect.value,
    });
  });
}


//Dynamic URL
const params = new URLSearchParams(window.location.search);
const artistName = params.get('name');
// Initialization Of Filtered Songs Array
let filteredSongs = [];
// Filtered Song array
filteredSongs = songs.filter(song => song.artist.includes(artistName));
// console.log(filteredSongs);
  
  
//Greeting and Left Menu Handling
const greeting = document.querySelector(".greeting");
var d = new Date();
d.getHours();
if(d.getHours() > 6 && d.getHours() < 12){greeting.textContent = "Good Morning, Sankalp"}
else if(d.getHours() > 12 && d.getHours() < 17){greeting.textContent = "Good Afternoon, Sankalp"}
else{greeting.textContent = "Good Evening, Sankalp"}

const artistLinkSection = document.querySelector(".left-section");
artists.forEach(artist => {
  const artistLink = document.createElement("a");
  artistLink.href = `artist.html?name=${encodeURIComponent(artist.name)}`;
  artistLink.className = "left-menu-option";
  artistLink.textContent = artist.name;
  artistLinkSection.appendChild(artistLink);
});


// Artist Poster Section
function posterHandling() {
  const colorThief = new ColorThief();

  const posterSection = document.querySelector("section.artistPoster");
  const topPoster = document.querySelector("div#artistPoster");
  const topPosterImg = topPoster.querySelector("img");
  const topPosterSpan = document.querySelector("span#artistName");

  if (!topPoster || !topPosterImg || !topPosterSpan) {
    console.warn("Required DOM elements not found.");
    return;
  }

  // Set the artist name
  topPosterSpan.textContent = artistName;

  // Find the artist object
  const artist = artists.find(a => a.name === artistName);
  if (!artist) {
    console.warn(`Artist "${artistName}" not found in list.`);
    return;
  }

  // Set image or hide if not available
  if (!artist.image) {
    topPosterImg.style.display = "none";
    return;
  }

  // Ensure image is visible and update the src
  topPosterImg.style.display = "inline-flex";

  // Add crossorigin attribute if using external images
  topPosterImg.crossOrigin = "anonymous";
  topPosterImg.src = artist.image;

  // Wait until image is fully loaded
  topPosterImg.onload = () => {
    try {
      // Extract dominant color
      const [r, g, b] = colorThief.getColor(topPosterImg);
      // const dominantColor = `rgb(${r}, ${g}, ${b})`;
      const dominantColor = `rgb(${r}, ${g}, ${b})`;
      const darkerColor = `rgb(${r-60}, ${g-60}, ${b-60})`;
      const negativeColor = `rgb(${255-r}, ${255-g}, ${255-b})`;
      console.log("Dominant Color:", dominantColor);

      // Apply the shadow
      // posterSection.style.backgroundColor = dominantColor;
      // topPosterImg.style.boxShadow = `0 0 20px 10px ${dominantColor}`;
      posterSection.style.backgroundImage = `linear-gradient(to left, ${dominantColor}, ${darkerColor})`;
    } catch (error) {
      console.error("ColorThief failed to get color:", error);
    }
  };

  topPosterImg.onerror = () => {
    console.error("Failed to load image:", topPosterImg.src);
  };
}

posterHandling();



//Table Creation
console.log("Artist Name: " + artistName);

// Audiomotion System
import AudioMotionAnalyzer from "https://cdn.skypack.dev/audiomotion-analyzer?min";
//=============================================
//Header
// =============================================
// Music Player Core Functionality
// =============================================

// DOM Elements Reference
const playerElements = {
  body: document.querySelector("body"),
  audioPlayer: document.getElementById("audioPlayer"),
  songTitle: document.getElementById("songTitle"),
  songArtist: document.getElementById("songArtist"),
  playerAlbumArt: document.querySelectorAll(".player-album-art"),
  playPauseBtn: document.getElementById("playPauseBtn"),
  progressBar: document.getElementById("progressBar"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  repeatBtn: document.getElementById("repeatBtn"),
  shuffleBtn: document.getElementById("shuffleBtn"),
  volumeControl: document.getElementById("volumeControl"),
  playPauseImage: document.getElementById("play-pause-image"),
  volumeImage: document.getElementById("volume-img"),
  rows: document.querySelectorAll("#songList tbody tr"),
};

//Number Of Songs In Playlist
const playlistLength = document.querySelector(".playlist-length");
playlistLength.textContent = `${filteredSongs.length} Songs`;


//----------------------------------------------------Shuffling
let isShuffled = false;
let shuffledIndices = [];
let currentShuffleIndex = 0;

playerElements.shuffleBtn.addEventListener("click", toggleShuffle);

function toggleShuffle() {
  isShuffled = !isShuffled;

  if (isShuffled) {
    // Generate new shuffled indices
    shuffledIndices = generateShuffledIndices();
    // Find current song's position in shuffled array
    currentShuffleIndex = shuffledIndices.indexOf(currentSongIndex);
    playerElements.shuffleBtn.classList.add("active-shuffle");
    console.log(shuffledIndices);
    console.log("Shuffle Enabled");
    showTooltip("Shuffle Enabled");
  } else {
    playerElements.shuffleBtn.classList.remove("active-shuffle");
    console.log("Shuffle Disbled");
    showTooltip("Shuffle Disabled");
  }
}

export function generateShuffledIndices() {
  // Create array of all indices
  const indices = Array.from({ length: filteredSongs.length }, (_, i) => i);

  // Fisher-Yates shuffle algorithm
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  return indices;
}

//------------------------------------------------Looping Part
let isLooped = false;

// Toggle Loop Button
playerElements.repeatBtn.addEventListener("click", toggleLoop);
function toggleLoop() {
  isLooped = !isLooped;
  audioPlayer.loop = isLooped;

  if (isLooped) {
    playerElements.repeatBtn.classList.add("activeShuffle");
    playerElements.repeatBtn.classList.remove("inactiveShuffle");
    console.log("Looping Enabled");
    showTooltip("Looping Enabled");
  } else {
    playerElements.repeatBtn.classList.remove("activeShuffle");
    playerElements.repeatBtn.classList.add("inactiveShuffle");
    console.log("Looping Disabled");
    showTooltip("Looping Disabled");
  }
}
// -----------------------------------------------Player Part
const audioElements = document.getElementsByTagName("audio");

// Player State
export let currentSongIndex = 0;

// =============================================
// Player Controls
// =============================================

function loadSong(songIndex) {
  currentSongIndex = songIndex;
  const song = filteredSongs[songIndex];

  updateUpcomingSong(songIndex);
  // Update player UI
  playerElements.songTitle.textContent = song.title;
  playerElements.songArtist.textContent = song.artist;

  const albumArtImg = document.getElementById("player-album-art-img");
  albumArtImg.src = song.albumArt;

  playerElements.audioPlayer.src = song.file;
  playerElements.audioPlayer.load();
  playerElements.audioPlayer.volume = 0.5;

  // Find lyrics for this song
  const songLyrics = lyrics.find((l) => l.title === song.title);

  // Parse and display lyrics if found
  if (songLyrics) {
    const parsedLyrics = parseLyrics(songLyrics.lyrics);
    displayLyrics(parsedLyrics);
  } else {
    displayLyrics([]); // Show "no lyrics" message
  }
}

function togglePlayPause() {
  if (playerElements.audioPlayer.paused) {
    playerElements.audioPlayer.play();
  } else {
    playerElements.audioPlayer.pause();
  }
  handleVisualizerState(currentSongIndex);
  playerElements.playPauseImage.src = playerElements.audioPlayer.paused
    ? "../../../Assets/Images/control-images/play.jpg"
    : "../../../Assets/Images/control-images/pause.jpg";
}

function updateUpcomingSong(songIndex) {
  const upcomingSongAlbumArt = document.querySelector(".nextSongAlbumArt");
  const upcomingSongTitle = document.querySelector(".nextSongTitle");

  let nextSongIndex;
  if (isShuffled && shuffledIndices.length > 0) {
    // Find the next index in the shuffled order
    const currentShuffledIndex = shuffledIndices.indexOf(songIndex);
    nextSongIndex =
      shuffledIndices[(currentShuffledIndex + 1) % shuffledIndices.length];
  } else {
    // Normal order when shuffle is off
    nextSongIndex = (songIndex + 1) % filteredSongs.length; // Loop to start if at end
  }

  if (nextSongIndex < filteredSongs.length) {
    const upcomingSong = filteredSongs[nextSongIndex];
    upcomingSongAlbumArt.src = upcomingSong.albumArt;
    upcomingSongTitle.textContent = upcomingSong.title;
  } else {
    upcomingSongAlbumArt.src = "";
    upcomingSongTitle.textContent = "No upcoming song";
  }
}

// Modified next/previous handlers
function handleNextSong() {
  if (isShuffled) {
    currentShuffleIndex = (currentShuffleIndex + 1) % shuffledIndices.length;
    currentSongIndex = shuffledIndices[currentShuffleIndex];
  } else {
    currentSongIndex = (currentSongIndex + 1) % filteredSongs.length;
  }
  loadAndPlaySong();
}

function handlePreviousSong() {
  if (isShuffled) {
    currentShuffleIndex =
      (currentShuffleIndex - 1 + shuffledIndices.length) %
      shuffledIndices.length;
    currentSongIndex = shuffledIndices[currentShuffleIndex];
  } else {
    currentSongIndex = (currentSongIndex - 1 + filteredSongs.length) % filteredSongs.length;
  }
  loadAndPlaySong();
}

// Unified play function
function loadAndPlaySong() {
  loadSong(currentSongIndex);
  showTooltip(`Now Playing "${filteredSongs[currentSongIndex].title}"`);
  playerElements.audioPlayer.play();
  playerElements.playPauseImage.src = "../../../Assets/Images/control-images/pause.jpg";
  handleVisualizerState(currentSongIndex);
}

// =============================================
// Progress & Volume Handling
// =============================================

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "00:00";
  return (
    `${Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0")}:` +
    `${Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0")}`
  );
}

//-------------------------------------------------------
const progressContainer = document.getElementById("progress-container");
const progressBar = document.getElementById("progress-bar");
const progressIndicator = document.getElementById("progress-indicator");

// Update progress bar as audio plays
playerElements.audioPlayer.addEventListener("timeupdate", () => {
  const percentage = parseInt((playerElements.audioPlayer.currentTime / playerElements.audioPlayer.duration) * 100);
  progressBar.style.width = percentage + "%";
  progressIndicator.style.left = percentage + "%";
});

// Seek when user clicks on progress bar
progressContainer.addEventListener("click", (e) => {
  const rect = progressContainer.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const percentage = offsetX / rect.width;
  playerElements.audioPlayer.currentTime =
    percentage * playerElements.audioPlayer.duration;
});

// Dragging the indicator
let isDragging = false;

progressIndicator.addEventListener("mousedown", () => {
  isDragging = true;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const rect = progressContainer.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = Math.min(Math.max(offsetX / rect.width, 0), 1); // Keep between 0 and 1
    playerElements.audioPlayer.currentTime =
      percentage * playerElements.audioPlayer.duration;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

//-------------------------------------------------------

playerElements.audioPlayer.addEventListener("ended", handleNextSong);

function updateProgress() {
  document.getElementById("elapsed_time").textContent = formatTime(
    playerElements.audioPlayer.currentTime
  );
  document.getElementById("total_time").textContent = formatTime(
    playerElements.audioPlayer.duration
  );

  const progress =
    (playerElements.audioPlayer.currentTime / playerElements.audioPlayer.duration) * 100;
    playerElements.progressBar.value = progress;
}

let previousVolume = 1; // Store previous volume before muting
let isMuted = false; // Track mute state

function handleVolumeChange() {
  const volume = (playerElements.volumeControl.value / 100) * 0.7;
  playerElements.audioPlayer.volume = volume;

  // Update volume icon
  const volValue = playerElements.volumeControl.value;
  playerElements.volumeImage.src =
    volValue == 0
      ? "../../../Assets/Images/control-images/mute.jpg"
      : volValue > 0 && volValue < 60
      ? "../../../Assets/Images/control-images/vol_low.jpg"
      : "../../../Assets/Images/control-images/vol_high.jpg";
  const vol_tooltip = document.getElementById("vol_tooltip");
  vol_tooltip.textContent = volValue;
}

function toggleMute() {
  if (isMuted) {
    showTooltip("Song Unmuted");
    // Restore previous volume
    playerElements.audioPlayer.volume = previousVolume;
    playerElements.volumeControl.value = previousVolume * 100;
    isMuted = false;
  } else {
    // Store current volume and mute
    showTooltip("Song Muted");
    previousVolume = playerElements.audioPlayer.volume;
    playerElements.audioPlayer.volume = 0;
    playerElements.volumeControl.value = 0;
    isMuted = true;
  }
  handleVolumeChange(); // Update the volume icon accordingly
}

// Keyboard Controls
function keyboardControls(){
document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "m" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    toggleMute();
  } else if (event.code === "Space" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) 
  {
    event.preventDefault();
    togglePlayPause();
  } else if (event.key.toLowerCase() === "c" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    handlePreviousSong();
  } else if (event.key.toLowerCase() === "v" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    handleNextSong();
  } else if (event.key.toLowerCase() === "s" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    toggleShuffle();
  } else if (event.key.toLowerCase() === "l" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    toggleLoop();
  }
});
}

keyboardControls();

// =============================================
// Song Table Management
// =============================================
function createSongTable() {
  const star = "★";
  const table = document.createElement("table");
  table.className = "song-table";
  // Table Header
  const headers = [
    "#",
    "",
    "Title",
    "Album",
    "Genre",
    "⏱︎",
    "Year",
    "Rating",
  ];
  let index=1;
  const headerRow = headers.map((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    return th;
  });
//Table Creation Rules
  table.innerHTML = `
      <thead>
        <tr>${headerRow.map((th) => th.outerHTML).join("")}</tr>
      </thead>
      <tbody>
        ${filteredSongs.map((song, index) =>
              `
          <tr class="row" onclick="playSong(${index})">
              <td class="table-index">${index+1}</td>
              <td><img src="${song.albumArt}" class="album-art"></td>
              <td class="table-title">${song.title}</td>
              <td class="table-album">${song.album}</td>
              <td class="table-genre">${song.genre}</td>
              <td class="table-length">${(song.length / 60).toFixed(0)}:${String(song.length % 60).padStart(2, 0)}</td>
              <td class="table-year">${song.year}</td>
              <td class="star-rating">${star.repeat(Math.floor(song.rating))}${song.rating % 1 ? "⯨" : ""}</td>
            </tr>
            `
          )
          .join("")}
      </tbody>
    `;
    index++;

  //Continuous navigation system
  const highlight = document.getElementById("hover-highlight");

  table.addEventListener("mouseover", (e) => {
    const tr = e.target.closest("tr");
    if (tr && table.contains(tr)) {
      const rect = tr.getBoundingClientRect();
      const tableRect = table.getBoundingClientRect();
      highlight.style.top = `${rect.top + window.scrollY}px`;
      highlight.style.left = `${rect.left}px`;
      highlight.style.height = `${rect.height}px`;
      highlight.style.width = `${tableRect.width}px`;
    }
  });

  table.addEventListener("mouseleave", () => {
    highlight.style.height = `0`;
  });

  const container = document.getElementById("songList") || document.body;
  container.appendChild(table);
}

// =============================================
// Visualizer & Audio Analysis
// =============================================

function handleVisualizerState(index) {
  const rows = document.querySelectorAll("#songList tbody tr");
  const isPlaying = !playerElements.audioPlayer.paused;

  const songTitle = document.querySelector(".song-title");
  const artistName = document.querySelector(".artist-name");

  // Clear all states
  rows.forEach((row) => {
    const albumArt = row.querySelector(".album-art");
    row.style.backgroundColor = "transparent";
    row.style.color = "white";
    albumArt.classList.remove("active-album-art");
  });

  // Only update if song is playing
  if (rows[index] && isPlaying) {
    rows[index].style.backgroundColor = "rgba(0, 115, 255, 0.4)";
    rows[index].style.color = "rgb(38, 255, 0)";
    rows[index].querySelector(".album-art").classList.add("active-album-art");
    //Right Bar Album Art
    const rightAlbumArtImg = document.getElementById("rightAlbumArt");
    console.log(filteredSongs[index].albumArt);
    rightAlbumArtImg.src = filteredSongs[index].albumArt;

    songTitle.textContent = filteredSongs[index].title;
    artistName.textContent = filteredSongs[index].artist;
  }
}

function initializeAudioVisualizer() {
  const audioContext = new AudioContext();
  const audioMotion1 = new AudioMotionAnalyzer(
    document.getElementById("visualiser-elmt"),
    {
      source: audioElements[0],
      height: 400,
      showScaleX: false,
      bgAlpha: 0,
      overlay: true,
      showBgColor: false,
      mode: 5,
      showPeaks: false,
      frequencyScale: "log",
      smoothing: 0.7,
      ledBars: false,
      gradient: "prism",
      lowRes: true,
      maxFPS: 50,
      radial: false,
      spinSpeed: 0,
      volume: 2,
    }
  );

  // Canvas placement
  const visualiserDiv = document.querySelector(".visualiser-elmt");
  setTimeout(() => {
    const canvas = document.querySelector("canvas");
    if (canvas && visualiserDiv) visualiserDiv.appendChild(canvas);
  }, 100);
}

// =============================================
// Event Listeners & Initialization
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  createSongTable();
  loadSong(currentSongIndex);
  initializeAudioVisualizer();
});


// Player Controls
playerElements.playPauseBtn.addEventListener("click", togglePlayPause);
playerElements.nextBtn.addEventListener("click", handleNextSong);
playerElements.prevBtn.addEventListener("click", handlePreviousSong);

// Progress & Volume
playerElements.audioPlayer.addEventListener("timeupdate", updateProgress);
playerElements.progressBar.addEventListener("input", () => {
  playerElements.audioPlayer.currentTime =
    (playerElements.progressBar.value / 100) *
    playerElements.audioPlayer.duration;
});
playerElements.volumeControl.addEventListener("input", handleVolumeChange);

// Modified song click handler
window.playSong = function (index) {
  if (isShuffled) {
    currentShuffleIndex = shuffledIndices.indexOf(index);
    currentSongIndex = index;
  } else {
    currentSongIndex = index;
  }
  loadAndPlaySong();
};

//__________________________________________Lyrics API Part
function parseLyrics(lyricsText) {
  if (!lyricsText) return [];

  // Split by lines and process each line
  return lyricsText
    .split("\n")
    .map((line) => {
      // Match [mm:ss.xx] format
      const match = line.match(/^\[(\d+):(\d+)\.(\d+)\](.*)/);
      if (match) {
        const minutes = parseInt(match[1]);
        const seconds = parseInt(match[2]);
        const hundredths = parseInt(match[3]);
        return {
          time: minutes * 60 + seconds + hundredths / 100,
          text: match[4].trim(),
        };
      }
      return null;
    })
    .filter((line) => line !== null);
}

function displayLyrics(lyricsData) {
  const container = document.getElementById("lyrics-container");
  if (!container) return;

  if (!lyricsData || lyricsData.length === 0) {
    container.innerHTML =
      '<div class="no-lyrics">No lyrics available for this song</div>';
    return;
  }

  container.innerHTML = lyricsData
    .map(
      (line) =>
        `<div class="lyrics-line" data-time="${line.time}">${line.text}</div>`
    )
    .join("");
}

playerElements.audioPlayer.addEventListener("timeupdate", () => {
  const currentTime = playerElements.audioPlayer.currentTime;
  const lines = document.querySelectorAll(".lyrics-line");

  // Find the last active line
  let lastActiveLine = null;

  lines.forEach((line) => {
    const lineTime = parseFloat(line.dataset.time);
    if (isNaN(lineTime)) return; // Skip if time is invalid

    const isActive = currentTime >= lineTime;
    line.classList.toggle("active", isActive);

    if (isActive) lastActiveLine = line;
  });

  // Update active line display if found
  const activeLineDisplay = document.querySelector(".active-lyric-line");
  if (lastActiveLine && activeLineDisplay) {
    activeLineDisplay.textContent = lastActiveLine.textContent;
  }

  // Auto-scroll to active line
  if (lastActiveLine) {
    lastActiveLine.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
});

// ___________________Lyric Display______________________________________
const lyricOpenBtn = document.querySelector(".lyrics-open");
const lyricContainer = document.getElementById("lyrics-container");
const lyricIcon = document.querySelector(".lyric-open-img");

lyricOpenBtn.addEventListener("click", () => {
  const isVisible = lyricContainer.style.display === "block";

  lyricContainer.style.display = isVisible ? "none" : "block";

  if (isVisible) {
    lyricIcon.style.transform = "rotate(90deg)";
    lyricIcon.style.filter = "grayscale(100%)";
  } else {
    lyricIcon.style.transform = "rotate(0deg)";
    lyricIcon.style.filter = "grayscale(0%)";
  }
});
