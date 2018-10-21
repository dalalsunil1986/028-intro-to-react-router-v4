import React from 'react'

class ProductsPage extends React.Component {
  render() {
    return <div>
      <h1>Product page for { this.props.match.params.id }</h1>
    </div>
  }
}

export default ProductsPage
