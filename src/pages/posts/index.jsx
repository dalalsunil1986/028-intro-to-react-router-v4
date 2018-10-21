import React from 'react'

class PostsPage extends React.Component {
  render() {
    return <div>
      <h1>{ this.props.match.params.title }</h1>
      <h3>Category: { this.props.match.params.category_id }</h3>
    </div>
  }
}

export default PostsPage
