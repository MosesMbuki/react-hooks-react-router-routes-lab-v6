import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>Duration: {movie.time} minutes</p>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
}

export default MovieCard;