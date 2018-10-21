import React from 'react'
import { Link } from 'react-router-dom'

class ProductList extends React.Component {
  render() {
    return <div>
      <h1>Product listing</h1>
      <ul>
        <li><Link to={`/products/1`}>Product 1</Link></li>
        <li><Link to={`/products/2`}>Product 2</Link></li>
      </ul>
    </div>
  }
}

export default ProductList
