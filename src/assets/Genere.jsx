import React, { useEffect, useState } from 'react';
import './Genere.css';

function Genere() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=1c29feb59f90480282165ab1fdee190f')
      .then(response => response.json())
      .then(data => setGenres(data.genres));
  }, []);

  return (
    <section className="gen-section">
      <h1>Unmissable Cinematic Gems</h1>
      <div className="carousel">
        {genres.map((genre, index) => {
          return (
            <div key={index} className="items active">
              <div className="item-desc">
                <h3>{genre.name}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}
export default Genere;
