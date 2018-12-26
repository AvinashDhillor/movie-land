import React from 'react';

const Modal = (props) => {
  console.log(props)
  let { movie } = props;
  return <React.Fragment>
      <div className="modal">
        <img className="modal-image" src={movie.Poster} alt={movie.Title} />
        <div className="modal-body">
          <h3>{props.movie.Title}</h3>
          <p><strong>Genre:</strong> {props.movie.Genre}</p>
          <p><strong>Actors:</strong>{props.movie.Actors}</p>
          <p><strong>Released:</strong>{props.movie.Released}</p>
          <p><strong>IMDb Rating:</strong>{props.movie.imdbRating}/10</p>
          <p><strong>Plot:</strong><br/>{props.movie.Plot}</p>
        </div>
      </div>
      <div className="overlay" onClick={props.onCloseModal} />
    </React.Fragment>;
}
 
export default Modal;