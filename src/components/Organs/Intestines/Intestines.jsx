import React from 'react';
import './Intestines.css';
import intestines from '../../../images/intestines.png';

export const Intestines = ( { size } ) => {
  return (
    <div style = { size } className="Intestines">
      <img src = { intestines } alt="" className="Intestines__image"/ >
    </div>
  )
}