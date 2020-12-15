import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes, basename } from './router';
import { Button } from 'antd';
import './App.css';

export default class App extends React.Component {
  goHome = () => {
    console.log('home');
  };
  render() {
    return (
      <React.Fragment>
        <Button type="primary" onClick={this.goHome}>
          Home
        </Button>
        <BrowserRouter basename={basename}>{renderRoutes(routes)}</BrowserRouter>
      </React.Fragment>
    );
  }
}
