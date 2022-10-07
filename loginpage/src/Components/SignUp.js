import React, { Component } from 'react'
import {Container,Row,Col,InputGroup,Form,Button} from 'react-bootstrap';

import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default class SignUp extends Component {

constructor(){
    super();
    this.state = {
        users:[],
        username:'',
        fullName:'',
        email:'',
        password:'',
    }
}


onChangehandler = (e)=>{
   this.setState({[e.target.name]:e.target.value})
}

OnsubmitData = ()=>{
    let user = { 
        username:this.state.username,
        fullName:this.state.fullName,
        email:this.state.email,
        password:this.state.password
    }
   
    if(this.state.username===''){
      this.notify('username must not empty')
    }
    if(this.state.fullName===''){
      this.notify('full Name must not empty')
    }
    if(this.state.password===''){
      this.notify('pasword must not empty')
    }
    if(this.state.email===''){
      this.notify('email must not empty')
    }

    if(this.state.username!=='' && this.state.fullName!=='' && this.state.password!=='' && this.state.email!==''){
      this.state.users.push(user)
      let usersArry = this.state.users
      this.setState({users:usersArry})
      localStorage.setItem('users',JSON.stringify(usersArry))
      window.location.pathname = '/profile'
    }
}

notify = (m) => toast(m);

  render() {
    return (
        <Container>
        <ToastContainer />
        <Row className='bg-light mt-5'>
          <Col></Col>
          <Col>
           <h2>Sigin Up</h2>
            <InputGroup className="mb-3 mt-3">
                
                <Form.Control
                placeholder='username'
                name='username'
                onChange={(e)=>this.onChangehandler(e)}
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="mb-3">

                <Form.Control
                 placeholder='fullname'
                aria-label="Default"
                name='fullName'
                onChange={(e)=>this.onChangehandler(e)}
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="mb-3">

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
            <Button variant="primary" onClick={()=>this.OnsubmitData()} style={{marginRight:'10px'}}    >Sign Up</Button>
            <Link to='/' >already have an account</Link>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}

