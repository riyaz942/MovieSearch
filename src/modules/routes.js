import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import ListingPage from 'Pages/listingPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ListingPage} />
      <Route exact path="/details/:id?" component={null} />
    </Switch>
  )
}

export default Routes;