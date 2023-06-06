import React, { useState } from 'react';
import axios from 'axios';

function AddMovie({ onSubmit }) {
  const [imdbLink, setImdbLink] = useState('');

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=3deebcb6&r=json&i=${extractImdbID(imdbLink)}`
    );
    const movie = response.data;
    onSubmit(movie);

    // Update the db.json file
    const updatedMovies = [...db.movies, movie];
    db.movies = updatedMovies;
    setImdbLink('');
  } catch (error) {
    console.error('Error fetching movie data:', error);
  }
};

  const extractImdbID = (link) => {
    const regex = /tt\d+/;
    const match = link.match(regex);
    return match ? match[0] : '';
  };

  return (
    <div>
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <label>
          IMDB Link:
          <input
            type="text"
            value={imdbLink}
            onChange={(event) => setImdbLink(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMovie;