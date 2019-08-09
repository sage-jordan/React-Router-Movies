import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Route, Link } from 'react-router-dom';

const MovieList = props => {
  const [movies, setMovies] = useState([]);
  // const id = props.match.params.id;

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('AXIOS CALL ERROR', error);
        });
    }
    
    getMovies();
  }, [props.match.params.id]);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`}> 
          <MovieCard props={movie} key ={movie.id}/>
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
