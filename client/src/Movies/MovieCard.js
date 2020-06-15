<<<<<<< HEAD
import React from 'react';
// import { Link } from 'react-router-dom';


const MovieCard = props => {
  const { title, director, metascore, stars } = props.props;

  // const id = props.id;

  return(
      <div className="save-wrapper">
        <div className="movie-card">
          <h2>{title}</h2>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>
          {console.log(stars)}
          {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
        <div className="save-button">Save</div>
      </div>
  )
=======
import React from "react";

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  // console.log(props);
  console.log(props.movie);

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
>>>>>>> f41faad1045cf294a6bcac1dd94fb08374f3d2f6
};

export default MovieCard;
