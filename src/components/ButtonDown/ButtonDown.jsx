import React from 'react';
import './ButtonDown.css';
import { Link } from 'react-router-dom';
import  arrow  from '../../images/home_1.png';

export const ButtonDown = ( { history } ) => {

  const nextPagePath = () => history?.location.pathname === '/onpoint-test-task/basis' ? '/onpoint-test-task/chain' : '/onpoint-test-task/basis';

  return (
    <div className="ButtonDown">
      <Link className = "ButtonDown__link" to = { nextPagePath() }>
        { 'Листайте вниз' }
        <img src = { arrow } alt="" className="ButtonDown__image"/>
      </Link>
    </div>
  )
}