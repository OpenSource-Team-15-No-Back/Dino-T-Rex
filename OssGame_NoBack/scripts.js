const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const score = document.getElementById("score");
let scoreValue = 0;

let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // game over
    clearInterval(isAlive);
    document.getElementById("game-over-text").classList.add("show");
  }
}, 10);

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");

      // 충돌하지 않았을 때 점수 증가
      let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
      let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

      if (!(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140)) {
        // 점수 증가
        scoreValue++;
        score.textContent = scoreValue;
      }
    }, 300);
  }
}

function resetGame() {
  document.getElementById("game-over-text").classList.remove("show");
  //clearInterval(isAlive);
  isAlive = setInterval(function () {
      let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
      let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
          clearInterval(isAlive);
          document.getElementById("game-over-text").classList.add("show");
      }
  }, 10);
  dino.style.top = "140px";
  cactus.style.left = "500px";

  // score 초기화
  scoreValue = 0;
  score.textContent = scoreValue;
}

  

document.addEventListener("keydown", function (event) {
  jump();
});

document.getElementById("retry-button").addEventListener("click", function () {
  resetGame();
});