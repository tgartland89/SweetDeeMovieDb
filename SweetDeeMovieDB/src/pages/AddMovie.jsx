// This component allows users to enter an IMDB link, fetches movie data from the OMDB API, 
// and calls a provided function (onSubmit) with the retrieved movie data when the form is submitted.

import React, { useState } from 'react';
import axios from 'axios'; 
import addMovieImage from '../assets/IMG_5990.jpg';

function AddMovie({ onSubmit }) {
  const [imdbLink, setImdbLink] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // this is a GET reuesting from axios to my API, OMDB with an imdb link 
      const response = await axios.get(   
        `http://www.omdbapi.com/?apikey=3deebcb6&r=json&i=${extractImdbID(imdbLink)}`
      );
      const movie = response.data;
      onSubmit(movie);
      setImdbLink('');
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  // The extractImdbID function is a helper function that extracts the IMDB ID from the provided IMDB link. 
  // It uses a regular expression (/tt\d+/) to match the IMDB ID pattern (tt followed by digits).
  // - researched through Google and ChatGpt 
  
  const extractImdbID = (link) => {
    const regex = /tt\d+/;
    const match = link.match(regex);
    return match ? match[0] : '';
  };

  return (
    <div>
      <h1>
        <span>Add Movie</span>
        <div className="circle">
          <img src={addMovieImage} alt="Add Movie" className="add-movie-image" />
        </div>
      </h1>
      <form onSubmit={handleSubmit}>
          <label className="label-white">IMDB Link:<input type="text"
              value={imdbLink}
              onChange={(event) => setImdbLink(event.target.value)}/>
          </label>
    <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMovie;
