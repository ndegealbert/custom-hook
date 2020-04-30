import React from 'react';
import './App.css';
import Beer from  './container/beer'
import Cookies from  './container/cookies'
import  Currots from './container/currot'

function App() {
  return (
    <div className="App">
      <Beer/>
      <Cookies/>
      <Currots /> 
    </div>
  );
}

export default App;
