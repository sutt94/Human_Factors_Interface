import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home.js';
import JobRelated from './jobrelated.js';

const Main = () => (

  <main>

    <Switch>

      <Route exact path='/' component={Home}/>

      <Route exact path='/JobRelated' component={JobRelated}/>


    </Switch>

  </main>

)

export default Main;
