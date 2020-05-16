import React from 'react';
import styles from '../index.module.scss';

const emptyComponent = ({ titleEmptyMessage, emptyMessage }) => {
  return (
    <div className={styles.error_container}>
      <div className={styles.error_title_text}>{titleEmptyMessage}</div>
      <div className={styles.error_message_text}>{emptyMessage}</div>
    </div>
  );
}

export default emptyComponent;
