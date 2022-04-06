/*global chrome*/
// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>checking</h1>
      
      <Router>
        {/* <Routes>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Routes> */}
        <Home />
      </Router>
      {/* <Home /> */}
    </div>
  );
}


export default App;
