// this code is for a React application that uses the React Router library to manage different pages or routes within the application. 
// It also uses the Axios library to make requests to an API and retrieve movie data.

// Axios was something new to me and is used to communicate with the backend and it also supports the Promise API that is native to JS ES6. 
// It is a library which is used to make requests to an API, return data from the API, 
// and then do things with that data in our React application.- researched through Google, Wikipedia, and ChatGpt 

// this code sets up a React application that fetches movie data from an API, allows users to add movies to a list, 
// view movie details, mark movies as favorites, and perform searches. It uses React Router for page navigation and Axios for API communication.

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AddMovie from './pages/AddMovie';
import MoviePage from './pages/MoviePage';

// here inside the App function I am delcaring stae vaiables with uwsState hooks for movies, favorites, and selectedMovie
// this is an async function retrieving moviedata from my API using Axios
// It checks if the movie data is already stored in the local storage of the browser and if not, 
// it makes a request to the API to fetch the data. It also retrieves the favorites from the local storage.

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovieData = async () => {
    try {
      const storedMovies = localStorage.getItem('movies');
      if (storedMovies) {
        setMovies(JSON.parse(storedMovies));
      } else {
       
//  this is how a GET looks when using axios. it's also the format for PATCH,POST, & DELETE
  const response = await axios.get(
    'http://www.omdbapi.com/?apikey=3deebcb6&s=dog&type=movie&plot=short&page=1&r=json'
  );
  const fetchedMovies = response.data.Search;
  setMovies(fetchedMovies);
  localStorage.setItem('movies', JSON.stringify(fetchedMovies));
}
      
// setting up favorites 
  const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
  }
} catch (error) {console.error('Error fetching movie data:', error);
  }
};

  // this hook calls fetchMovieData when the components load the first time 
  useEffect(() => {
    fetchMovieData();
  }, []);

  const onDeleteFavorite = (imdbID) => {
    deleteMovie(imdbID);
    // ...
  };
  const deleteMovie = (imdbID) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.imdbID !== imdbID));
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.imdbID !== imdbID));
    setSelectedMovie(null);

    const updatedMovies = movies.filter((movie) => movie.imdbID !== imdbID);
    const updatedFavorites = favorites.filter((fav) => fav.imdbID !== imdbID);
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
  
//  this function adds a movie to the list of movies. 
// It also sends a request to the backend server to save the movie data and updates the local storage accordingly.
  
  const handleAddMovie = async (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);

  // setting newMovieObj array for db
  const newMovieObj = {
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year
  };

    try {

//  here is the axios POST to get it to save  to db 
  const response = await axios.post('http://localhost:3000/movies', newMovieObj);
    console.log('Movie saved on the backend:', response.data);

    localStorage.setItem('movies', JSON.stringify([...movies, movie]));
  } catch (error) {console.error('Error saving movie on the backend:', error);
    }
};

//  sets the selected movie when a movie is clicked.
  const handleMovieClick = (id) => {
    const selected = movies.find((movie) => movie.imdbID === id);
    setSelectedMovie(selected);
  };

// adds or removes a movie from the favorites list. 
// It also sends a request to the backend server to save the favorite status of the movie.
  
  const handleToggleFavorite = async (movie) => {
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);
  
    if (!isFavorite) {
      setFavorites((prevFavorites) => [...prevFavorites, movie]);
    } else {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.imdbID !== movie.imdbID)
      );
    }
  
    try {
     
  // another POST to update the toggling of favorites 
      const response = await axios.post('http://localhost:3000/favorites', movie);
      console.log('Movie favorite status saved on the backend:', response.data);
    } catch (error) {
      console.error('Error saving movie favorite status on the backend:', error);
    }
  };

  // useEffect for Favorites to dave to db 
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

// filters the movies based on a search query.
//  If a query is provided, it filters the movies by their title; otherwise, it fetches all the movie data again.
  
  const handleSearch = (query) => {
    if (query) {
      const filteredMovies = movies.filter((m) =>
        m.Title.toLowerCase().includes(query.toLowerCase())
      );
      setMovies(filteredMovies);
    } else {
      fetchMovieData(); 
    }
  };
  
  // This returns JSX code that sets up the routing for different pages using the Router, Routes, and Route 
  // components from React Router. Each route is associated with a specific component and passes the required props to them.
 
  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} />
        <div className="content">
          <Routes>
            <Route path="/"element={<Home movies={movies} favorites={favorites} onMovieClick={handleMovieClick} onToggleFavorite={handleToggleFavorite} />}/>
            <Route path="/favorites" element={<Favorites favorites={favorites} onDeleteFavorite={onDeleteFavorite} />} />
            <Route path="/addmovie" element={<AddMovie onSubmit={handleAddMovie} />} />
            <Route path="/movie/:id" element={<MoviePage favorites={favorites} onToggleFavorite={handleToggleFavorite} movie={selectedMovie} onDeleteMovie={deleteMovie} />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;