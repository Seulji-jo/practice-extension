import React, { useEffect } from 'react';
import {
  Router,
  getCurrent,
  getComponentStack,
  Link,
} from 'react-chrome-extension-router';
import './App.css';

import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import QnA from './components/QnA'

function App() {
  useEffect(() => {
    const { component, props } = getCurrent();
    console.log(
      component
        ? `There is a component on the stack! ${component} with ${props}`
        : `The current stack is empty so Router's direct children will be rendered`
    );
    const components = getComponentStack();
    console.log(`The stack has ${components.length} components on the stack`);
});
  return (
    <div className='App'>
      <nav>
        <Link component={Home}>Home</Link> | 
        <Link component={About}>About</Link> | 
        <Link component={Shop}>About</Link> | 
        <Link component={QnA} props={{ message: 'From HomePage' }}>Q&A</Link>
      </nav>
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
