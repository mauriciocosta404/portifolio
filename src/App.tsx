import React, { useState } from 'react';  
import NavBar from './components/navBar';
import Hero from './components/hero';
import Analytics from './components/analytics';
import Newsletter from './components/newsletter';
import Tecnologies from './components/tecnologies';
import Footer from './components/footer';
import Contact from './components/contact';

function App() {
  const [nav, setNav] = useState(false);
  return (
    <div>
      <NavBar nav={nav} setNav={setNav} />
      <Hero nav={nav} setNav={setNav} />
      <Analytics nav={nav} setNav={setNav} />
      <Newsletter nav={nav} setNav={setNav} />
      <Tecnologies nav={nav} setNav={setNav} />
      <Contact nav={nav} setNav={setNav} />
      <Footer nav={nav} setNav={setNav} />
    </div>
  );
}

export default App;
