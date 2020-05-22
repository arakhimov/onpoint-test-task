import React from 'react';
import './Immunity.css';
import immunity from '../../../images/immunity.png';

export const Immunity = ( { size } ) => {
  return (
    <div style = { size } className="Immunity">
      <img src = { immunity } alt="" className="Immunity__image"/ >
    </div>
  )
}