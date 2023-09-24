import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "../../components/MovieList";
import MovieListHeading from "../../components/MovieListHeading";
import SearchBox from "../../components/SearchBox";
import AddFavourites from "../../components/AddFavourites";
import RemoveFavourite from '../../components/RemoveFavourite';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async(searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=aafe1255`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue]);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    )
    setFavourites(newFavouriteList);
  }


  return (
    <div className="container-fluid shmetflix">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Shmetflix" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="row movielist">
        <MovieList
          movies={movies}
          handleClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading='Favourites'/>
      </div>
      <div className="row">
        <MovieList
          movies={favourites}
          handleClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourite}
        />
      </div>
    </div>
  );
}

export default App;
