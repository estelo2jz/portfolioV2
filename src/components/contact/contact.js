import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <h1 id="contact"></h1>
        <div className="contact-flex">
          <div className="contact-content">
            <div className="contact-items">
              <h2>Contact Info</h2>
              <div className="contact-list">
                <ul>
                  <li>224-413-6392</li>
                  <li>estelo2jz@gmail.com</li>
                  <li>Beach Park, IL</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="contact-content">
            <div className="profile-items">
              <h2>Profile Links</h2>
              <div className="profile-links">
                <ul>
                  <a href="https://github.com/estelo2jz">github</a>
                  <a href="https://www.linkedin.com/in/estelo-abellanosa-83a335186/">linkedin</a>
                  <a href="https://www.facebook.com/estelo.abellanosa">facebook</a>
                  <a href="https://twitter.com/EsteloManitoba">twitter</a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
