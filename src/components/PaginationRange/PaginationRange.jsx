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
    // console.log(this.state.year);
    return(
      <input type="range" min={ 1988 } max={ 2016 } value = { this.state.year } onChange = { this.handleOnChange } className="PaginationRange" />
    )
  }
}