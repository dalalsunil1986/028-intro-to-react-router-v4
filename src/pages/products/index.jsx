import React from 'react'
import { Switch, Route } from 'react-router-dom'

import List from './list'
import Single from './single'

class ProductsPage extends React.Component {
  render() {
    return <Switch>
      <Route exact path={`/products`} component={List} />
      <Route exact path={`/products/:id`} component={Single} />
    </Switch>
  }
}

export default ProductsPage
