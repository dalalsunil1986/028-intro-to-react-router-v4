import React from 'react'

class ProductDetails extends React.Component {
  render() {
    return <div>
      <h1>Product details page</h1>
      { this.props.match.params.id }
    </div>
  }
}

export default ProductDetails
