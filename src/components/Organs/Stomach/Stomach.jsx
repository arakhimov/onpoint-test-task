import React from 'react';
import './Stomach.css';
import stomach from '../../../images/stomach.png';

export const Stomach = ( { size } ) => {
  return (
    <div style = { size } className="Stomach">
      <img src = { stomach } alt="" className="Stomach__image"/ >
    </div>
  )
}