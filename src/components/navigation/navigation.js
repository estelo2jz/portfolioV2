import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation-container">
        <div class="navbar">
          <a href="#project" activeClassName="nav-link-active">Projects</a>
          <a href="#about" activeClassName="nav-link-active">About</a>
          <a href="#contact" activeClassName="nav-link-active">Contact</a>
        </div>
      </div>
    )
  }
}
