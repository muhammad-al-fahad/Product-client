import React, { Component } from 'react';
import Main from './Component/Main(v 1.0.5)';
import './App(v 1.0.0).css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render(){
  return (
    <BrowserRouter>
    <div className="App">
    <Main/>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
