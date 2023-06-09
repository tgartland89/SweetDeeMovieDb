//  represents a page displaying favorite movies. 
// It includes a title, a circular image, and a grid of movie posters for the favorite movies

import React from 'react';
import img7766 from '../assets/IMG_7766.jpg';


// for Favorties exported from the top mostly for readability/ to make the code look nicer 
export default function Favorites({ favorites, onDeleteFavorite }) {
  const handleRemoveFavorite = (imdbID) => {
    onDeleteFavorite(imdbID);
  };

  return (
    <div>
      <div className="circle-image-container">
        <div className="circle-image">
          <img src={img7766} alt="Circular Image" className="circle-image-img" />
        </div>
        <h4 className="h4-white">🐾 2 Paws Up!</h4>
      </div>
      <h1>Favorites</h1>
      <div className="poster-container">
        {favorites.map((movie) => (
          <div key={movie.imdbID} className="movie-poster-container">
            <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
            <button
              className="remove-favorite-button"
              onClick={() => handleRemoveFavorite(movie.imdbID)}
            >
              Remove Favorite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
