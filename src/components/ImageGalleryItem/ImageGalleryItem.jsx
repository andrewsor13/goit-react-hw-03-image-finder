import React, { useState } from 'react';
import styles from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default function ImageGalleryItem({ data }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.imageContainer}>
      <img
        src={data.webformatURL}
        alt={data.tags}
        width={400}
        height={300}
        className={styles.image}
        onClick={openModal}
      />
      {showModal ? <Modal data={data} closeModal={closeModal} /> : null}
    </div>
  );
}
