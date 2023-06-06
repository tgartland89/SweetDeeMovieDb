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
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(
          'http://www.omdbapi.com/?apikey=3deebcb6&s=dog&type=movie&plot=short&page=1&r=json'
        );
        setMovies(response.data.Search);
      } catch (error) {
        console.error('Error fetchingmovie data:', error);
      }
    };

    fetchMovieData();
  }, []);

  const handleAddMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  const handleMovieClick = (id) => {
    const selected = movies.find((movie) => movie.imdbID === id);
    setSelectedMovie(selected);
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
  const handleSearch = (query) => {
    // Implement your search logic here
    console.log('Search query:', query);
  };

  return (
    <Router>
    <Header onSearch={handleSearch} />
    <Routes>
      <Route
  path="/"
  element={
    <Home
      movies={movies}
      favorites={favorites} // Pass the favorites prop
      onMovieClick={handleMovieClick}
      onToggleFavorite={handleToggleFavorite} // Pass the onToggleFavorite prop
    />
  }
/>
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} />}
        />
        <Route
          path="/addmovie"
          element={<AddMovie onSubmit={handleAddMovie} />}
        />
        <Route
          path="/movie/:id"
          element={
            <MoviePage
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              movie={selectedMovie} // Pass selected movie as prop
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
