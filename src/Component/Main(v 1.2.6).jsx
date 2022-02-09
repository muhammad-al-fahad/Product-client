import React, { Component } from 'react';
import Menu from './Menu(v 2.2.3)';
import Detail from './Detail(v 1.2.3)';
import Header from './Header(v 2.1.0)';
import Footer from './Footer(v 1.0.1)';
import About from './About(v 1.0.0)'
import Contact from './Contact(v 2.0.1)';
import Home from './Home(v 1.0.1)';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../Redux/Creators(v 1.1.0)';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())}

});

class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
  } 

  render(){

    const HomePage = () => {
      return(
          <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <Detail 
            dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
            isLoading={this.props.dishes.isLoading}
            ErrMess={this.props.dishes.errMess} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment={this.props.addComment} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));