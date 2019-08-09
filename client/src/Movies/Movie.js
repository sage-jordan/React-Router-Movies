import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Route } from 'react-router-dom';

const Movie = (props, key) => {
  const [movie, setMovie] = useState([]);
  console.log(props);
  useEffect(() => {
    var id = props.match.params.id;
    // console.log(id);
    if(id.charAt(0) === ':'){
      id = id.substr(1);
      };
    // console.log(id);
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        console.log(response.data)
        setMovie(response.data)
      })
      .catch(error => {
        console.error("axios error: ", error)
      });
  },[]);
  console.log(movie);
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
        <div className="movie-card">
          <h2>{movie.title}</h2>
          <div className="movie-director">
            Director: <em>{movie.director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{movie.metascore}</strong>
          </div>
          <h3>Actors</h3>
          {/* {movie.stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))} */}
        </div>
        <div className="save-button">Save</div>
      </div>
  )
}
export default Movie;
