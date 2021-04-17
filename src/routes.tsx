import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'components'
import Home from './pages/home'
import { SinglePlayerGame } from './pages/single-player-game'
import Records from './pages/records'

function Routes(): JSX.Element {
  return (
    <Layout>
      <Switch>
        <Route path="/single-player-game">
          <SinglePlayerGame />
        </Route>
        <Route path="/records">
          <Records />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  )
}

export default Routes
