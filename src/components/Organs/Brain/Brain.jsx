import React from 'react';
import './Brain.css';
import brain from '../../../images/brain.png';

export const Brain = ( { size } ) => {
  return (
    <div style = { size } className="Brain">
      <img src = { brain } alt="" className="Brain__image"/ >
    </div>
  )
}