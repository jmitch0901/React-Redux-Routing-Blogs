import React, { Component } from 'react';
import PostsIndex from './posts-index';


export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
