import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../src/pages/Home';

const Index = ({ pathname }) => {
  switch (pathname) {
    default:
      return <Home />;
  }
};

let pathname = window.location.pathname;

ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

window.addEventListener('popstate', () => {
  pathname = window.location.pathname;
});