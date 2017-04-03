// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { APP_NAME } from '../shared/config'
import Nav from './component/nav'
import HomePage from './component/page/home'
import HelloPage from './component/page/hello'
import NotFoundPage from './component/page/not-found'
import {
  HOME_ROUTE,
  HELLO_ROUTE,
} from '../shared/routes'

const App = () =>
  <div>
    <h1>{APP_NAME}</h1>
    <Nav />
    <Switch>
      <Route exact path={HOME_ROUTE} render={() => <HomePage />} />
      <Route path={HELLO_ROUTE} render={() => <HelloPage />} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>

export default App
