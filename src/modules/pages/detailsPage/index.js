import React from 'react';
import styles from './index.module.scss';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMovieDetails } from './redux/actions';
import InitialPageLoader from 'Components/initialPageLoader';

const DetailsPage = ({ match, history, getMovieDetails }) => {
  const id = match.params.id;
  const onClickBack = () => history.goBack()

  return (
    <div className={styles.container}>
      <div className={styles.back_button} onClick={onClickBack}>BACK</div>
      <InitialPageLoader
        initialPageApi={() => getMovieDetails(id)}
      >
        <div className={styles.scrolling_container}>
          <div className={styles.content_container}>
            
          </div>
        </div>
      </InitialPageLoader>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    movieDetails: state.detailsPageReducer.movieDetails,
  };
};

const mapDispathToProps = dispatch => {
  return {
    getMovieDetails: bindActionCreators(getMovieDetails, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(DetailsPage);
