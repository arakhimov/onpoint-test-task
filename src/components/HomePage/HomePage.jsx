import React, { Component } from 'react';
import './HomePage.css';
import { ButtonDown } from '../ButtonDown/ButtonDown';

export class HomePage extends Component {

  state = {
    startY: 0,
    finishY: 0
  } 

  handleDragStart = (event) => {
    this.setState({ startY: event.pageY });
  }

  handleDragEnd = (event) => {
    this.setState({ finishY: event.pageY}, () => {
      if (this.state.startY - this.state.finishY > 50) {
        this.props.history.push('/basis');
      }
    });
  }

  render() {
    return (
      <div draggable="true" onDragStart = { this.handleDragStart } onDragEnd = { this.handleDragEnd } className="HomePage">
        <h1 className="HomePage__header">Всегда ли цели терапии СД2 на поверхности?</h1>
        <div className="HomePage__animation HomePage__animation_first">
          <i className="HomePage__animation-circle HomePage__animation-circle_first" />
        </div>
        <div className="HomePage__animation HomePage__animation_second">
          <i className="HomePage__animation-circle HomePage__animation-circle_second" />
        </div>
        <div className="HomePage__animation HomePage__animation_third">
          <i className="HomePage__animation-circle HomePage__animation-circle_third" />
        </div>
        <div className="HomePage__animation HomePage__animation_fourth">
          <i className="HomePage__animation-circle HomePage__animation-circle_fourth" />
        </div>
        <ButtonDown />
      </div>
    )
  }
}