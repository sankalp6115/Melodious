import { showTooltip } from "./toolTip.js";

//Heading Easter Egg
const heading = document.querySelector(".title");
let isUnlocked = false;
const drumBtn = document.querySelector(".drumMode");
let counter = 0;
heading.addEventListener("click", () => {
  drumBtn.style.display = "block";
  counter++;
  console.log(counter);
  if (counter === 5) {
    showTooltip("Congo ! You Unlocked the Easter Egg!");
    counter = 0;
    isUnlocked = true;
    // let easterEggActive = true
    // setTimeout(() => {
    //   easterEggActive = false;
    // }, 30000);
  }
});

document.querySelector(".drumMode").addEventListener("click", function () {
  const container = document.getElementById("drumKitContainer");
  container.style.display =
    container.style.display === "none" ? "block" : "none";
});



//Konami Cheat Code
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

let inputSequence = [];
let cheatMode = false; // Track if cheat mode is on
const rainSound = new Audio("../Assets/Sounds/rain.mp3");
rainSound.loop = true;
rainSound.volume = 0.5;

window.addEventListener("keydown", (e) => {
  inputSequence.push(e.key);

  if (inputSequence.length > konamiCode.length) {
    inputSequence.shift();
  }

  if (JSON.stringify(inputSequence) === JSON.stringify(konamiCode)) {
    const cheatCode = document.querySelector(".cheat-code");

    cheatMode = !cheatMode; // Toggle the cheat mode

    if (cheatMode) {
      console.log("Konami Code Activated!");
      showTooltip("Cheat Code Activated");
      cheatCode.style.display = "block";
      rainSound.play();
    } else {
      console.log("Konami Code Deactivated!");
      showTooltip("Cheat Code Deactivated");
      cheatCode.style.display = "none";
      rainSound.pause();
      rainSound.currentTime = 0;
    }

    inputSequence = []; // Reset the sequence to prevent double triggering
  }
});

// window.onekoStart();
//Oneko Toggle
const toggle = document.getElementById("oneko-checkbox");
let onekoOn = false;
toggle.addEventListener("change", (e) => {
  if (toggle.checked) {
    window.onekoStart();
  } else {
    window.onekoStop();
  }
});
