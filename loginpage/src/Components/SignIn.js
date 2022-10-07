import React, { Component } from 'react'
import {Container,Row,Col,InputGroup,Form,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";




export default class SignIn extends Component {

constructor(){
    super();
    this.state = {
        email:'',
        password:'',
        sigin:{email:'',password:''}
    }
}


onChangehandler = (e)=>{
   this.setState({[e.target.name]:e.target.value})
}

OnsubmitData = ()=>{
  if(this.state.email===this.state.sigin.email && this.state.password===this.state.sigin.password){
    window.location.pathname = '/profile'
  }
}


componentDidMount(){
 
 let data = JSON.parse(localStorage.getItem('users'))
 if(data){
  let email = data[0].email
  let password = data[0].password
  this.setState({sigin:{email:email,password:password}})
 }
}


  render() {
    return (
        <Container>
        <Row className='bg-light mt-5'>
          <Col></Col>
          <Col>
           <h2>Sigin In</h2>
         

            <InputGroup className="mb-3 mt-5">

                <Form.Control
                 placeholder='email'
                aria-label="Default"
                name='email'
                onChange={(e)=>this.onChangehandler(e)}
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="mb-3">

                <Form.Control
                placeholder='password'
                aria-label="Default"
                name='password'
                onChange={(e)=>this.onChangehandler(e)}
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <Button variant="primary" onClick={()=>this.OnsubmitData()} style={{marginRight:'10px'}}  >Sign In</Button>
            <Link to='/signup' >Do not have an account</Link>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}
