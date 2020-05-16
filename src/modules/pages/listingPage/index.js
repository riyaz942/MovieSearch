import React, { useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getMoviesListAction,
  clearMovieListAction,
  setSearchString
} from "./redux/actions";
import styles from "./index.module.scss";
import MoviesListItem from "Components/movieListItem";
import InitialPageLoader from "Components/initialPageLoader";

const ListingPage = ({
  getMoviesListAction,
  clearMovieListAction,
  moviesList,
  setSearchString,
  searchString,
  history
}) => {
  const initialPageLoaderRef = useRef(null);
  const latestTimeout = useRef(null);

  const onChangeSearch = e => {
    const searchString = e.target.value;

    setSearchString(searchString);
    if (latestTimeout.current) clearTimeout(latestTimeout.current);

    if (searchString) {
      latestTimeout.current = setTimeout(() => {
        initialPageLoaderRef.current.callApi();
      }, 800);
    } else {
      clearMovieListAction();
    }
  };

  const onItemClick = item => {
    const id = item.imdbID;
    history.push(`/details/${id}`);
  };

  return (
    <div className={styles.container}>
      <input
        value={searchString}
        onChange={onChangeSearch}
        placeholder="Type to search a Movie"
        className={styles.search_input}
      />
      <InitialPageLoader
        ref={initialPageLoaderRef}
        callApiOnMount={false}
        isEmpty={moviesList && moviesList.length == 0}
        successCondition={(data)=> data.payload.Response == 'True'}
        emptyMessage={{
          title: 'Search Something',
          message: '',
        }}
        api={() => getMoviesListAction(searchString)}
      >
        {data => (
          <div className={styles.movies_container}>
            <div className={styles.movies_list_container}>
              {moviesList &&
                moviesList.map((movieDetail, index) => (
                  <MoviesListItem
                    key={index}
                    movieDetail={movieDetail}
                    onItemClick={onItemClick}
                  />
                ))}
            </div>
          </div>
        )}
      </InitialPageLoader>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    moviesList: state.listingPageReducer.moviesList,
    searchString: state.listingPageReducer.searchString
  };
};

const mapDispathToProps = dispatch => {
  return {
    ...bindActionCreators(
      {
        setSearchString,
        getMoviesListAction,
        clearMovieListAction
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(ListingPage);
