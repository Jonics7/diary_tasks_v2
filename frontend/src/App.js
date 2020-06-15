import React from 'react';
import Header from './Components/Header';
import './App.sass'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Detail from './Pages/Detail/Detail';


function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route
            render = { props => <Detail {...props} /> }
            path="/project/:id" />


        </Switch>

      </div>
    </Router>
  );
}

export default App;
