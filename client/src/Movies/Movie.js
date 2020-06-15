import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const Movie = (props, key) => {
  const [movie, setMovie] = useState({stars: []});
  // console.log(props);
  useEffect(() => {
    const id = props.match.params.id;
    console.log("props: ",props) // undefined
    console.log("id: ",id) // undefined
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
        console.log(movie);
      })
      .catch(error => {
        console.error("axios error: ", error)
      });
  },[]);
  const saveMovie = () => {
    props.addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  console.log("movie: ",  movie)

  console.log("movie ID: ",  movie.id)
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
      {console.log(movie)}
      {movie.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))} 
      </div>
      <div onClick={saveMovie} className="save-button">Save</div>
    </div> 
  )
}
export default Movie;
