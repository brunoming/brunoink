import React from 'react';
import logo from './logo.svg';
import './App.sass';
import Navigation from './component/navigation'
import IndexSectionHero from './module/index-section-hero';

function App() {
  return (
    <div className="app">
      <Navigation></Navigation>
      <main>
        <IndexSectionHero></IndexSectionHero>
      </main>
    </div>
  );
}

export default App;
