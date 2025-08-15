// voiceControl.js
export default function createVoiceControl(playerElements, controls = {}) {
    window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!window.SpeechRecognition) {
        alert("Speech recognition is not supported in your browser.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = true;

    let isListening = false;
    const voiceBtn = document.getElementById("voiceBtn");
    const voiceBtnImg = document.querySelector("#voiceBtn img");

    function startListening() {
        if (!isListening) {
            recognition.start();
            isListening = true;
            console.log("🎙 Voice control activated...");
            if (voiceBtnImg) voiceBtnImg.src = "../Assets/Images/control-images/mic-on.png";
            if (voiceBtn) voiceBtn.classList.add("listening");
        }
    }

    function stopListening() {
        if (isListening) {
            recognition.stop();
            isListening = false;
            console.log("🛑 Voice control stopped.");
            if (voiceBtnImg) voiceBtnImg.src = "../Assets/Images/control-images/mic-off.png";
            if (voiceBtn) voiceBtn.classList.remove("listening");
        }
    }

    recognition.addEventListener("result", (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript
            .trim()
            .toLowerCase();
        console.log("Heard:", transcript);
        handleVoiceCommand(transcript);
    });

    function handleVoiceCommand(command) {
        if (command.includes("play")) {
            playerElements.audioPlayer.play();
        }
        else if (command.includes("pause")) {
            playerElements.audioPlayer.pause();
        }
        else if (command.includes("volume up") || command.includes("increase volume")) {
            playerElements.audioPlayer.volume = Math.min(1, playerElements.audioPlayer.volume + 0.1);
            if (playerElements.volumeControl) {
                playerElements.volumeControl.value = playerElements.audioPlayer.volume;
            }
        }
        else if (command.includes("volume down") || command.includes("decrease volume")) {
            playerElements.audioPlayer.volume = Math.max(0, playerElements.audioPlayer.volume - 0.1);
            if (playerElements.volumeControl) {
                playerElements.volumeControl.value = playerElements.audioPlayer.volume;
            }
        }
        else if (command.includes("shuffle") && controls.toggleShuffle) {
            controls.toggleShuffle();
        }
        else if (command.includes("repeat this song") || command.includes("repeat on")) {
            controls.toggleLoop?.(true);
        }
        else if (command.includes("repeat off")) {
            controls.toggleLoop?.(false);
        }
        else if (command.includes("next song") || command.includes("next")) {
            controls.handleNextSong?.();
        }
        else if (command.includes("previous song") || command.includes("previous")) {
            controls.handlePreviousSong?.();
        }
        else if (command.includes("mute")) {
            controls.toggleMute?.();
        }
    }

    if (voiceBtn) {
        voiceBtn.addEventListener("click", () => {
            if (isListening) stopListening();
            else startListening();
        });
    }

    window.addEventListener("beforeunload", stopListening);

    return { startListening, stopListening };
}
