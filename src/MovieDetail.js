import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

function MovieDetail({ movies }) {
    const { id } = useParams(); 
    const movie = movies.find((m) => m.id === parseInt(id)); 

    if (!movie) {
        return <h2>Movie not found! Try Again</h2>; 
    }

    return (
        <div className="movie-detail">
            <h2>{movie.title}</h2>
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Description:</strong> {movie.description} </p>
            <a href="/">Movie List</a>
        </div>
    );
}

export default MovieDetail;
