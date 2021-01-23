import React,{useState} from 'react';
import {
  BrowserRouter, 
  Switch, 
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Painting from './Component/Painting';
import Quiling from './Component/Quiling';
import Shop from './Component/Shop';
import Render from './Component/Render';
import NavBar from './Component/NavBar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>

        <NavBar/>
      <Switch>
        <Route path='/home'  component={Home}/>
        <Route path='/painting'  component={Painting}/>
        <Route path='/quiling' render={props =>  <Quiling {...props}/>}/>
        <Route path='/shop' component={Shop}/>
        <Redirect strict from="/" to="/home" />
        <Redirect to="/" />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
