import React, { Component } from 'react';
import Menu from './Menu(v 2.2.1)';
import Header from './Header(v 2.0.0)';
import Footer from './Footer(v 1.0.1)';
import { DISHES } from '../Shared/dishes(v 1.0.0)';
import Home from './Home(v 1.0.0)';
import { Routes, Route, Navigate} from 'react-router';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES
    };
  }

  render(){

    const HomePage = () => {
      return(
          <Home/>
      );
    }

  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path = "/home" component = {HomePage} />
      <Route exact path = "/menu" component = {() => <Menu dishes = {this.state.dishes}/>} />
      <Navigate to="/home" />
    </Routes>
    <Footer />
    </div>
  );
}
}

export default Main;