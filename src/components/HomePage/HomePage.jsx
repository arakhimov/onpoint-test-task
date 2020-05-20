import React, { Component } from 'react';
import './HomePage.css';

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
      </div>
    )
  }
}