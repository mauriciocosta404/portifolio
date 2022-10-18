import React from 'react';  
import NavBar from './components/navBar';
import Hero from './components/hero';
import Analytics from './components/analytics';
import Newsletter from './components/newsletter';
import Tecnologies from './components/tecnologies';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Tecnologies/>
      <Footer/>
    </div>
  );
}

export default App;
