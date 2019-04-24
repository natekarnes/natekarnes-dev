import React from 'react';
import './App.css';
import Home from '../src/pages/Home';


const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />

    </div>
  </Router>
);

render(<App />, document.getElementById('root'));