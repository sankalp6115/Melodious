import { customCursor } from '../../Global Scripts/customCursor.js';
customCursor();

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

const mainSection = document.querySelector(".main-section");
const artistSection = document.querySelector("#artists");
const artistSectionWoImage = document.querySelector("#artists2");

function renderArtists() {
  artists.forEach(artist => {
    const containerDiv = document.createElement("a");
    containerDiv.href = `Artist Page/artist.html?name=${encodeURIComponent(artist.name)}`;
    containerDiv.target = "_blank";
    containerDiv.className = "artist";

    const span = document.createElement("span");
    span.className = "artist-title";
    span.textContent = artist.name;

    // Artist has image
    if (artist.image && artist.image.trim() !== "") {
      const artistPosterDiv = document.createElement("div");
      artistPosterDiv.className = "artist-poster";

      const img = document.createElement("img");
      img.src = artist.image;
      img.alt = artist.name;

      artistPosterDiv.appendChild(img);
      containerDiv.appendChild(artistPosterDiv);
      containerDiv.appendChild(span);

      artistSection.appendChild(containerDiv);
    } 
    
    // Artist without image
    else {
      containerDiv.appendChild(span);
      artistSectionWoImage.appendChild(containerDiv);
    }
  });
}

renderArtists();
