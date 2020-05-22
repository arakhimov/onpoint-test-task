import React from 'react';
import './Liver.css';
import liver from '../../../images/liver.png';

export const Liver = ( { size } ) => {
  return (
    <div style = { size } className="Liver">
      <img src = { liver } alt="" className="Liver__image"/ >
    </div>
  )
}