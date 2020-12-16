import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes, basename } from './router';
import { useLocation } from 'react-router-dom';
import './App.css';

export default function App() {
  debugger;

  useLocation();
  // React.useEffect(() => {
  //   // ga.send(['pageview', location.pathname]);
  //   console.log('location变化了', location);
  // }, [location]);

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
