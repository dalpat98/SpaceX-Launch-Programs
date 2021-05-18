import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
