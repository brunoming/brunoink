import React from 'react';
import './App.sass';
import Navigation from './component/navigation'
import Welcome from './module/welcome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

AOS.init({
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
});

function App() {
  return (
    <div className="app">
      <Router>
          <Route path='/' exact render={() => {
            return <Welcome></Welcome>
          }} />
      </Router>
    </div>
  );
}

export default App;
