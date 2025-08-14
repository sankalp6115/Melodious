//Login button manipulation
const loginBtn = document.querySelector(".login-btn");
const loginOverlay = document.querySelector(".login-overlay");

loginBtn.addEventListener("mouseenter", function () {
  loginOverlay.style.opacity = "0"; // Hide overlay
  loginOverlay.style.transition = "opacity 0.2s ease"; // Smooth transition
});

loginBtn.addEventListener("mouseleave", function () {
  loginOverlay.style.opacity = "1"; // Restore opacity
});


//Dark Mode Functionality
const darkModeCheckbox = document.getElementById("dark-mode");
darkModeCheckbox.addEventListener("change", function () {
  const body = document.querySelector("body");
  if (this.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});

//Like Animation
const likeBtn = document.querySelector(".likeBtn");
const likeGIF = document.querySelector(".likeAnimation");
likeBtn.onclick = function () {
  likeGIF.style.display = "block";
  setTimeout(() => {
    likeGIF.style.display = "none";
  }, 2480);
};


//Profile Menu Handling
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
  if (
    !userAvatar.contains(event.target) &&
    !profileMenu.contains(event.target)
  ) {
    profileMenu.style.opacity = "0";
    profileMenu.style.visibility = "hidden";
  }
});