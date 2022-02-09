import React, { Component } from 'react';
import Menu from './Menu(v 2.2.1)';
import Header from './Header(v 2.0.0)';
import Footer from './Footer(v 1.0.1)';
import { DISHES } from '../Shared/dishes(v 2.0.0)';
import { PROMOTIONS } from '../Shared/promotions(v 1.0.0)';
import { COMMENTS } from '../Shared/comments(v 1.0.0)';
import { LEADERS } from '../Shared/leaders(v 1.0.0)';
import Contact from './Contact(v 1.0.0)';
import Home from './Home(v 1.0.0)';
import { Routes, Route, Navigate} from 'react-router';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      promotions : PROMOTIONS,
      leaders : LEADERS,
      comments : COMMENTS
    };
  }

  render(){

    const HomePage = () => {
      return(
          <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path = "/home" component = {HomePage} />
      <Route exact path = "/menu" component = {() => <Menu dishes = {this.state.dishes}/>} />
      <Route exact path='/contactus' component={Contact} />
      <Navigate to="/home" />
    </Routes>
    <Footer />
    </div>
  );
}
}

export default Main;