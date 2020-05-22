import React from 'react';
import './Beta.css';
import beta from '../../../images/beta.png';

export const Beta = ( { size } ) => {
  return (
    <div style = { size } className="Beta">
      <img src = { beta } alt="" className="Beta__image"/ >
    </div>
  )
}