import React from 'react';

// import the components for the website
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css'

// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning other components, <Nav /> and <HelloReact/> from it.

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;