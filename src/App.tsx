import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes, basename } from './router';
import './App.css';

export default class App extends React.Component {
  goHome = () => {
    console.log('home');
  };
  render() {
    return (
      <BrowserRouter basename={basename}>
        {/* <Link to="/home">
          <Button type="primary">Home</Button>
        </Link>
        <Link to="/404">
          <Button type="primary">404</Button>
        </Link> */}
        {renderRoutes(routes)}
      </BrowserRouter>
    );
  }
}
