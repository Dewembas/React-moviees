import React from 'react';
import Menu from './Elements/Menu'

import MyFavorite from './pages/MyFavorite'

import PageNone from './pages/MoviePage'
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
