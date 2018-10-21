import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './pages/landing'
import AboutUs from './pages/about-us'
import Products from './pages/products'
import Posts from './pages/posts'

class App extends Component {
  render() {
    return <Switch>
      <Route exact path={`/`} component={Landing} />
      <Route exact path={`/about`} component={AboutUs} />
      <Route exact path={`/products/:id`} component={Products} />
      <Route exact path={`/posts/:category_id/:title`} component={Posts} />
    </Switch>
  }
}

export default App
