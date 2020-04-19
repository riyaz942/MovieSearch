import React, { useState, useCallback } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMoviesListAction } from './redux/actions';

let latestTimeout;

const ListingPage = ({getMoviesListAction}) => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearch = (e) => {
    const searchString = e.target.value;
    
    setSearchValue(searchString);  
    if(latestTimeout)
      clearTimeout(latestTimeout);      
    if (searchString)
      latestTimeout = setTimeout(()=>getMoviesListAction(searchString), 600);
  }

  return (
    <div>
      <input
        value={searchValue}
        onChange={onChangeSearch}
        placeholder="Type to search"
      />      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    movieLists: state.listingPageReducer,
  };
};

const mapDispathToProps = dispatch => {
  return {
    getMoviesListAction: bindActionCreators(getMoviesListAction, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(ListingPage);
