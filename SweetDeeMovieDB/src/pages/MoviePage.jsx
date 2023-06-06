import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MoviePage({ movie, favorites, onToggleFavorite }) {
  const handleFavoriteClick = () => {
    onToggleFavorite(movie);
  };

  return (
    <div>
      <h1>Sweet Dee's Movie dB</h1>
      {movie && (
        <div>
          <h2 className="h2-white">Now Playing</h2>
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt={movie.Title} />
          <p className="p-white">Year: {movie.Year}</p>
          <button onClick={handleFavoriteClick}>
            {favorites.some((fav) => fav.imdbID === movie.imdbID)
              ? 'Remove Favorite'
              : 'Add Favorite'}
          </button>
        </div>
      )}
    </div>
  );
}
