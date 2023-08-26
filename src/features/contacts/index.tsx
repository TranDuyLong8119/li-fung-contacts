import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './Pages/ListPage';
import DetailsPage from './Pages/DetailsPage';

export default function Contacts() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}`}>
        <ListPage />
      </Route>
      <Route exact path={`${match.path}/:contactId`}>
        <DetailsPage />
      </Route>
    </Switch>
  );
}
