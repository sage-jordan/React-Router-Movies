import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { useParams } from "react-router-dom";

const Movie = props => {
  console.log(props);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        console.log(response.data);
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
  };
  console.log(movie);
  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div>
      <MovieCard key={movie.id} movie={movie} />
      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
    </div>
  );
};

export default Movie;
