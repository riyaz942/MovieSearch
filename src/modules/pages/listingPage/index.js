import React, { useState } from 'react';

const ListingPage = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      <input
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        placeholder="Type to search"
      />
    </div>
  )
}


export default ListingPage;