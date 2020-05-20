import React, { Component } from 'react';
import './BasisPage.css';

export class BasisPage extends Component {

  state = {
    startY: 0,
    finishY: 0
  } 

  handleDragStart = (event) => {
    this.setState({ startY: event.pageY });
  }

  handleDragEnd = (event) => {
    this.setState({ finishY: event.pageY}, () => {
      if (this.state.finishY - this.state.startY > 50) {
        this.props.history.push('/');
      }
      if (this.state.startY - this.state.finishY > 50) {
        this.props.history.push('/chain');
      }
    });
  }

  render() {
    return (
      <div draggable="true" onDragStart = { this.handleDragStart } onDragEnd = { this.handleDragEnd } className="BasisPage">
        <h1 className="BasisPage__header">Основа терапии - патогенез СД2</h1>
      </div>
    )
  }
}