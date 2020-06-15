import React from 'react';
import Header from './Components/Header';
import './App.sass'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';


function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Home />

        <Switch>

          <Route path="/">
            <Home />
          </Route>

          <Route path="project/">
            
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
