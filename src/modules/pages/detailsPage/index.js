import React from "react";
import styles from "./index.module.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMovieDetails } from "./redux/actions";
import InitialPageLoader from 'initial-page-loader';

const DetailsPage = ({ match, history, getMovieDetails, movieDetails }) => {
  const id = match.params.id;
  const onClickBack = () => history.goBack();

  return (
    <div className={styles.container}>
      <div className={styles.back_button} onClick={onClickBack}>
        BACK
      </div>
      <InitialPageLoader api={() => getMovieDetails(id)}>
        {data => (
          <div className={styles.scrolling_container}>
            <div className={styles.content_container}>
              <img src={movieDetails.Poster} className={styles.image} />

              <div className={styles.movie_title}>{movieDetails.Title}</div>
              <div
                className={styles.sub_title}
              >{`${movieDetails.Year} | ${movieDetails.Rated} | ${movieDetails.Runtime}`}</div>

              <div className={styles.plot}>{movieDetails.Plot}</div>

              <div className={styles.split_container}>
                <div className={styles.title}>Director:</div>
                <div className={styles.description}>
                  {movieDetails.Director}
                </div>
              </div>

              <div className={styles.split_container}>
                <div className={styles.title}>Writer:</div>
                <div className={styles.description}>{movieDetails.Writer}</div>
              </div>
              <div className={styles.split_container}>
                <div className={styles.title}>Actors:</div>
                <div className={styles.description}>{movieDetails.Actors}</div>
              </div>
            </div>
          </div>
        )}
      </InitialPageLoader>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movieDetails: state.detailsPageReducer.movieDetails
  };
};

const mapDispathToProps = dispatch => {
  return {
    getMovieDetails: bindActionCreators(getMovieDetails, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(DetailsPage);
