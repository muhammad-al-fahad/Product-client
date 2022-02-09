import React, { Component } from 'react';
import Main from './Component/Main(v 1.4.9)';
import './App(v 1.1.0).css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Redux/Configure(v 2.0.2)';

const store = ConfigureStore();

class App extends Component {

  render(){
  return (
    <Provider store = { store } >
    <BrowserRouter>
    <div className="App">
    <Main/>
    </div>
    </BrowserRouter>
    </Provider>
  );
}
}

export default App;
