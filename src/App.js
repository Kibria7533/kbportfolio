import React from 'react';
import Portfolio from './Portfolio';
import SkilsInterest from './Skils&Interest';
import Footer from './Footer';
import Sociallink from './Sociallink';
import Blog from './Blog';
import Projects from './Projects';
import About from './About';
import Home from './Home';
import Navigation from './Navigation'; 

function App() {
  return (
    <div>
    

      <Navigation />
      <Home />
      <About />
      <Projects />
      <SkilsInterest />
      <Blog />
      <Sociallink />
      <Footer />
    </div>

  );
}

export default App;
