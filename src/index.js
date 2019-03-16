import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';

const Index = ({ pathname }) => {
  switch (pathname) {
    case '/about':
      return <About />;
    default:
      return <Home />;
  }
};

let pathname = window.location.pathname;

ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

window.addEventListener('popstate', () => {
  pathname = window.location.pathname;
});