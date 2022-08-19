import React from 'react';

// import the components for the website
import Header from './components/Header';
import Nav from './components/Nav';
import Project from './components/Project';
import Footer from './components/Footer';
import HelloReact from './components/HelloReact';

// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning other components, <Nav /> and <HelloReact/> from it.

export default function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Project />
      <Footer />
      <HelloReact />
    </div>
  );
}

// export default App;