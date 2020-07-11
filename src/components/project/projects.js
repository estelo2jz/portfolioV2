import React, { Component } from 'react';

import Terms from '../../assets/terms.png';
import Shoe from '../../assets/shoe.png'
import Sticker from '../../assets/sticker.png'
import Expense from '../../assets/expense.png'
import Lyrics from '../../assets/lyrics.png';
import Razors from '../../assets/razor.png';
import Budget from '../../assets/budget.png';

export default class Projects extends Component {
  render() {
    return (
      <div className="project-container">
        <h3 id="project"></h3>
        <div className="parent">
          {/* <div className="left-items"> */}
            <div className="card">
              <h4>Term's of Saving</h4>
              <p className="text">React</p>
              <div className="visual">
                <a href="https://terms-react.netlify.app/">
                  <img className="image" src={Terms} alt=""/>
                </a>
              </div>
            </div>
            <div className="card">
              <h4>Shoe Library</h4>
              <p className="text">React</p>
              <div className="visual">
                <a href="https://shoe-library.netlify.app/">
                  <img className="image" src={Shoe} alt=""/>
                </a>
              </div>
            </div>
            <div className="card">
              <h4>Gummy Stickers</h4>
              <p className="text">React</p>
              <div className="visual">
                <a href="https://gummy-stickers.netlify.app/">
                  <img className="image" src={Sticker} alt=""/>
                </a>
              </div>
            </div>
            <div className="card">
              <h4>Expense Tracker</h4>
              <p className="text">React</p>
              <div className="visual">
                <a href="https://react-expense.netlify.app/">
                  <img className="image" src={Expense} alt=""/>
                </a>
              </div>
            </div>
          {/* </div> */}

          {/* <div className="right-items"> */}
            <div className="card">
              <h4>Lyrics Finder</h4>
              <p className="text">React</p>
              <div className="visual">
                <a href="https://react-lyricsss.netlify.app/">
                  <img className="image" src={Lyrics} alt=""/>
                </a>
              </div>
            </div>
            <div className="card">
              <h4>Razors</h4>
              <p className="text">Svelte</p>
              <div className="visual">
                <a href="https://svelte-razors-store.netlify.app/">
                  <img className="image" src={Razors} alt=""/>
                </a>
              </div>
            </div>
            <div className="card">
              <h4>Budget Calculator</h4>
              <p className="text">Svelte</p>
              <div className="visual">
                <a href="https://svelte-budget-app.netlify.app/">
                  <img className="image" src={Budget} alt=""/>
                </a>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    )
  }
}
