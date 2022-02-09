import {Component} from 'react';
import { Card, CardText, CardImg, CardImgOverlay, CardTitle, CardBody } from 'reactstrap';

class Detail extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedDish : this.props.detail
        }
    }

renderDish(dish){
    if(dish != null){
        return(
            <div className='col-12 col-md-5 m-1'>
         <Card>
             <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
         </Card>
         </div>
        );
    }else{
        return(<div></div>);          
    }
  }

  renderComments(comments){
      if(comments == null){
        return(<div></div>);  
      }else{
          const cmt = comments.map((comment) =>{
              return(
            <div className='conatiner'>
              <li key = {comment.id}>
               <p>{comment.comment}</p>
               <p>-- {comment.author}, &nbsp; {new Intl.DateTimeFormat('en-US', {
                   year : 'numeric',
                   month : 'short',
                   day : '2-digit'
               }).format(new Date(comment.date))}
               </p>
              </li>
            </div>
              );
          })
          return(
              <div className='col-12 col-md-5 m-1'>
                  <h4> Comments </h4>
                  <ul className='list-unstyled'>
                      {cmt}
                  </ul>
              </div>
          );
      }
  }

  render(){
      const detail = this.props.dish
      if(detail == null){
          return(<div></div>)
      }else{
         const item = this.renderDish(detail);
         const comment = this.renderComments(detail.comments)
      return(
          <div className='row'>
            {item}
            {comment}
          </div>
      );
      }
  }
}

export default Detail;