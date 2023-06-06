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

  useEffect(() => {
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
    if (query) {
      const filteredMovies = movies.filter((m) =>
        m.Title.toLowerCase().includes(query.toLowerCase())
      );
      setMovies(filteredMovies);
    } else {
      fetchMovieData(); 
    }
  };

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  movies={movies}
                  favorites={favorites}
                  onMovieClick={handleMovieClick}
                  onToggleFavorite={handleToggleFavorite}
                />
              }
            />
            <Route path="/favorites" element={<Favorites favorites={favorites} />} />
            <Route path="/addmovie" element={<AddMovie onSubmit={handleAddMovie} />} />
            <Route
              path="/movie/:id"
              element={<MoviePage favorites={favorites} onToggleFavorite={handleToggleFavorite} movie={selectedMovie} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
