import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import leftCircleImage from '../assets/IMG_0442.jpg';
import rightCircleImage from '../assets/IMG_7301.jpg';



export default function Home({ movies, onMovieClick, onToggleFavorite, favorites }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleFavoriteClick = (movie) => {
    onToggleFavorite(movie);
  };

  return (
    <div>
      <div className="circle left-circle">
        <img src={leftCircleImage} alt="Left Circle" />
      </div>
      <h1>Sweet Dee's Movie dB</h1>
      <div className="circle right-circle">
        <img src={rightCircleImage} alt="Right Circle" />
      </div>
      <div className="movie-list">
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <Link
                to="#"
                className="movie-link"
                onClick={() => {
                  onMovieClick(movie.imdbID);
                  handleMovieClick(movie);
                }}
              >
                {movie.Title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {selectedMovie && (
        <div>
          <h2>Now Playing</h2>
          <h1>{selectedMovie.Title}</h1>
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
          <p>Year: {selectedMovie.Year}</p>
          <button onClick={() => handleFavoriteClick(selectedMovie)}>
            {favorites.some((fav) => fav.imdbID === selectedMovie.imdbID)
              ? 'Remove Favorite'
              : 'Add Favorite'}
          </button>
        </div>
      )}
    </div>
  );
}
