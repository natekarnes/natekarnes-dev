import React from 'react';
import './App.css';


const App = () => (
  <Router>
    <div>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

render(
  <App />,
  document.getElementById('root')
);

export default App;
