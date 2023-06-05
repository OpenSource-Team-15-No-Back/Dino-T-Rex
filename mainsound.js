document.addEventListener("DOMContentLoaded", function () {
  const audioElement = document.createElement("audio");
  audioElement.src = "../audio/main.mp3";
  const muteButton = document.getElementById("muteButton1");

  audioElement.muted = false;
  muteButton.textContent = "재생";

  var clicked = 0

  muteButton.addEventListener("click", function () {
    clicked++
    if (audioElement.paused || clicked == 1) {
      audioElement.play();
      muteButton.textContent = "일시정지";
    } else {
      audioElement.pause();
      muteButton.textContent = "재생";
    }
  });
  document.body.appendChild(audioElement);
});
