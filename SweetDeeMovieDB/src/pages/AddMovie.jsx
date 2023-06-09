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

  // A part I am proud of: 

//  Imagine you have a special code called an "IMDb ID" that helps you find information about a movie or TV show on the IMDb
// Sometimes, when you're looking at a webpage that talks about a movie, the IMDb ID is hidden somewhere in the web address.
// This code is like a small program that helps find and extract the IMDb ID from a web adddress- 
// it helps by seraching for a specific address pattern 
   
  // It uses a regular expression (/tt\d+/) to match the IMDB ID pattern (tt followed by digits).
  // it checks if a match was found. If there is a match, it returns the matched IMDb ID 
  // (which is the first element in the "match" array). If there is no match, it returns an empty string ('').
  // - researched through Googe, YouTube, Wikipedia 
  
  const extractImdbID = (link) => {
    const regex = /tt\d+/;
    const match = link.match(regex);
    return match ? match[0] : '';
  };

  return (
    <div className="add-movie-container">
      <h1>
        <span>Share your Suggestions from IMDB!</span>
        <div className="circle">
          <img src={addMovieImage} alt="Add Movie" className="add-movie-image" />
        </div>
      </h1>
      <form onSubmit={handleSubmit}>
        <label className="label-white">IMDB Link:<input type="text"
            value={imdbLink}
            onChange={(event) => setImdbLink(event.target.value)} />
        </label>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMovie;