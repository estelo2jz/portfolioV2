import React from 'react';

import Navigation from './components/navigation/navigation';
import Projects from './components/project/projects';
import About from './components/about/about';
import Contact from './components/contact/contact';

import './styles/main.scss';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <div className="app-grid">
        <div>
          <Projects />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
