const movies = [
    {
      movie: 'I never dreamed about success, I worked for it',
      director: 'Estee Lauder'
    },
    {
      movie: 'Do not try to be original, just try to be good.',
      director: 'Paul Rand'
    },
    { 
      movie: 'Do not be afraid to give up the good to go for the great',
      director: 'John D. Rockefeller'
    },
    {
      movie: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
      director: 'Martin Luther King Jr.'
    },
    {
      movie: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
      director: 'Thomas Edison'
    },
    {
      movie: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
      director: 'Reid Hoffman'
    },
    {
      movie: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
      director: 'Tim O Reilly'
    },
    {
      movie: 'Some people dream of success, while other people get up every morning and make it happen',
      director: 'Wayne Huizenga'
    },
    {
      movie: 'The only thing worse than starting something and falling.. is not starting something',
      director: 'Seth Godin'
    },
    {
      movie: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
      director: 'Jim Rohn'
    },
  ];
  
  const movieElement = document.getElementById("movie");
  const directorElement = document.getElementById("director");
  
  function showMovieInfo() {
    const todaysMovie = movies[Math.floor(Math.random() * movies.length)];
    const randomed_movie = todaysMovie.movie;
    const randomed_director = todaysMovie.director;
  
    movieElement.textContent = randomed_movie;
    directorElement.textContent = randomed_director;
  
    const gameClearText = document.getElementById("game-clear-text");
    gameClearText.classList.remove("hide");
  }
  
  const showInfoDinner = document.getElementById("showInfoDinner");
  showInfoDinner.addEventListener("click", showMovieInfo);
  