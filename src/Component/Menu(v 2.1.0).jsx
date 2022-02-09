import {Component} from 'react';
import { Card, CardText, CardImg, CardImgOverlay, CardTitle, CardBody } from 'reactstrap';
import Dish from './Detail(v 1.0.0)'

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
         selectedDish : null
        };
    }
        
    onSelectedDish(dish){
        this.setState(
            {
            selectedDish : dish
            }
        );
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return(
                <div className='col-12 col-md-5 m-1'>
                 <Card key={dish.id} onClick={() => this.onSelectedDish(dish)}>
                    <CardImg width = '100%' src = {dish.image} alt = {dish.name}/>
                     <CardImgOverlay>
                         <CardTitle>
                             {dish.name}
                         </CardTitle>
                     </CardImgOverlay>
                 </Card>
                </div>
            );
        })
        return(
            <div className='container'>
                <div className='row'>
                        {menu}
                </div>
                <div className='col-12 col-md m-1'>
                <Dish dish = {this.state.selectedDish} />
                </div>
            </div>
        );
    }

}

export default Menu;