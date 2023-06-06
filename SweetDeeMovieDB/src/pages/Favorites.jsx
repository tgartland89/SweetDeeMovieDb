import React, { useState } from 'react';

export default function Favorites({ favorites }) {
  return (
    <div>
      <h1>Favorites</h1>
      <h4> 🐾 2 Paws Up !</h4>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
}