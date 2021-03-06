import React, { useState } from 'react';
import styles from './index.module.scss';
import placeholderImage from 'Icons/movie-placeholder.png';

const MovieListItem = ({ movieDetail, onItemClick }) => {
  const [imageLoaded, setImageState] = useState(false);
  return (
    <div className={styles.list_item_container} onClick={()=>onItemClick(movieDetail)}>
      {
        (movieDetail.Poster !== 'N/A') && (
          <img
            src={movieDetail.Poster}
            onLoad={() => setImageState(true)}
            className={styles.img}
          />
        )
      }

      {
        (!imageLoaded || movieDetail.Poster == 'N/A') && (
          <img
            className={styles.img}
            src={placeholderImage}
          />
        )
      }
      <div className={styles.title}>{movieDetail.Title}</div>
      <div className={styles.year}>{movieDetail.Year}</div>
    </div>
  )
}

export default MovieListItem;