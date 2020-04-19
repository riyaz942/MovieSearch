import React, { useState, useRef } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMoviesListAction, clearMovieListAction, setSearchString } from './redux/actions';
import styles from './index.module.scss'
import MoviesListItem from 'Components/movieListItem';
import InitialPageLoader from 'Components/initialPageLoader';

let latestTimeout;

const ListingPage = ({ getMoviesListAction, clearMovieListAction, moviesList, setSearchString, searchString, history }) => {
  const pageLoaderRef = useRef(null);

  const onChangeSearch = (e) => {
    const targetSearchString = e.target.value;

    setSearchString(targetSearchString);
    if (latestTimeout)
      clearTimeout(latestTimeout);

    if (targetSearchString) {
      latestTimeout = setTimeout(() => pageLoaderRef.current.reload(), 600);
    }
    else {
      clearMovieListAction();
    }
  }

  const onItemClick = (item) => {
    const id = item.imdbID;
    history.push(`/details/${id}`);
  }

  return (
    <div className={styles.container}>
      <input
        value={searchString}
        onChange={onChangeSearch}
        placeholder="Type to search a Movie"
        className={styles.search_input}
      />
      <InitialPageLoader
        ref={pageLoaderRef}
        callApiOnMount={false}
        isEmpty={moviesList && moviesList.length == 0}
        emptyScreenMessage="Search Something"
        initialPageApi={() => getMoviesListAction(searchString)}
      >
        <div className={styles.movies_container}>
          <div className={styles.movies_list_container}>
            {
              moviesList && moviesList.map(movieDetail => <MoviesListItem movieDetail={movieDetail} onItemClick={onItemClick} />)
            }
          </div>
        </div>
      </InitialPageLoader>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    moviesList: state.listingPageReducer.moviesList,
    searchString: state.listingPageReducer.searchString,
  };
};

const mapDispathToProps = dispatch => {
  return {
    ...bindActionCreators({
      setSearchString,
      getMoviesListAction,
      clearMovieListAction,
    },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(ListingPage);
