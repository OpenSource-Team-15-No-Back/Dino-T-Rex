const movies = [
    {
      movie: '분노의 질주: 라이드 오어 다이',
      director: '루이 르테리에'
    },
    {
      movie: '가디언즈 오브 갤럭시 VOL. 3',
      director: '제임스 건'
    },
    { 
      movie: '슈퍼 마리오 브라더스',
      director: '아론 호바스, 마이클 제레닉'
    },
    {
      movie: '인어 공주',
      director: '롭 마샬'
    },
    {
      movie: '스즈메의 문단속',
      director: '신카이 마코토'
    },
    {
      movie: '슬픔의 삼각형',
      director: '루벤 외스틀룬드'
    },
    {
      movie: '드림',
      director: '이병헌'
    },
    {
      movie: '문재인입니다',
      director: '이창재'
    },
    {
      movie: '엑소시스트: 더 바티칸',
      director: '줄리어스 에이버리'
    },
    {
      movie: '거신: 바람의 아이',
      director: '신창섭'
    },
    {
      movie: '더 퍼스트 슬램덩크',
      director: '이노우에 다케히코'
    },
    {
      movie: '거울 속 외딴 성',
      director: '하라 케이이치'
    },
    {
      movie: '아기공룡 둘리 : 얼음별 대모험 리마스터링',
      director: '임경원, 김수정'
    },
    {
      movie: '말이야 바른 말이지',
      director: '박동훈, 송현주, 김소형, 한인미, 최하나, 윤성호'
    },
    {
      movie: '사슴의 왕',
      director: '안도 마사시'
    },
    {
      movie: '줄리아의 인생극장',
      director: '올리비에 트레네'
    },
  ];
  
  const info1Element = document.getElementById("info1")
  const movieElement = document.getElementById("movie");
  const info2Element = document.getElementById("info2")
  const directorElement = document.getElementById("director");
  
  var clicked = 0;
  
  function showMovieInfo() {
    const todaysMovie = movies[Math.floor(Math.random() * movies.length)];
    const randomed_movie = todaysMovie.movie;
    const randomed_director = todaysMovie.director;
  
    info1Element.textContent = "영화: ";
    movieElement.textContent = randomed_movie;
    info2Element.textContent = "감독: ";
    directorElement.textContent = randomed_director;
  
    const gameClearText = document.getElementById("game-clear-text");
    gameClearText.classList.remove("hide");
    
    const gameOver= document.getElementById("game-over-text");
    const spanElement = gameOver.querySelector("span");
    console.log(gameOver);
    gameOver.style.display = "block"
    gameOver.removeChild(spanElement);


  }
  
  
  // const showInfoMovie = document.getElementById("showInfoMovie");
  // showInfoMovie.addEventListener("click", showMovieInfo, { once: true });
  
  const showInfoMovie = document.getElementById("showInfoMovie")
  showInfoMovie.addEventListener("click", function () {
    showMovieInfo()
    clicked++
    if (clicked == 1){
      showInfoMovie.style.display = "none"
    }
  })