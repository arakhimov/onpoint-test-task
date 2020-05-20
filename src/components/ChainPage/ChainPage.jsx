import React, {  Component} from 'react';
import './ChainPage.css';
import { ChainPage1988 } from '../ChainPage1988/ChainPage1988';
import { ChainPage2009 } from '../ChainPage2009/ChainPage2009';
import { ChainPage2016 } from '../ChainPage2016/ChainPage2016';
import { PaginationRange } from '../PaginationRange/PaginationRange';

export class ChainPage extends Component {

  state = {
    startY: 0,
    finishY: 0,
    moveX: 0,
  } 

  handleDragStart = (event) => {
    this.setState({ startY: event.pageY });
  }

  handleDragEnd = (event) => {
    this.setState({ finishY: event.pageY}, () => {
      if (this.state.finishY - this.state.startY > 50) {
        this.props.history.push('/basis');
      }
    });
  }

  handleChange = (moveValue) => {
    console.log(moveValue);
    this.setState((state) => ({moveX: state.moveX - moveValue * 10 }));
  }

  render(){
    return (
      <div  className="ChainPage" >
        <PaginationRange  handleChange = { this.handleChange } />
        <div 
          className="ChainPage__slider" 
          style = {{ transform: `translateX(-${this.state.moveX}%)` }} 
          draggable="true" 
          onDragStart = { this.handleDragStart } 
          onDragEnd = { this.handleDragEnd }
        >
          <ChainPage1988 />
          <ChainPage2009 />
          <ChainPage2016 />
        </div>
      </div>
    )
  }
}