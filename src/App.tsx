import React from 'react';  
import NavBar from './components/navBar';
import Hero from './components/hero';
import Analytics from './components/analytics';
import Newsletter from './components/newsletter';

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
    </div>
  );
}

export default App;
