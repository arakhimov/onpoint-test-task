import React from 'react';
import './ChainPage2016.css';
import { IcePieces } from '../IcePieces/IcePieces';
import { Beta } from '../Organs/Beta/Beta';
import { Kidney } from '../Organs/Kidney/Kidney';
import { Lipid } from '../Organs/Lipid/Lipid';
import { Brain} from '..//Organs/Brain/Brain';
import { Liver } from '../Organs/Liver/Liver';
import { Muscle } from '../Organs/Muscle/Muscle';
import { Intestines } from '../Organs/Intestines/Intestines';
import { Immunity } from '../Organs/Immunity/Immunity';
import { Stomach } from '../Organs/Stomach/Stomach';
import chain2016_1 from '../../images/chain2016_1.png';
import chain2016_2 from '../../images/chain2016_2.png';
import chain2016_3 from '../../images/chain2016_3.png';
import chain2016_4 from '../../images/chain2016_4.png';
import chain2016_5 from '../../images/chain2016_5.png';
import chain2016_6 from '../../images/chain2016_6.png';
import chain2016_7 from '../../images/chain2016_7.png';
import chain2016_8 from '../../images/chain2016_8.png';
import chain2016_9 from '../../images/chain2016_9.png';
import chain2016_10 from '../../images/chain2016_10.png';
import chain2016_11 from '../../images/chain2016_11.png';
import chain2016_12 from '../../images/chain2016_12.png';
import chain2016_13 from '../../images/chain2016_13.png';
import chain2016_14 from '../../images/chain2016_14.png';
import chain2016_15 from '../../images/chain2016_15.png';
import chain2016_16 from '../../images/chain2016_16.png';
import chain2016_17 from '../../images/chain2016_17.png';
import chain2016_18 from '../../images/chain2016_18.png';
import chain2016_19 from '../../images/chain2016_19.png';
import chain2016_20 from '../../images/chain2016_20.png';
import chain2016_21 from '../../images/chain2016_21.png';


