import React from 'react';

function MoviesCard(props) {
  return (
    <div>
      <img src={props.detail.Poster} />
      <h4>Title: {props.detail.Title}</h4>
      <p>Released year: {props.detail.Year}</p>
      <p>Type: {props.detail.Type}</p>
    </div>
  );
}

export default MoviesCard;
