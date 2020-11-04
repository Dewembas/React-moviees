import React, {useState} from 'react';
import Menu from './Elements/Menu'
import MyAcount from './pages/mayAcount'
import MyFavorite from './pages/MyFavorite'

import PageNone from './pages/PageNone'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  return (
    <Router>
    <Switch>
      <Route exact path="/">
      <Menu />
        <PageNone 
         
        />
        
      </Route>
      <Route path="/MyAcount">
        <Menu />
        <MyAcount />
      </Route>
      <Route path="/MyFavorite">
        <Menu />
        <MyFavorite />
      </Route>
      <Route path="*">
        <Menu />
        <div>Path error: 404</div>
      </Route>
    </Switch>
</Router>
  );
}




export default App;
