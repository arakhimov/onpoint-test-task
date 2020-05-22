import React, { Component } from 'react';
import './Root.css';
import { HomePage } from '../HomePage/HomePage';
import { BasisPage } from '../BasisPage/BasisPage';
import { ChainPage } from '../ChainPage/ChainPage';
import { Pagination } from '../Pagination/Pagination';
import { Route, Switch } from 'react-router-dom';

export class Root extends Component {
  
  render() {
    return(
      <div className="Root">
        <Pagination {...this.props} />
        <Switch>
          <Route exact path='/' render = { () => <HomePage {...this.props} /> } />
          <Route path='/basis' render = { () =>  <BasisPage {...this.props} /> } />
          <Route path='/chain' render = { () =>  <ChainPage {...this.props} /> } />
        </Switch>
      </div>
    )
  }
}