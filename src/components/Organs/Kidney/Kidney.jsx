import React from 'react';
import './Kidney.css';
import kidney from '../../../images/kidney.png';

export const Kidney = ( { size } ) => {
  return (
    <div style = { size } className="Kidney">
      <img src = { kidney } alt="" className="Kidney__image"/ >
    </div>
  )
}