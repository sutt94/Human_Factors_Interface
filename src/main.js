import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home.js';
import JobRelated from './jobrelated.js';
import Criminal from './criminal.js';
import Education from './education.js';
import Experience from './experience.js';
import References from './references.js';

const Main = () => (

  <main>

    <Switch>

      <Route exact path='/' component={Home}/>

      <Route exact path='/JobRelated' component={JobRelated}/>

      <Route exact path='/CriminalHistory' component={Criminal}/>

      <Route exact path='/EducationHistory' component={Education}/>

      <Route exact path='/WorkHistory' component={Experience}/>

      <Route exact path='/References' component={References}/>


    </Switch>

  </main>

)

export default Main;
