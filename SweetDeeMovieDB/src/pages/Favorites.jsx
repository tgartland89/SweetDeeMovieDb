//  represents a page displaying favorite movies. 
// It includes a title, a circular image, and a grid of movie posters for the favorite movies

import React from 'react';
import img7766 from '../assets/IMG_7766.jpg';

export default function Favorites({ favorites, onRemoveFavorite }) {
  const handleRemoveFavorite = (movie) => {
    onRemoveFavorite(movie);
  };

  return (
    <div className="favorites-container">
      <div className="circle-image-container">
        <div className="circle-image">
          <img src={img7766} alt="Circular Image" className="circle-image-img" />
        </div>
        <h4 className="h4-white">🐾 2 Paws Up!</h4>
      </div>
      <h1>Favorites</h1>
      <div className="poster-container">
        {favorites.map((movie) => (
          <div key={movie.imdbID}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="movie-poster"
              onClick={() => handleRemoveFavorite(movie)}
            />
            <button onClick={() => handleRemoveFavorite(movie)}>
              Remove Favorite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
