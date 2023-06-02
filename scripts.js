const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const score = document.getElementById("score");
let scoreValue = 0;
var audio1 = new Audio("../audio/jump.mp3");
var audio4 = new Audio("../audio/jump.mp3");
var audio5 = new Audio("../audio/jump.mp3");
var audio6 = new Audio("../audio/jump.mp3");
var audio2 = new Audio("../audio/reach_score.mp3");
var audio3 = new Audio("../audio/game_over.mp3");

const showMeNow_show = document.getElementById("showInfo")
showMeNow_show.style.display = "none"
let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X positio n
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 184) {
    // game over
    clearInterval(isAlive);
    document.getElementById("game-over-text").classList.add("show");
    cactus.style.display = "none"
    audio3.play();
  }
}, 10);

function jump() {
  if (dino.classList != "jump") { 
    dino.classList.add("jump");
    count++
    if (count % 4 == 0){
      audio1.play()
    } else if (count % 4 == 1){
      audio4.play()
    } else if (count % 4 == 2){
      audio5.play()
    }else{
      audio6.play()
    }
    setTimeout(function () {
      dino.classList.remove("jump");

      // 충돌하지 않았을 때 점수 증가
      let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
      
      console.log(cactusLeft)
      if (cactusLeft >= 856 && cactusLeft <= 895) { // cactus를 넘었을경우 즉, 화면에서 왼쪽으로 벗어나면 점수가 증가하도록 수정
        // 점수 증가(화면 비율에 따른 좌표 조정 필요
        scoreValue++;
        score.textContent = scoreValue;

        if (scoreValue >=5) {
          score.textContent = "";
          showMeNow_show.style.display = "block"
          cactus.style.display = "none"; // cactus 숨기기
          audio2.play();
        }
      } else if (cactusLeft <= 855 && cactusLeft >= 825){
        clearInterval(isAlive);
        document.getElementById("game-over-text").classList.add("show");
        cactus.style.display = "none"
        audio3.play();
      }
    }, 300);
  }
}

function resetGame() { 
  
  document.getElementById("game-over-text").classList.remove("show");

  isAlive = setInterval(function () { 
      let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
      let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 184) {
          clearInterval(isAlive);
          document.getElementById("game-over-text").classList.add("show");
          cactus.style.display = "none"; // cactus 숨기기
          audio3.play();
      }
  }, 10);

  dino.style.top = "184px";
  cactus.style.left = "580px";
  cactus.style.display = "block"; // cactus 보이기

  // score 초기화
  scoreValue = 0;
  score.textContent = scoreValue;
}

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  if (event.key == 'ArrowUp' || event.key == ' '){
    if (scoreValue < 5 && cactus.style.display != "none"){ 
      // count++
      // if (count % 4 == 0){
      //   audio1.play()
      // } else if (count % 4 == 1){
      //   audio4.play()
      // } else if (count % 4 == 2){
      //   audio5.play()
      // }else{
      //   audio6.play()
      // }
      jump();
    }
  }
});

var count = 0

document.getElementById("over-retry-button").addEventListener("click", function () {
  resetGame();
  audio1.play();
});

document.getElementById("over-menu-button").addEventListener("click", function () {
  setTimeout(function() {
    window.location.href = '../index.html';
  }, 135); 
});

document.getElementById("clear-retry-button").addEventListener("click", function () {
  resetGame();
  audio1.play();
});

document.getElementById("clear-menu-button").addEventListener("click", function () {
  audio1.play();
  setTimeout(function() {
    window.location.href = '../index.html';
  }, 180); 
});

document.getElementById("showInfo").addEventListener("click",function() {
  audio1.play();
})

document.getElementById("undo").addEventListener("click",function() {
  audio1.play();
  setTimeout(function() {
    window.location.href = '../index.html';
  }, 200);
});