import React from 'react';

const DetailsPage = ({ match }) => {
  const id = match.params.id;

  return (
    <div>
      {id}
    </div>
  )
}

export default DetailsPage;
