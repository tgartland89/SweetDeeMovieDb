import React from 'react';
import { Link } from 'react-router-dom';


export default function Home({ movies }) {
  return (
    <div>
      <h1>Sweet Dee's Movie dB</h1>
      <div className="movie-list">
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`} className="movie-link">
                {movie.Title}
                </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
