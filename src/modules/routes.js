import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (<div>asdomasd</div>)
}

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/details/:id?" component={null} />
    </Switch>
  )
}

export default Routes;