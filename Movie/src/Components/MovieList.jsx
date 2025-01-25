import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeMovie } from '../MovieSlice';

export const MovieList = () => {
    const movies = useSelector((state) => state.movies.movies);
    const dispatch = useDispatch();

    const handleRemoveMovie = (id) => {
        dispatch(removeMovie(id));
    };
    return (
        <div>
            <h1>Movie List</h1>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h2>{movie.name} <button onClick={() => handleRemoveMovie(movie.id)}>Delete Movie</button></h2>
                </div>
            ))}
        </div>
    );
}