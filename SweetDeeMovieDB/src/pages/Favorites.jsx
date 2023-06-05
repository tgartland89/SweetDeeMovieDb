import React, { useState } from 'react';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
}
