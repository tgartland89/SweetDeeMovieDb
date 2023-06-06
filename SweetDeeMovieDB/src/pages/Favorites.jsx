import React from 'react';
import img7766 from '../assets/IMG_7766.jpg';

export default function Favorites({ favorites }) {
  return (
    <div>
      <h1>Favorites</h1>
      <div className="circle-image-container">
        <div className="circle-image">
          <img src={img7766} alt="Circular Image" className="circle-image-img" />
        </div>
        <h4 className="h4-white">🐾 2 Paws Up!</h4>
      </div>
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
