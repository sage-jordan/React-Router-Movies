import React from "react";
import { Link } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => {
      const id = movie.id;
      return (
        <Link to={`/movies/${id}`}>
          <span className="saved-movie">{movie.title}</span>
        </Link>
      );
    })}
    <Link to="/">
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
