import React, { Component } from 'react';
import './Main.css';
import About from './About/About'
import Home from './Home'
import Contact from './Contact/Contact'
import Favorites from './Favorites/Favorites'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Label, Container, Icon } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="App-header">
              <header>
                <div className="splashTitle">schuster</div>
                <div className="splashSub">art consultancy</div>
              </header>
              <ul>
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/artists">Artists</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/about">About</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/contact">Contact</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/favorites">
                  Favorites
                  <Icon corner name="heart" color="red"/>
                </NavLink></li>
            </ul>
          </div>
          <div className="App-content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/artists" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/favorites" component={Favorites}/>
          </div>
            <footer>
              <div className="footer-subscribe">
                <div>
                    <div className="subscription-label">
                      <p>Subscribe to our newsletter</p>
                    </div>
                    <div className="ui action input signup-input">
                      <input type="text" placeholder="Enter your email" />
                      <button className="ui button">SIGN UP</button>
                    </div>
                  </div>
                </div>
              <div className="footer-info">
                <div>
                  <a id="copyright-info">Copyright &copy; 2021 Schuster Art Consultancy</a>
                  <a id="site-credit">Designed by Brent & Built by Leni</a>
                </div>
                <a href = "mailto: info@schusterartconsultancy.com">info@schusterartconsultancy.com</a>
              </div>
              <div className="footer-social">
                <FontAwesomeIcon className="fa-icon" icon={faInstagram} size="2x"/>
                <FontAwesomeIcon className="fa-icon" icon={faFacebook} size="2x"/>
                <FontAwesomeIcon className="fa-icon" icon={faTwitter} size="2x"/>
              </div>
            </footer>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
