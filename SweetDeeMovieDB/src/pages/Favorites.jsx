import React, { useState } from 'react';

export default function Favorites({ favorites }) {
  return (
    <div>
      <h1>Favorites</h1>
      <h4>🐾 2 Paws Up!</h4>
      <div className="poster-container">
        {favorites.map((movie) => (
          <img
            key={movie.imdbID}
            src={movie.Poster}
            alt={movie.Title}
            className="movie-poster"
          />
        ))}
      </div>
    </div>
  );
}