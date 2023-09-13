import React from 'react';
import './Search.css';

function Search({ results }) { // accept the results prop
  const truncate = (str, n) => {
    let words = str.split(' ');
    return words.length > n ? words.slice(0,n).join(' ') + "..." : str;
  };

  return (
    <section className="game-section">
      <h1>Search</h1>
      <div className="carousel">
        {results.map((result, index) => { // use results instead of movies
          const fullStars = Math.floor(result.vote_average / 2);
          const halfStar = result.vote_average % 2 >= 0.5;
          let stars = [];
          for(let i=0; i<fullStars; i++) {
            stars.push(<img src='https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon2/mt-star.svg' alt='star' width='17' height='17'/>);
          }
          if(halfStar) {
            stars.push(<img src='https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon2/mt-star_half.svg' alt='half star' width='17' height='17'/>);
          }
          return (
            <div key={index} className="item active" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${result.backdrop_path})` }}>
              <div className="item-desc">
                <h3>{result.title || result.name}</h3> {/* handle both movies and series */}
                <div className="rating">
                  {stars}
                </div>
                <p>{truncate(result.overview, 30)}</p> {/* include the description */}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}
export default Search;
