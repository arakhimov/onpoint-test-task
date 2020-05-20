import React from 'react';
import './App.css';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { Root } from '../Root/Root';

const RootWithRouter = withRouter(Root);


export function App() {
  return (
      <Router>
        <RootWithRouter />
      </Router>
  );
}
