import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home({ movies, onMovieClick }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h1>Sweet Dee's Movie dB</h1>
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
        </div>
      )}
    </div>
  );
}