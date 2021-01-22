import React,{useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Painting from './Component/Painting';
import Quiling from './Component/Quiling';
import Shop from './Component/Shop';
import Render from './Component/Render';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route 
          path="/painting" 
          render=
            {props => 
              <Render render=
                {
                  (file, error, handleFile)=> <Painting {...props} file={file} error={error} handleFile={handleFile}/> 
                }
              />
            }
          />
          <Route/>
          <Route 
          path="/quiling" 
          render=
            {props => 
              <Render render=
                {
                  (file, error, handleFile)=> <Quiling {...props} file={file} error={error} handleFile={handleFile}/> 
                }
              />
            }
          />
          <Route/>
          {/* <Route 
          path="/quiling" 
          render=
            {props => 
              <Render render=
                {
                  (file, error, handleFile)=> <Quiling {...props} file={file} error={error} handleFile={handleFile}/> 
                }
              />
            }
          />
          <Route/> */}
          {/* <Route path='/quiling' component={Quiling} /> */}
        <Route path='/shop' component={Shop}/>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
