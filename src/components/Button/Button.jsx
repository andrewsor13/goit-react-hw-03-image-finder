import React from 'react';
import styles from './Button.module.css';

export default function Button({ onClick, content, type, icon, styleData }) {
  return (
    <button style={styleData} type={type} onClick={onClick}>
      {icon}
      {content}
    </button>
  );
}
