import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Skills from '../src/pages/Skills';
import Contact from '../src/pages/Contact';

const Index = ({ pathname }) => {
  switch (pathname) {
    case '/about':
      return <About />;
      case '/skills':
      return <Skills />;
      case '/contact':
      return <Contact />;
    default:
      return <Home />;
  }
};

let pathname = window.location.pathname;

ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

window.addEventListener('popstate', () => {
  pathname = window.location.pathname;
});