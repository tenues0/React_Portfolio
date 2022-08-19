import React from 'react';
import Nav from './components/Nav';
import HelloReact from './components/HelloReact';

// TODO: Add a comment explaining what this function is doing
// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning other components, <Nav /> and <HelloReact/> from it.


export default function App() {
  return (
    <div>
      <Nav />
      <HelloReact />
    </div>
  );
}

// export default App;