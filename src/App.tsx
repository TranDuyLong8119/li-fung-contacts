import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';

import { PageNotFound } from './components/Common';
import Contacts from './features/contacts';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/contacts" />} />
      <Route path="/contacts" component={Contacts} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default App;
