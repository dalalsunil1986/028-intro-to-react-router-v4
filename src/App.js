import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './pages/landing'
import AboutUs from './pages/about-us'

class App extends Component {
  render() {
    return <Switch>
      <Route exact path={`/`} component={Landing} />
      <Route exact path={`/about`} component={AboutUs} />
    </Switch>
  }
}

export default App
