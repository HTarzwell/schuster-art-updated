import React, { Component } from 'react';
import './Main.css';
import About from './About/About'
import Artists from './Artists/Artists'
import Contact from './Contact/Contact'
import Favorites from './Favorites/Favorites'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="App-header">
            <header>
              <div>
                <div className="splashTitle">schuster</div>
                <div className="splashSub">art consultancy</div>
              </div>
            </header>
            <ul>
              <li><NavLink to="/">Artists</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/favorites">Favorites</NavLink></li>
            </ul>
          </div>
          <div className="App-content">
            <Route exact path="/" component={Artists}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/favorites" component={Favorites}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
