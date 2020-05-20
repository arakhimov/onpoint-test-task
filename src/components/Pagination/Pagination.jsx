import React, { Component } from 'react';
import './Pagination.css';

export class Pagination extends Component {

  handleChange = (event) => {
    this.props.history.push(`/${event.target.value}`);
  }

  render() {
    return (
    <div className="Pagination">
      <input type="radio" name="point" value="" className="Pagination__input" checked = { this.props.history.location.pathname === '/' } onChange = {this.handleChange} />
      <input type="radio" name="point" value="basis" className="Pagination__input" checked = { this.props.history.location.pathname === '/basis' } onChange = {this.handleChange} />
      <input type="radio" name="point" value="chain" className="Pagination__input" checked = { this.props.history.location.pathname === '/chain' } onChange = {this.handleChange} />
    </div>)
  }
}