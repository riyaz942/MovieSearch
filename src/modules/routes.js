import React, { Suspense } from 'react';
import { Switch, Route } from "react-router-dom";

const ListingPage = React.lazy(() => import('Pages/listingPage'));
const DetailsPage = React.lazy(() => import('Pages/detailsPage'));

const Routes = () => {
  /*
    Which everpage it opens first, this will load the other page in the background,
    if the user navigates later to that page the use will already have it loaded in the browser
  */
  import("Pages/listingPage").then(()=>{});
  import("Pages/detailsPage").then(()=>{});

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Route exact path="/" component={ListingPage} />
        <Route exact path="/details/:id?" component={DetailsPage} />
      </Switch>
    </Suspense>
  )
}

export default Routes;