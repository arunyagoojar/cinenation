import React, { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=1c29feb59f90480282165ab1fdee190f')
      .then(response => response.json())
      .then(data => setMovies(data.results.slice(0, 10)));
  }, []);

  const truncate = (str, n) => {
    let words = str.split(' ');
    return words.length > n ? words.slice(0,n).join(' ') + "..." : str;
  };

  return (
    <section className="game-section">
      <h1>Unmissable Cinematic Gems</h1>
      <div className="carousel">
        {movies.map((movie, index) => {
          const fullStars = Math.floor(movie.vote_average / 2);
          const halfStar = movie.vote_average % 2 >= 0.5;
          let stars = [];
          for(let i=0; i<fullStars; i++) {
            stars.push(<img src='https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon2/mt-star.svg' alt='star' width='17' height='17'/>);
          }
          if(halfStar) {
            stars.push(<img src='https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon2/mt-star_half.svg' alt='half star' width='17' height='17'/>);
          }
          return (
            <div key={index} className="item active" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})` }}>
              <div className="item-desc">
                <h3>{movie.title}</h3>
                <div className="rating">
                  {stars}
                </div>
                <p>{truncate(movie.overview, 30)}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}
export default Hero;
