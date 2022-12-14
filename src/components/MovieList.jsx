import React from "react";

export default function MovieList(props) {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container col-auto d-flex flex-wrap justify-content-center align-items-center m-3">
          <img src={movie.Poster} alt="movie" />
          <div
            onClick={() => props.handleClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
}
