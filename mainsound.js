document.addEventListener("DOMContentLoaded", function () {
  const audioElement = document.createElement("audio");
  audioElement.src = "../audio/main.mp3";

  const playButton = document.getElementById("playButton1");
  const muteButton = document.getElementById("muteButton1");

  audioElement.muted = false;
  muteButton.textContent = "음소거";

  playButton.addEventListener("click", function () {
    audioElement.play();
  });

  muteButton.addEventListener("click", function () {
    if (audioElement.muted) {
      audioElement.muted = false;
      muteButton.textContent = "음소거";
    } else {
      audioElement.muted = true;
      muteButton.textContent = "음소거 해제";
    }
  });
  document.body.appendChild(audioElement);
});
