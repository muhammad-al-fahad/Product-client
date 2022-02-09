import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './Component/Menu(v 2.1.0)'
import './App(v 1.0.0).css';
import { DISHES } from './Shared/dishes(v 1.0.0)';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES
    };
  }

  render(){
  return (
    <div className="App">
    <Navbar dark color = "primary">
    <div className='container'>
      <NavbarBrand href = "/"> E-Commerce </NavbarBrand>
    </div>
    </Navbar>
    <Menu dishes = {this.state.dishes}/>
    </div>
  );
}
}

export default App;
