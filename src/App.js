import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'
// import Carousel from './Carousel/Carousel'
import About from './About/About'
import Artists from './Artists/Artists'
import Contact from './Contact/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <About />
        <Artists />
        <Contact />
        <header className="App-header">
          <h1>Schuster Art Consultancy</h1>
        </header>
      </div>
    );
  }
}

export default App;
