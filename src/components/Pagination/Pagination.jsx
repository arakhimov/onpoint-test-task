import React, { Component } from 'react';
import './Pagination.css';

export class Pagination extends Component {

  handleChange = (event) => {
    this.props.history.push(`/${event.target.value}`);
  }

  render() {
    return (
    <div className="Pagination">
      <input 
        id="first" 
        type="radio" 
        name="point" 
        value="" 
        className="Pagination__input Pagination__input_first" 
        checked = { this.props.history.location.pathname === '/' } 
        onChange = {this.handleChange} 
      />
      <input 
        id="second"
        type="radio"
        name="point"
        value="basis" 
        className="Pagination__input Pagination__input_second" 
        checked = { this.props.history.location.pathname === '/basis' } 
        onChange = {this.handleChange} 
      />
      <input 
        id="third" 
        type="radio" 
        name="point" 
        value="chain" 
        className="Pagination__input Pagination__input_third" 
        checked = { this.props.history.location.pathname === '/chain' } 
        onChange = {this.handleChange} 
      />
      <label htmlFor="first" className="Pagination__label Pagination__label_first" />
      <label htmlFor="second" className="Pagination__label Pagination__label_second" />
      <label htmlFor="third" className="Pagination__label Pagination__label_third" />
    </div>)
  }
}