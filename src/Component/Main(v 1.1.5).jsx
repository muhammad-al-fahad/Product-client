import React, { Component } from 'react';
import Menu from './Menu(v 2.2.2)';
import Detail from './Detail(v 1.2.1)';
import Header from './Header(v 2.1.0)';
import Footer from './Footer(v 1.0.1)';
import About from './About(v 1.0.0)'
import Contact from './Contact(v 2.0.1)';
import Home from './Home(v 1.0.0)';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
  render(){

    const HomePage = () => {
      return(
          <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <Detail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    }

    const Aboutus = () =>{
      return(
        <About leaders = {this.props.leaders} />
      );
    }

  return (
    <div>
    <Header />
    <Switch>
      <Route path = "/home" component = {HomePage} />
      <Route exact path = "/menu" component = {() => <Menu dishes = {this.props.dishes}/>} />
      <Route path='/menu/:dishId' component={DishWithId} />
      <Route exact path='/contactus' component={Contact} />
      <Route exact path = '/aboutus' component = {Aboutus} />
      <Redirect to="/home" />
    </Switch>
    <Footer />
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps)(Main));