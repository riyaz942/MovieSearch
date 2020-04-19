import React, { useState, useCallback } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMoviesListAction } from './redux/actions';
import styles from './index.module.scss'
import MoviesListItem from 'Components/movieListItem';

let latestTimeout;

const ListingPage = ({ getMoviesListAction, moviesList }) => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearch = (e) => {
    const searchString = e.target.value;

    setSearchValue(searchString);
    if (latestTimeout)
      clearTimeout(latestTimeout);
    if (searchString)
      latestTimeout = setTimeout(() => getMoviesListAction(searchString), 600);
  }

  return (
    <div className={styles.container}>
      <input
        value={searchValue}
        onChange={onChangeSearch}
        placeholder="Type to search"
      />
      {
        (searchValue) ? (
          <div className={styles.movies_container}>
            <div className={styles.movies_list_container}>
              {
                moviesList.map(movieDetail => <MoviesListItem movieDetail={movieDetail} />)
              }
            </div>
          </div>
        ) : (
            <div>
              Search box is empty.
            </div>
          )
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    moviesList: state.listingPageReducer.moviesList,
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
