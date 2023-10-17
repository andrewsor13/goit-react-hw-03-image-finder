import React from 'react';
import styles from './Modal.module.css';

export default function Modal({ data, closeModal }) {
  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <img
        src={data.largeImageURL}
        className={styles.image}
        width="800"
        height="600"
        alt=""
      ></img>
      ;
    </div>
  );
}
