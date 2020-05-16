import React from 'react';
import progressLoaderIcon from '../icons/circular-loader.gif';
import styles from '../index.module.scss';

const loaderComponent = () => {
  return (
    <div className={styles.loader_container}>
      <img
        className={styles.loader}
        src={progressLoaderIcon}
      />
    </div>
  );
}

export default loaderComponent;