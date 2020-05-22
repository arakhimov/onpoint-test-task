import React from 'react';
import './IcePieces.css';
import chain_1 from '../../images/chain_1.png';
import chain_2 from '../../images/chain_2.png';
import chain_3 from '../../images/chain_3.png';

export const IcePieces = ( { position } ) => {
  return (
    <div className="IcePieces">
      <img src = { chain_1 } style = { position.first } alt="" className="IcePieces__image IcePieces__image_first"/>
      <img src = { chain_2 } style = { position.second } alt="" className="IcePieces__image IcePieces__image_second"/>
      <img src = { chain_3 } style = { position.third } alt="" className="IcePieces__image IcePieces__image_third"/>
    </div>
  )
}