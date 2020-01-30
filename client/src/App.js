import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
<<<<<<< HEAD
        render={props => <Movie addToSavedList={addToSavedList} />}
=======
        render={props => (
          <Movie addToSavedList={addToSavedList} match={props.match} />
        )}
>>>>>>> 4df56b28697c36d17c9e3839b157cdbf5134da5c
      />
    </div>
  );
};

export default App;
