import React, {useState, useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext';

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);
    const handleDelete = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };
    return (
        <div className="center fc mw385 m10">
            {
               movies.map(movie => (
                   <div className="if aic jcse">
                        <Movie name={movie.name} price={movie.price} id={movie.id} key={movie.id} />
                        <button className="w10" onClick={() => handleDelete(movie.id)}>X</button>
                   </div>
               ))
            }
        </div>
    );
}

export default MovieList;