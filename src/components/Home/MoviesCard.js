import React from 'react';

function MoviesCard(props) {
  let title = props.detail.Title;
  return (
    <a
      href={`https://www.imdb.com/title/${props.detail.imdbID}`}
      target='_blank'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <div className='card'>
        <img
          src={
            props.detail.Poster !== 'N/A'
              ? props.detail.Poster
              : './no-image.jpg'
          }
          alt={props.detail.Title}
        />
        <p>
          <strong>Title: </strong>
          {title.substring(0, 20)}..
        </p>
        <p>
          <strong>Released Year: </strong>
          {props.detail.Year}
        </p>
        <p>
          <strong>Type: </strong>
          {props.detail.Type}
        </p>
      </div>
    </a>
  );
}

export default MoviesCard;
