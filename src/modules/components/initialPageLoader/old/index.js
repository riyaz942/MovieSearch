import React, { Component } from "react";
import PropTypes from "prop-types";
import infiniteLoader from "Icons/circular-loader.gif";
import { isTypeSuccess } from "Utils/validationHelper";
import styles from "./index.module.scss";

class InitialPageLoader extends Component {
  state = {
    loading: false,
    isError: false,
    isComponentReady: false
  };

  componentDidMount() {
    const { callApiOnMount } = this.props;
    if (callApiOnMount) this.makePageApiCall();

    this.setState({ isComponentReady: true }); //Had to do it for now
  }

  reload = () => {
    this.makePageApiCall();
  };

  makePageApiCall = () => {
    const { initialPageApi } = this.props;
    this.setState({ loading: true, isError: false });

    initialPageApi()
      .then(data => {
        console.log("initialPageLoader success", data);
        if (isTypeSuccess(data.type) && !data.payload.Error) this.setState({ loading: false });        
        else this.setState({ loading: false, isError: true });
      })
      .catch(error => {
        console.log("initialPageLoader Error:", error);
        this.setState({ loading: false, isError: true });
      });
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  loaderScreen = () => {
    return (
      <div className={styles.loader_container}>
        <img
          src={infiniteLoader}
          className={styles.loader}
          alt="Loading ..."
        />
      </div>
    )
  }

  emptyScreen = () => {
    const {
      emptyScreenMessage,
      emptyScreenTitle,
    } = this.props;

    return (
      <div className={styles.error_container}>
        <div className={styles.error_title_text}>{emptyScreenTitle}</div>
        <div className={styles.error_message_text}>{emptyScreenMessage}</div>
      </div>
    )
  }

  render() {
    const {
      children,
      className,
      errorMessage,
      customLoader,
      headingErrorMessage,
      customEmptyScreen,
      isEmpty
    } = this.props;

    const { loading, isError, isComponentReady } = this.state;

    return (
      <div
        className={`${styles.main_container} ${className}`}
      >
        {isComponentReady &&
          (isError ? (
            <div className={styles.error_container}>
              <div className={styles.error_title_text}>{headingErrorMessage}</div>
              <div className={styles.error_message_text}>{errorMessage}</div>
              <br />
              <button onClick={this.makePageApiCall}>Retry</button>
            </div>
          ) : loading ? customLoader ? customLoader : this.loaderScreen()
              : isEmpty ? customEmptyScreen ? customEmptyScreen : this.emptyScreen()
                : children
          )}
      </div>
    );
  }
}

InitialPageLoader.defaultProps = {
  showEmptyScreen: false,
  headingErrorMessage: "Whoops! Something Went Wrong.",
  errorMessage: "There was a problem with your action.",
  callApiOnMount: true,

  customEmptyScreen: null,
  isEmpty: false,

  emptyScreenTitle: 'No Result',
  emptyScreenMessage: "Looks like its Empty"
};

InitialPageLoader.propTypes = {
  children: PropTypes.any.isRequired, //(Mandetory) the children to show after the api call
  initialPageApi: PropTypes.func.isRequired, //(Mandetory) the promise in which the api call is being made
  isEmpty: PropTypes.bool, //(Optional) Shows empty screen if true when loaoding is component without any error
  errorMessage: PropTypes.string, //(Optional) Error message in case required differntly on different screens
  emptyScreenMessage: PropTypes.string, //(Optional) Empty message in case required differntly on different screens
  customLoader: PropTypes.any, //(Optional) Component to show instead of the default laoder
  callApiOnMount: PropTypes.bool, //(Optional) Don't automatically want to call the api on mount, instead
  //handle it manually using ref and calling the reload method

  customEmptyScreen: PropTypes.any,
  //customErrorScreen: PropTypes.any,

  //Style
  className: PropTypes.any
};

export default InitialPageLoader;
