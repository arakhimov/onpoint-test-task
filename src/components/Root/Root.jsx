import React, { Component } from 'react';
import './Root.css';
import { HomePage } from '../HomePage/HomePage';
import { BasisPage } from '../BasisPage/BasisPage';
import { ChainPage } from '../ChainPage/ChainPage';
import { Pagination } from '../Pagination/Pagination';
import { Route, Switch } from 'react-router-dom';

export class Root extends Component {

  changeStartUrl = () => this.props.history.push('/onpoint-test-task/home');
  
  render() {
    // при первой загрузке назначаем стартовой странице url home
    if (!/home|basis|chain/.test(this.props.history.location.pathname)) {
      this.changeStartUrl();
    }
    return(
      <div className="Root">
        <Pagination {...this.props} />
        <Switch>
          <Route path='/onpoint-test-task/home' render = { () => <HomePage {...this.props} /> } />
          <Route path='/onpoint-test-task/basis' render = { () =>  <BasisPage {...this.props} /> } />
          <Route path='/onpoint-test-task/chain' render = { () =>  <ChainPage {...this.props} /> } />
        </Switch>
      </div>
    )
  }
}