import React from 'react';
import './ChainPage2009.css';
import { IcePieces } from '../IcePieces/IcePieces';
import { Beta } from '../Organs/Beta/Beta';
import { Kidney } from '../Organs/Kidney/Kidney';
import { Lipid } from '../Organs/Lipid/Lipid';
import { Brain} from '..//Organs/Brain/Brain';
import { Liver } from '../Organs/Liver/Liver';
import { Muscle } from '../Organs/Muscle/Muscle';
import chain2009_1 from '../../images/chain2009_1.png';
import chain2009_2 from '../../images/chain2009_2.png';
import chain2009_3 from '../../images/chain2009_3.png';
import chain2009_4 from '../../images/chain2009_4.png';

export const ChainPage2009 = () => {

  const icePiecesPosition = {
    first: {bottom: '0%', left: '60%'},
    second: {top: '30%', left: '35%'},
    third: {top: '11%', left: '50%'}
  };

  const organIconSize = {  width: '62px', height: '62px' };

  return (
    <div className="ChainPage2009">
      <h1 className="ChainPage2009__header">Смертельный октет</h1>
      <IcePieces position = { icePiecesPosition } />
      <div className="ChainPage2009__chains">
        {/* первый ряд */}
        <div className="ChainPage2009__wrapper ChainPage2009__wrapper_top-row">
          <div className="ChainPage2009__noImage-wrapper">
            <span className="ChainPage2009__noImage-digit">2</span>
            <span className="ChainPage__noImage-text ChainPage__noImage-text_left">Инкретиновый эффект</span>
          </div>
          <div className="ChainPage2009__organ-container ChainPage2009__organ-container_top">
            <span className="ChainPage2009__description ChainPage2009__description_top"><span className="ChainPage2009__description-count">1<br /></span> &beta;-клетки</span>
            <Beta size = { organIconSize } />
          </div>
          <div className="ChainPage2009__noImage-wrapper">
            <span className="ChainPage2009__noImage-digit">3</span>
            <span className="ChainPage__noImage-text ChainPage__noImage-text_right">Дефект &alpha;-клеток</span>
          </div>
        </div>
        {/* второй ряд */}
        <div className="ChainPage2009__wrapper ChainPage2009__wrapper_center-row">
          <div className="ChainPage2009__organ-container ChainPage2009__organ-container_left">
            <span className="ChainPage2009__description ChainPage2009__description_left"><span className="ChainPage2009__description-count">8 </span>Почки</span>
            <Kidney size = { organIconSize } />
          </div>
          <span className="ChainPage2009__text">Гипергликемия</span>
          <div className="ChainPage2009__organ-container ChainPage2009__organ-container_right">
            <span className="ChainPage2009__description ChainPage2009__description_right"><span className="ChainPage2009__description-count">4 </span>Жировые клетки</span>
            <Lipid size = { organIconSize } />
          </div>
        </div>
        {/* третий ряд */}
        <div className="ChainPage2009__wrapper ChainPage2009__wrapper_bottom-row">
          <div className="ChainPage2009__organ-container ChainPage2009__organ-container_bottom">
            <span className="ChainPage2009__description ChainPage2009__description_bottom"><span className="ChainPage2009__description-count">7 </span>Головной мозг</span>
            <Brain size = { organIconSize } />
          </div>
          <div className="ChainPage2009__organ-container ChainPage2009__organ-container_bottom">
            <span className="ChainPage2009__description ChainPage2009__description_bottom"><span className="ChainPage2009__description-count">6</span><br />Печень</span>
            <Liver size = { organIconSize } />
          </div>
          <div className="ChainPage2009__organ-container ChainPage2009__organ-container_bottom">
            <span className="ChainPage2009__description ChainPage2009__description_bottom"><span className="ChainPage2009__description-count">5</span><br />Мышцы</span>
            <Muscle size = { organIconSize } />
          </div>
        </div>
        {/* Стрелки */}
        <img src = { chain2009_1 } alt="" className="ChainPage2009__image-arrow ChainPage2009__image-arrow_first"/>
        <img src = { chain2009_1 } alt="" className="ChainPage2009__image-arrow ChainPage2009__image-arrow_second"/>
        <img src = { chain2009_1 } alt="" className="ChainPage2009__image-arrow ChainPage2009__image-arrow_third"/>
        <img src = { chain2009_2 } alt="" className="ChainPage2009__image-arrow ChainPage2009__image-arrow_fourth"/>
        <img src = { chain2009_3 } alt="" className="ChainPage2009__image-arrow ChainPage2009__image-arrow_fifth"/>
        <img src = { chain2009_4 } alt="" className="ChainPage2009__image-arrow ChainPage2009__image-arrow_sixth"/>
        <img src = { chain2009_4 } alt="" className="ChainPage2009__image-arrow ChainPage2009__image-arrow_seventh"/>
        <img src = { chain2009_4 } alt="" className="ChainPage2009__image-arrow ChainPage2009__image-arrow_eighth"/>
      </div>
    </div>
  )
}