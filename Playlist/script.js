import {playlists} from './../Global Scripts/playlists.js';
//----------------------------------------------Login Button handling 
const loginBtn = document.querySelector(".login-btn");
const loginOverlay = document.querySelector(".login-overlay");

loginBtn.addEventListener("mouseenter", function () {
    loginOverlay.style.opacity = "0";  // Hide overlay
    loginOverlay.style.transition = "opacity 0.2s ease"; // Smooth transition
});

loginBtn.addEventListener("mouseleave", function () {
    loginOverlay.style.opacity = "1";  // Restore opacity
  });


//---------------------------------------------Profile Menu Handling 
    const userAvatar = document.querySelector(".user-avatar");
    const profileMenu = document.querySelector(".profile_menu");

    userAvatar.addEventListener("click", function (event) {
        // Toggle opacity between 0 and 0.3
        if (profileMenu.style.opacity === "1") {
            profileMenu.style.opacity = "0";
            profileMenu.style.visibility = "hidden";
        } else {
            profileMenu.style.opacity = "1";
            profileMenu.style.visibility = "visible";
        }
        event.stopPropagation(); // Prevents click from bubbling up
    });

    document.addEventListener("click", function (event) {
    // Hide menu if click is outside both userAvatar and profileMenu
        if (!userAvatar.contains(event.target) && !profileMenu.contains(event.target)) {
            profileMenu.style.opacity = "0";
            profileMenu.style.visibility = "hidden";
        }
  });

const greeting = document.querySelector(".greeting");

var d = new Date(); // for now
d.getHours();
if(d.getHours() > 6 && d.getHours() < 12){greeting.textContent = "Good Morning, Sankalp"}
else if(d.getHours() > 12 && d.getHours() < 17){greeting.textContent = "Good Afternoon, Sankalp"}
else{greeting.textContent = "Good Evening, Sankalp"}



// Playlist Population
const playlistSection = document.querySelector(".playlists");
playlistSection.innerHTML = `<h2 class="heading">Your Playlists</h2>`; // Add heading

playlists.forEach(playlist => {
  playlistSection.innerHTML += `
    <a class="playlist" href="Playlists/index.html?name=${playlist.name}">
      <div class="playlist-poster">
        <img src="${playlist.poster}" alt="${playlist.name} poster">
      </div>
      <div class="playlist-info">
        <span class="playlist-title">${playlist.name} Music</span>
      </div>
      <button class="playPauseBtn">
        <img src="../Assets/Images/control-images/play.JPG" alt="Play button">
      </button>
    </a>
  `;
});
