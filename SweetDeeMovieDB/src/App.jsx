// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AddMovie from './pages/AddMovie';
import axios from 'axios';
import MoviePage from './pages/MoviePage';

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(
          'http://www.omdbapi.com/?apikey=3deebcb6&s=dog&type=movie&plot=short&page=1&r=json'
        );
        setMovies(response.data.Search);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, []);

  const handleAddMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };
  const handleToggleFavorite = (movie) => {
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites((prevFavorites) => [...prevFavorites, movie]);
    } else {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.imdbID !== movie.imdbID)
      );
    }
  };

  return (
    <Router>
      <Header movies={movies} />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
        <Route path="/addmovie" element={<AddMovie onSubmit={handleAddMovie} />} />
        <Route path="/movie/:id"element={<MoviePage favorites={favorites} onToggleFavorite={handleToggleFavorite} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
