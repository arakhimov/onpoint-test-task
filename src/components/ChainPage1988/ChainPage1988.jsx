import React from 'react';
import './ChainPage1988.css';
import { IcePieces } from '../IcePieces/IcePieces';
import { Beta } from '../Organs/Beta/Beta';
import { Muscle } from '../Organs/Muscle/Muscle';
import { Liver } from '../Organs/Liver/Liver';
import chain1988_2 from '../../images/chain1988_2.png';
import chain1988_3 from '../../images/chain1988_3.png';
import chain1988_4 from '../../images/chain1988_4.png';
import chain1988_5 from '../../images/chain1988_5.png';
import chain1988_6 from '../../images/chain1988_6.png';
 
export const ChainPage1988 = () => {

  const icePiecesPosition = {
    first: {bottom: '1%', left: '.8%'},
    second: {top: '30%', left: '22%'},
    third: {top: '16%', left: '29.5%'}
  };

  const organIconSize = {  width: '84px', height: '84px' };
  
  return (
    <div className="ChainPage1988">
      <h1 className="ChainPage1988__header">Звенья патогенеза СД2</h1>
      <IcePieces position = { icePiecesPosition }/>
      <div className="ChainPage1988__chains">
        <div className="ChainPage1988__organ-container">
          <span className="ChainPage1988__description"><span className="ChainPage1988__description-count">1<br /></span> &beta;-клетки</span>
          <Beta size = { organIconSize } />
        </div>
        <div className="ChainPage1988__wrapper">
          <div className="ChainPage1988__organ-container">
            <span className="ChainPage1988__description"><span className="ChainPage1988__description-count">2<br /></span> Мышцы</span>
            <Muscle size = { organIconSize } />
          </div>
          <span className="ChainPage1988__text">Гипергликемия</span>
          <div className="ChainPage1988__organ-container">
            <span className="ChainPage1988__description"><span className="ChainPage1988__description-count">3</span> Печень</span>
            <Liver size = { organIconSize } />
          </div>
          <img src = { chain1988_2 } alt="" className="ChainPage1988__image-arrow ChainPage1988__image-arrow_first"/>
          <img src = { chain1988_3 } alt="" className="ChainPage1988__image-arrow ChainPage1988__image-arrow_second"/>
          <img src = { chain1988_4 } alt="" className="ChainPage1988__image-arrow ChainPage1988__image-arrow_third"/>
          <img src = { chain1988_5 } alt="" className="ChainPage1988__image-arrow ChainPage1988__image-arrow_fourth"/>
          <img src = { chain1988_6 } alt="" className="ChainPage1988__image-arrow ChainPage1988__image-arrow_fifth"/>
        </div>
      </div>
    </div>
  )
}