export const ChainPage2016 = () => {

  const icePiecesPosition = {
    first: {bottom: '0%', left: '70%'},
    second: {top: '26%', right: '-.6%'},
    third: {top: '13%', left: '66.5%'}
  };

  const organIconSizeSmall = {  width: '62px', height: '62px' };
  const organIconSizeLarge = {  width: '84px', height: '84px' };

  return (
    <div className="ChainPage2016">
      <h1 className="ChainPage2016__header">Звенья патогенеза СД2</h1>
      <IcePieces  position = { icePiecesPosition } />
      <div className="ChainPage2016__chains">
        {/* первый столбец */}
        <div className="ChainPage2016__wrapper ChainPage2016__wrapper_left-column">
          <div className="ChainPage2016__organ-container ChainPage2016__organ-container_left">
            <span className="ChainPage2016__description ChainPage2016__description_left">
              <span className="ChainPage2016__description-count">8</span> <br />Микрофлора<br />кишечника
            </span>
            <Intestines size = { organIconSizeSmall } />
          </div>
          <div className="ChainPage2016__organ-container ChainPage2016__organ-container_left">
            <span className="ChainPage2016__description ChainPage2016__description_left ChainPage2016__description_left-column">
              <span className="ChainPage2016__description-count">9</span><br />Нарушение иммунной регуляции/воспаление
            </span>
            <Immunity size = { organIconSizeSmall } />
          </div>
          <span className="ChainPage2016__text ChainPage2016__text_small">&darr;амилин</span>
          <div className="ChainPage2016__organ-container ChainPage2016__organ-container_left">
            <span className="ChainPage2016__description ChainPage2016__description_left">
              <span className="ChainPage2016__description-count">10<br /></span> Желудок
            </span>
            <Stomach size = { organIconSizeSmall } />
          </div>
        </div>
        {/* второй столбец */}
        <div className="ChainPage2016__wrapper ChainPage2016__wrapper_center-column">
          <div className="ChainPage2016__organ-container ChainPage2016__organ-container_center">
            <span className="ChainPage2016__description ChainPage2016__description_center"><span className="ChainPage2016__description-count">1</span> &beta;-клетки</span>
            <Beta size = { organIconSizeLarge } />
          </div>
          <div className="ChainPage2016__text-container">
            <span className="ChainPage2016__description ChainPage2016__description_left">
                <span className="ChainPage2016__description-count">2<br /></span>&darr;инкретинового эффекта
            </span>
            <span className="ChainPage2016__description ChainPage2016__description_right">
              <span className="ChainPage2016__description-count">3<br /></span> дефект &alpha;-клеток
              <span className="ChainPage2016__text ChainPage2016__text_small ChainPage2016__text_center-column">&uarr;глюкагон</span>
            </span>
          </div>
          <span className="ChainPage2016__text ChainPage2016__text_large">Гипергликемия</span>
          <div className="ChainPage2016__organ-container ChainPage2016__organ-container_left ChainPage2016__organ-container_center-column">
            <span className="ChainPage2016__description ChainPage2016__description_left">
              <span className="ChainPage2016__description-count">11</span><br />Почки
            </span>
            <Kidney size = { organIconSizeSmall } />
          </div>
        </div>
        {/* третий столбец */}
        <div className="ChainPage2016__third-column">
          <div className="ChainPage2016__organ-container ChainPage2016__organ-container_right ChainPage2016__organ-container_third-column">
            <span className="ChainPage2016__description ChainPage2016__description_right"><span className="ChainPage2016__description-count">7<br /></span> Головной мозг</span>
            <Brain size = { organIconSizeSmall } />
          </div>
          <div className="ChainPage2016__wrapper ChainPage2016__wrapper_right-column">
            <span className="ChainPage2016__text ChainPage2016__text_third-column">Инсулинорезистентность</span>
            <div className="ChainPage2016__organ-container ChainPage2016__organ-container_right">
              <span className="ChainPage2016__description ChainPage2016__description_right"><span className="ChainPage2016__description-count">6<br /></span> Печень</span>
              <Liver size = { organIconSizeSmall } />
            </div>
            <div className="ChainPage2016__organ-container ChainPage2016__organ-container_right">
              <span className="ChainPage2016__description ChainPage2016__description_right"><span className="ChainPage2016__description-count">5<br /></span> Мышцы</span>
              <Muscle size = { organIconSizeSmall } />
            </div>
            <div className="ChainPage2016__organ-container ChainPage2016__organ-container_right">
              <span className="ChainPage2016__description ChainPage2016__description_right"><span className="ChainPage2016__description-count">4<br /></span> Жировые клетки</span>
              <Lipid size = { organIconSizeSmall } />
            </div>
          </div>
        </div>
        {/* стрелки */}
        <img src = { chain2016_1 } alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_first"/>
        <img src = { chain2016_2 } alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_second"/>
        <img src = { chain2016_3 } alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_third"/>
        <img src = { chain2016_4 } alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_fourth"/>
        <img src = { chain2016_5 } alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_fifth"/>
        <img src = { chain2016_6} alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_sixth"/>
        <img src = { chain2016_7} alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_seventh"/>
        <img src = { chain2016_8} alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_eighth"/>
        <img src = { chain2016_9} alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_ninth"/>
        <img src = { chain2016_10} alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_tenth"/>
        <img src = { chain2016_11} alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_eleventh"/>
        <img src = { chain2016_12} alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_twelfth"/>
        <img src = { chain2016_13} alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_thirteenth"/>
        <img src = { chain2016_14} alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_fourteenth"/>
        <img src = { chain2016_15} alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_fifteenth"/>
        <img src = { chain2016_16} alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_sixteenth"/>
        <img src = { chain2016_16} alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_seventeenth"/>
        <img src = { chain2016_17} alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_eighteenth"/>
        <img src = { chain2016_18} alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_nineteenth"/>
        <img src = { chain2016_19} alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_twenty"/>
        <img src = { chain2016_20} alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_twentyOne"/>
        <img src = { chain2016_21} alt="" className="ChainPage2016__image-arrow ChainPage2016__image-arrow_twentyTwo"/>
      </div>
    </div>
  )
}