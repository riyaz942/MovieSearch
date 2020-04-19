import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import ListingPage from 'Pages/listingPage';
import DetailsPage from 'Pages/detailsPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ListingPage} />
      <Route exact path="/details/:id?" component={DetailsPage} />
    </Switch>
  )
}

export default Routes;