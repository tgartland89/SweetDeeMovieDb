import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=3deebcb6&i=${id}&plot=short&r=json`
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Year: {movie.Year}</p>
    </div>
  );
}
