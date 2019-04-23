import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Other from './Other'

export default class Main extends React.Component {
  render () {
    return (
      <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/other' component={Other}/>
        </Switch>
      </main>
    )
  }
}
