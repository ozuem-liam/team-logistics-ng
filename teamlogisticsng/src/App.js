import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// Components
import Home from './components/Home';
import RequestInfo from './components/form/RequestInfo';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/requestform" component={RequestInfo} />
          </Switch>
          </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
