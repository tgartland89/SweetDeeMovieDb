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

  return (
    <Router>
      <Header movies={movies} />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </Router>
  );
}

export default App;
