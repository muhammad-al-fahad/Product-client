import React, { Component } from 'react';
import { Card, CardText, CardImg, CardTitle, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length; //value > 0
const rating = (len) => (val) => (val) && (val.length == len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class Comment extends Component{
    constructor(props) {
        super(props);


        this.state = {
            isOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));


    }

    toggleModal() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render(){
        return(
            <React.Fragment>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-comments fa-lg"></span> Submit Comment
                </Button>


                {/* commentform  Modal */}
                <Modal isOpen={this.state.isOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}> Submit Comment </ModalHeader>
                    <ModalBody>
                       
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                          
                            {/* rating */}
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12} >Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating"
                                        className="form-control"
                                        name="rating"
                                        id="rating"
                                        validators={{
                                            required, rating : rating(1)
                                        }}
                                    >
                                        <option>--- Rate ---</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            rating : 'Rating must be give!'
                                        }}
                                    />  
                                </Col>
                            </Row>


                            {/* author */}
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}> Your Name </Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less',
                                        }}
                                    />                                    
                                </Col>
                            </Row>




                            {/* comment */}
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        placeholder='Write Comment!'
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(12)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be minimum of 3 words',
                                        }}
                                    />  
                                </Col>

                            </Row>

                            {/* submit button */}
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>

                        </LocalForm>

                    </ModalBody>
                </Modal>


            </React.Fragment>
        );
    }
}

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
                      <Comment />
                  </ul>
              </div>
          );
      }
  }

  const Detail = (props) => {
      if(props.dish == null){
          return(<div></div>)
      }else{
      return(
          <div className='container'>
        <div className="row">
        <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
        </div>                
    </div>
          <div className='row'>
            <RrenderDish dish = {props.dish}/>
            <RenderComments comments={props.comments}/>
          </div>
          </div>
      );
      }
  }

export default Detail;