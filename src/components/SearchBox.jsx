import React from "react";

export default function SearchBox(props) {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={props.value}
        onChange={(evt) => props.setSearchValue(evt.target.value)}
        placeholder="Type in to search a movie.."
      />
    </div>
  );
}
