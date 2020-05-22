import React from 'react';
import './Lipid.css';
import lipid from '../../../images/lipid.png';

export const Lipid = ( { size } ) => {
  return (
    <div style = { size } className="Lipid">
      <img src = { lipid } alt="" className="Lipid__image"/ >
    </div>
  )
}