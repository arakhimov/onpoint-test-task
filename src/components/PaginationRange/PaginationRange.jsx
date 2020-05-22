import React, { Component } from 'react';
import './PaginationRange.css';

export class PaginationRange extends Component {
  state = {
    year: 2016
  }

  handleOnChange = (event) => {
    this.setState({ year: event.target.value });
    this.props.handleChange(event.target.value - this.state.year);
  }

  render() {

    const factor = 100 / (2016 - 1988);
    const totalPercent = 98.5;

    return(
      <div className="PaginationRange">
        <input type="range" min={ 1988 } max={ 2016 } value = { this.state.year } onChange = { this.handleOnChange } className="PaginationRange__input" />
        <div style = { { width: `${totalPercent - (2016 - this.state.year) * factor }%` } } className="PaginationRange__input-fill" />
        <div className="PaginationRange__date-wrapper">
          <span className="PaginationRange__date">1988</span>
          <span className="PaginationRange__date">2009</span>
          <span className="PaginationRange__date">2016</span>
        </div>
      </div>
    )
  }
}