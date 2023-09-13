import React, { useState, useEffect } from 'react';
import Hero from './assets/Hero.jsx';
import Hero2 from './assets/Hero2.jsx';
import Search from './assets/Search.jsx';
import Genere from './assets/Genere.jsx';
import './App.css'
import logo from './assets/logo.png'
import search from './assets/search.svg'

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [results]);

  const searchMovies = async (e) => {
    e.preventDefault();
  
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=1c29feb59f90480282165ab1fdee190f&query=${query}`;
    const seriesUrl = `https://api.themoviedb.org/3/search/tv?api_key=1c29feb59f90480282165ab1fdee190f&query=${query}`;
  
    try {
      const movieRes = await fetch(movieUrl);
      const movieData = await movieRes.json();
  
      const seriesRes = await fetch(seriesUrl);
      const seriesData = await seriesRes.json();
  
      let combinedResults = [...seriesData.results, ...movieData.results];
  
      // Randomize the order of the results
      combinedResults.sort(() => Math.random() - 0.5);
  
      setResults(combinedResults);
    } catch(err) {
      console.error(err);
    }
  }
  
  

  return (
    <div className="App">
      <div className='navbar'>
        <img src={logo} alt="Logo" />
      </div>
      <form className="search-bar" onSubmit={searchMovies}>
        <input 
          type="text" 
          placeholder="Search for your favorite movie or series" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          <img className='search' src={search} alt='search icon'/>
        </button>
      </form>
      {results.length > 0 && (
        <Search results={results} /> // use the Search component here
      )}
      <Hero />
      <Hero2 />
      <Genere />
    </div>
  );
}

export default App;
