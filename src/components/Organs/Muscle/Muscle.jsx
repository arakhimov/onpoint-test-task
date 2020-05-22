import React from 'react';
import './Muscle.css';
import muscle from '../../../images/muscle.png';

export const Muscle = ( { size } ) => {
  return (
    <div style = { size } className="Muscle">
      <img src = { muscle } alt="" className="Muscle__image"/ >
    </div>
  )
}