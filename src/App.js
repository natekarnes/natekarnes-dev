import React from 'react';
import './App.css';
import Home from '../src/pages/Home';
// import About from '../src/pages/About';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <Link to="/about">About</Link> */}
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      {/* <Route path="/about" component={About} /> */}

    </div>
  </Router>
);

render(<App />, document.getElementById('root'));