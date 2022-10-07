import React, { Component } from 'react'
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Profile from "./Components/Profile";

import { BrowserRouter,Route,Routes } from "react-router-dom";

export default class App extends Component {

  componentDidMount(){
    if( window.location.pathname === '/' ||  window.location.pathname === '/signup'){
    if(localStorage.getItem('users')){
      window.location.pathname = '/profile'
    }
    }
  }

  render() {
    return (
      <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={ <SignIn />} />
      <Route path='/signup' element={ <SignUp />} />
       <Route path='/profile' element={<Profile />} />
      </Routes>
      </BrowserRouter>
      </>
    )
  }
}

