import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation-container">
        <div class="navbar">
          <a href="#project">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    )
  }
}
