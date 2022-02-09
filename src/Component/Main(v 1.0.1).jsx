import React, { Component } from 'react';
import Menu from './Menu(v 2.2.1)';
import Dish from './Detail(v 1.1.0)';
import Header from './Header(v 1.0.0)';
import Footer from './Footer(v 1.0.0)';
import { DISHES } from '../Shared/dishes(v 1.0.0)';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish : null
    };
  }

  onSelectedDish(dishId){
    this.setState(
        {
        selectedDish : dishId
        }
    );
}

  render(){
  return (
    <div className="App">
    <Header />
    <Menu dishes = {this.state.dishes} onClick={(dishId) => this.onSelectedDish(dishId)}/>
    <Dish dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
    <Footer />
    </div>
  );
}
}

export default Main;