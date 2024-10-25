import React from 'react';
import { Link } from 'react-router-dom'; 
import './App.css';

function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <p>{movie.genre}</p>
            <Link to={`/movies/${movie.id}`}>View Details</Link> {}
        </div>
    );
}

export default MovieCard;
