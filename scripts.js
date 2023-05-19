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

      if (cactusLeft <= 0) { // cactus를 넘었을경우 즉, 화면에서 왼쪽으로 벗어나면 점수가 증가하도록 수정
        // 점수 증가
        scoreValue++;
        score.textContent = scoreValue;

        if (scoreValue >=1) {
          score.textContent = "";
          document.getElementById("game-clear-text").classList.remove("hide");
          cactus.style.display = "none"; // cactus 숨기기
        }
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
          cactus.style.display = "none"; // cactus 숨기기
      }
  }, 10);
  dino.style.top = "140px";
  cactus.style.left = "500px";
  cactus.style.display = "block"; // cactus 보이기

  // score 초기화
  scoreValue = 0;
  score.textContent = scoreValue;
}
 
  

document.addEventListener("keydown", function (event) {
  if (event.key == 'ArrowUp' || event.key == ' '){  
    jump();
  }
});

document.getElementById("retry-button").addEventListener("click", function () {
  resetGame();
});

document.getElementById("menu-button").addEventListener("click", function () {
  window.location.href = '../index.html'
});

document.getElementById("showInfoDinner").addEventListener("click", function () {
  
});

document.getElementById("showInfoMovie").addEventListener("click", function () {
  
});

document.getElementById("showInfoMusic").addEventListener("click", function () {
  
});