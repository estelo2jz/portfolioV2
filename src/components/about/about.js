import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h1 id="about"></h1>
        <div className="about-flex">
          <div className="about-info">
            <h2>Estelo Abellanosa</h2>
            <h3>Junior Full Stack developer</h3>
            <h3>with React, Python, and JavaScript</h3>
            <div className="about-para">
              <p>
                  Innovative Full Stack Developer with 2 years of experience in building and maintaining websites. 
                  Proficient in HTML, SASS, JavaScript, Python, and React, plus modern libraries and frameworks. 
                  Passionate about usability and possess the knowledge and working with computer hardware.
                  I have attended Bottega tech <a href="https://bottega.tech">https://bottega.tech</a>, and <a href="https://www.udemy.com/">Udemy</a> courses on my free time.
                  I enjoy building projects with React, like this website for example, it's built on React.
              </p>
            </div>
          </div>

          <div className="skill-container">
            <h1>My skills</h1>
            <div className="skill-list">
              <ul>
                <div className="skill-red">
                  <li>HTML/SCSS/JavaScript</li>
                </div>
                  <li>Back end Database</li>
                  <li>Analytical Skills</li>
                  <li>Responsive Design</li>
                  <li>Computer Skills</li>
                  <li>Hardware Troubleshooting</li>
              </ul>
            </div>
          </div>
          {/* <div className="extra-info">
            <div className="extra-do">
              <h2>What i can do?</h2>
              <div>
                <p>I can build website from scratch.</p>
              </div>
            </div>
            <div className="extra-accom">
              <h2>What i can accomplish?</h2>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}
