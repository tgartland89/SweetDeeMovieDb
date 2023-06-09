// this code creates a page that shows information about a movie. 
// If the movie is provided, it shows the movie title, poster image, and year. 
// It also has a button that can be clicked to add or remove the movie from a list of favorite movies.

import React from 'react';
import { Link } from 'react-router-dom';

export default function MoviePage({ movie, favorites, onToggleFavorite, onDeleteMovie }) {
  const handleFavoriteClick = () => {
    onToggleFavorite(movie);
  };

  const handleDeleteClick = () => {
    onDeleteMovie(movie.imdbID);
  };

  return (
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Year: {movie.Year}</p>
      <button onClick={handleFavoriteClick}>
        {favorites.some((fav) => fav.imdbID === movie.imdbID)
          ? 'Remove Favorite'
          : 'Add Favorite'}
      </button>
      <button onClick={handleDeleteClick}>Delete</button>
      <Link to="/">Back to Home</Link>
    </div>
  );
}