import React, { Component } from 'react';
import './BasisPage.css';
import { ButtonDown } from '../ButtonDown/ButtonDown';
import basis_1 from '../../images/basis_1.png';
import basis_2 from '../../images/basis_2.png';
import basis_3 from '../../images/basis_3.png';
import basis_4 from '../../images/basis_4.png';

export class BasisPage extends Component {

  state = {
    startY: 0,
    finishY: 0
  } 

  handleDragStart = (event) => {
    this.setState({ startY: event.pageY });
  }

  handleDragEnd = (event) => {
    // при смещении более чем на 50 единиц с нажатой левой клавишей мыши - переход на другую страницу
    this.setState({ finishY: event.pageY}, () => {
      if (this.state.finishY - this.state.startY > 50) {
        this.props.history.push('/onpoint-test-task/home');
      }
      if (this.state.startY - this.state.finishY > 50) {
        this.props.history.push('/onpoint-test-task/chain');
      }
    });
  }

  render() {
    return (
      <div draggable="true" onDragStart = { this.handleDragStart } onDragEnd = { this.handleDragEnd } className="BasisPage">
        <h1 className="BasisPage__header">Основа терапии - патогенез СД2</h1>
        <img src = { basis_1 } alt="" className="BasisPage__image BasisPage__image_first"/ >
        <img src = { basis_2 } alt="" className="BasisPage__image BasisPage__image_second"/ >
        <img src = { basis_3 } alt="" className="BasisPage__image BasisPage__image_third"/ >
        <img src = { basis_4 } alt="" className="BasisPage__image BasisPage__image_fourth"/ >
        <ButtonDown { ...this.props } />
      </div>
    )
  }
}