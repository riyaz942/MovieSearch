import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMoviesListAction } from './redux/actions';

const ListingPage = ({getMoviesListAction}) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(()=> {
    getMoviesListAction('Avengers');
  },[])

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
