import React from 'react';
import Header from './Components/Header';
import './App.sass'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './Pages/Home/Home';


function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Home />
      </div>
    </Router>
  );
}

export default App;
