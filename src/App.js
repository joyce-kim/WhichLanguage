import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing';
import Questionnaire from './pages/Questionnaire';
import Result from './pages/Result';

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/question/:id" component={Questionnaire} />
        <Route exact path="/result/:id" component={Result} />
      </Switch>
    </div>
  </Router>;

export default App;