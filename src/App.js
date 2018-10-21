import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './pages/landing'

class App extends Component {
  render() {
    return <Switch>
      <Route path={`/`} component={Landing} />
    </Switch>
  }
}

export default App
