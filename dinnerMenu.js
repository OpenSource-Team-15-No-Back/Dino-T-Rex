const menu = [
  {
    name: '삼겹살',
  },
  {
    name: '초밥',
  },
  {
    name: '스테이크',
  },
  {
    name: '오겹살',
  },
  {
    name: '후라이드 치킨',
  },
  {
    name: '회',
  },
  {
    name: '라면',
  },
  {
    name: '돼지갈비',
  },
  {
    name: '육회',
  },
  {
    name: '김치찌개',
  },
  {
    name: '떡순튀',
  },
  {
    name: '곱창',
  },
  {
    name: '소갈비',
  },
  {
    name: '양념치킨',
  },
  {
    name: '등갈비 김치찜',
  },
  {
    name: '킹크랩 찜',
  },
  {
    name: '대게찜',
  },
  {
    name: '보쌈',
  },
  {
    name: '부대찌개',
  },
  {
    name: '막창',
  },
  {
    name: '햄버거',
  },
  {
    name: '샤브샤브',
  },
  {
    name: '간장게장',
  },
  {
    name: '랍스터 버터구이',
  },
  {
    name: '감자탕',
  },
  {
    name: '된장찌개',
  },
  {
    name: '김치볶음밥',
  },
  {
    name: '돼지국밥',
  },
  {
    name: '항정살',
  },
  {
    name: '훈제삼겹살',
  },
  {
    name: '닭갈비',
  },
  {
    name: '불닭볶음면',
  },
  {
    name: '닭발',
  },
  {
    name: '뼈다귀 해장국',
  },
  {
    name: '바베큐 폭립',
  },
  {
    name: '닭강정',
  },
  {
    name: '피자',
  },
  {
    name: '제육볶음',
  },
  {
    name: '차돌박이',
  },
  {
    name: '순대국밥',
  },
  {
    name: '산낙지',
  },
  {
    name: '소갈비찜',
  },
  {
    name: '물냉면',
  },
  {
    name: '양갈비',
  },
  {
    name: '소고기타다끼',
  },
  {
    name: '수육 국밥',
  },
  {
    name: '로스트 비프',
  },
  {
    name: '닭도리탕',
  },
  {
    name: '갈매기살',
  },
  {
    name: '장어 구이',
  },
  {
    name: '닭꼬치',
  },
  {
    name: '탕수육',
  },
  {
    name: '돼지갈비찜',
  },
  {
    name: '해물칼국수',
  },
  {
    name: '돈까스',
  },
  {
    name: '조개구이',
  },
  {
    name: '훈제치킨',
  },
  {
    name: '족발',
  },
  {
    name: '양념게장',
  },
  {
    name: '치즈볼',
  },
  {
    name: '타코야끼',
  },
  {
    name: '크림소스 파스타',
  },
  {
    name: '훈제연어 덮밥',
  },
  {
    name: '찜닭',
  },
  {
    name: '버팔로윙',
  },
  {
    name: '양꼬치',
  },
  {
    name: '갈비탕',
  },
  {
    name: '연어장',
  },
  {
    name: '설렁탕',
  },
  {
    name: '짜파게티',
  },
  {
    name: '아구찜',
  },
  {
    name: '짜장면',
  },
  {
    name: '간장계란밥',
  },
  {
    name: '소고기미역국',
  },
  {
    name: '짬뽕',
  },
  {
    name: '콘치즈',
  },
  {
    name: '꽃게찜',
  },
  {
    name: '물회',
  },
  {
    name: '잔치국수',
  },
  {
    name: '불족발',
  },
  {
    name: '푸딩',
  },
  {
    name: '가브리살',
  },
  {
    name: '해물찜',
  },
  {
    name: '훠궈',
  },
  {
    name: '순두부찌개',
  },
  {
    name: '꿔바로우',
  },
  {
    name: '김밥',
  },
  {
    name: '삼계탕',
  },
  {
    name: '쭈꾸미 볶음',
  },
  {
    name: '대하소금구이',
  },
  {
    name: '떡국',
  },
  {
    name: '도너츠',
  },
  {
    name: '장어덮밥',
  },
  {
    name: '제주 고기국수',
  },
  {
    name: '누룽지 백숙',
  },
  {
    name: '치킨마요 덮밥',
  },
  {
    name: '카레 돈까스 덮밥',
  },
  {
    name: '육개장',
  },
  {
    name: '로제파스타',
  },
];

const infoElement = document.getElementById("info")
const nameElement = document.getElementById("name");

var clicked = 0

document.addEventListener("DOMContentLoaded", function () {
  const audioElement = document.createElement("audio")
  audioElement.src = "../audio/chapter1.mp3"

  const muteButton = document.getElementById("muteButton")

  audioElement.muted = false
  muteButton.textContent = "재생"

  muteButton.addEventListener("click", function () {
    clicked++
    console.log(clicked)
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

function showDinnerMenuInfo() {
  const gameClearText = document.getElementById("game-clear-text")
  const clicked_retry = document.getElementById("clear-retry-button")
  gameClearText.classList.remove("hide")

  const todaysDinner = menu[Math.floor(Math.random() * menu.length)];
  const randomed_name = todaysDinner.name;

  infoElement.textContent = "추천 메뉴: "
  nameElement.textContent = randomed_name;

  showMeNow_show.style.display = "none"

  clicked_retry.addEventListener("click", function(){
    gameClearText.classList.add("hide")
  })
}

const showInfo = document.getElementById("showInfo")
showInfo.addEventListener("click", function () {
  showDinnerMenuInfo()
  showInfo.style.display = "none"
})