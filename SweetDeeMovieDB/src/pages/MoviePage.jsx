// this code creates a page that shows information about a movie. 
// If the movie is provided, it shows the movie title, poster image, and year. 
// It also has a button that can be clicked to add or remove the movie from a list of favorite movies.

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MoviePage({ movie, favorites, onToggleFavorite, onRemoveFavorite, onDeleteMovie }) {
  const [isDeleted, setIsDeleted] = useState(false);
  
  const handleFavoriteClick = () => {
    if (favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      onRemoveFavorite(movie);
    } else {
      onToggleFavorite(movie);
    }
  };

  const handleDeleteMovie = () => {
    onDeleteMovie(movie);
    setIsDeleted(true);
  };

  return (
    <div>
      <h1>Sweet Dee's Movie dB</h1>
      {movie && (
        <div>
          <h2>Now Playing</h2>
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt={movie.Title} />
          <p>Year: {movie.Year}</p>
          <button onClick={handleFavoriteClick}>
            {favorites.some((fav) => fav.imdbID === movie.imdbID)
              ? 'Remove Favorite'
              : 'Add Favorite'}
          </button>
          {!isDeleted && (
            <div className="button-row">
              <button onClick={handleDeleteMovie} className="delete-button">Delete</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
