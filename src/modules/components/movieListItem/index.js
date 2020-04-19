import React, { useState } from 'react';

const MovieListItem = ({ movieDetail }) => {
  const [imageLoaded, setImageState] = useState(false);

  return (
    <div>
      <img
        src={Poster}
        onLoad={()=>setImageState(true)}
      />
      {
        !imageLoaded && (
          <img src={'placeholderimage'}/>
        )
      }
      <div>{movieDetail.Title}</div>
      <div>{movieDetail.Year}</div>
    </div>
  )
}

export default MovieListItem;