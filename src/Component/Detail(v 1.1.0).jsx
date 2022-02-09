import { Card, CardText, CardImg, CardTitle, CardBody } from 'reactstrap';

function RrenderDish({dish}){
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

  function RenderComments({comments}){
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

  const Detail = (props) => {
      const detail = props.dish
      if(detail == null){
          return(<div></div>)
      }else{
      return(
          <div className='row'>
            <RrenderDish dish = {detail}/>
            <RenderComments comments={detail.comments}/>
          </div>
      );
      }
  }


export default Detail;