import React, { Component } from 'react';
import { actions } from 'react-redux-form';
import Menu from './Menu(v 2.2.4)';
import Detail from './Detail(v 1.3.5)';
import Header from './Header(v 2.1.0)';
import Footer from './Footer(v 1.0.1)';
import About from './About(v 1.0.0)'
import Contact from './Contact(v 2.0.2)';
import Home from './Home(v 1.1.2)';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../Redux/Creators(v 1.3.1)';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
});

class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  } 

  render(){

    const HomePage = () => {
      return(
          <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
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
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment} />
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
    <TransitionGroup>
    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
    <Switch location={this.props.location}>
      <Route path = "/home" component = {HomePage} />
      <Route exact path = "/menu" component = {() => <Menu dishes = {this.props.dishes}/>} />
      <Route path='/menu/:dishId' component={DishWithId} />
      <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
      <Route exact path = '/aboutus' component = {Aboutus} />
      <Redirect to="/home" />
    </Switch>
    </CSSTransition>
    </TransitionGroup>
    <Footer />
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));