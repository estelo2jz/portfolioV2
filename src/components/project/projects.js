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
        <div className="project-list">
          <div className="left-items">
            <div classname="project-items">
              <div className="items">
                <a href="https://terms-react.netlify.app/">
                  <img src={Terms} />
                </a>
                <h4>Term's of Saving</h4>
              </div>
            </div>
            <div classname="project-items">
              <div className="items">
                <a href="https://shoe-library.netlify.app/">
                  <img src={Shoe} />
                </a>
                <h4>Shoe Library</h4>
              </div>
            </div>
            <div classname="project-items">
              <div className="items">
                <a href="https://gummy-stickers.netlify.app/">
                  <img src={Sticker} />
                </a>
                <h4>Gummy Stickers</h4>
              </div>
            </div>
            <div classname="project-items">
              <div className="items">
                <a href="https://react-expense.netlify.app/">
                  <img src={Expense} />
                </a>
                <h4>Expense Tracker</h4>
              </div>
            </div>
          </div>

          <div className="right-items">
            <div classname="project-items">
              <div className="items">
                <a href="https://react-lyricsss.netlify.app/">
                  <img src={Lyrics} />
                </a>
                <h4>Lyric Finder</h4>
              </div>
            </div>
            <div classname="project-items">
              <div className="items">
                <a href="https://svelte-razors-store.netlify.app/">
                  <img src={Razors} />
                </a>
                <h4>Razors</h4>
              </div>
            </div>
            <div classname="project-items">
              <div className="items">
                <a href="https://svelte-budget-app.netlify.app/">
                  <img src={Budget} />
                </a>
                <h4>Budget Calculator</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
