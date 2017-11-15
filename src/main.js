import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home.js';
import JobRelated from './jobrelated.js';
import Criminal from './criminal.js';

const Main = () => (

  <main>

    <Switch>

      <Route exact path='/' component={Home}/>

      <Route exact path='/JobRelated' component={JobRelated}/>

      <Route exact path='/CriminalHistory' component={Criminal}/>


    </Switch>

  </main>

)

export default Main;
