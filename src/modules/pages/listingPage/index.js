import React, { useState, useRef } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMoviesListAction, clearMovieListAction } from './redux/actions';
import styles from './index.module.scss'
import MoviesListItem from 'Components/movieListItem';
import InitialPageLoader from 'Components/initialPageLoader';

let latestTimeout;

const ListingPage = ({ getMoviesListAction, clearMovieListAction, moviesList, history }) => {
  const [searchValue, setSearchValue] = useState('');
  const pageLoaderRef = useRef(null);

  const onChangeSearch = (e) => {
    const searchString = e.target.value;

    setSearchValue(searchString);
    if (latestTimeout)
      clearTimeout(latestTimeout);

    if (searchString)
      latestTimeout = setTimeout(()=>pageLoaderRef.current.reload(), 600);
    else 
      clearMovieListAction();
  }

  const onItemClick = (item) => {
    const id = item.imdbID;
    clearMovieListAction();
    history.push(`/details/${id}`);
  }

  return (
    <div className={styles.container}>
      <input
        value={searchValue}
        onChange={onChangeSearch}
        placeholder="Type to search a Movie"
        className={styles.search_input}
      />
      <InitialPageLoader
        ref={pageLoaderRef}
        callApiOnMount={false}
        isEmpty={moviesList && moviesList.length == 0}
        emptyScreenMessage="Search Something"
        initialPageApi={() => getMoviesListAction(searchValue)}
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
  };
};

const mapDispathToProps = dispatch => {
  return {
    getMoviesListAction: bindActionCreators(getMoviesListAction, dispatch),
    clearMovieListAction: bindActionCreators(clearMovieListAction, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(ListingPage);
