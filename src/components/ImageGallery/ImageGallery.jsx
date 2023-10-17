import React, { useEffect, useState } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { resourceApi } from 'api/api';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ searchValue }) {
  return (
    <ul>
      {searchValue?.map((item, index) => (
        <li key={index}>
          <ImageGalleryItem data={item} />
        </li>
      ))}
    </ul>
  );
}
