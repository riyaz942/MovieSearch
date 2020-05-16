import React from 'react';
import styles from '../index.module.scss';

const errorComponent = ({ titleErrorMessage, errorMessage, onClickRetry }) => {
  return (
    <div className={styles.error_container}>
      <div className={styles.error_title_text}>{titleErrorMessage}</div>
      <div className={styles.error_message_text}>{errorMessage}</div>
      <br />
      <button onClick={onClickRetry}>Retry</button>
    </div>
  );
}

export default errorComponent;