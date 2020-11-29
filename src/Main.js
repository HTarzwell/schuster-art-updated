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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Label, Container } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="App-header">
            <ul>
              <header>
                <div>
                  <div className="splashTitle">schuster</div>
                  <div className="splashSub">art consultancy</div>
                </div>
              </header>
              <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
              <li><NavLink exact activeClassName="active" to="/artists">Artists</NavLink></li>
              <li><NavLink exact activeClassName="active" to="/about">About</NavLink></li>
              <li><NavLink exact activeClassName="active" to="/contact">Contact</NavLink></li>
              <li><NavLink exact activeClassName="active" to="/favorites">Favorites</NavLink></li>
            </ul>
          </div>
          <div className="App-content">
            <Route exact path="/" component={Artists}/>
            <Route exact path="/artists" component={Artists}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/favorites" component={Favorites}/>
          </div>
          <div className="App-footer">
            <footer>
              <div className="footer-subscribe">
                <div class="ui action input">
                  <Label id="subscribe-label">Subscribe to our newsletter</Label>
                    <input type="text" placeholder="Enter your email" />
                    <button class="ui button">SIGN UP</button>
                  </div>
                </div>
              <div className="footer-info">
                <Container>
                  <Label ribbon color="black">Copyright &copy; 2019 Schuster Art Consultancy</Label>
                  <Label ribbon size="mini">Designed by Brent C. and developed and built by Leni T.</Label>
                </Container>
                <a href = "mailto: info@schusterartconsultancy.com">info@schusterartconsultancy.com</a>
              </div>
              <div className="footer-social">
                <FontAwesomeIcon className="fa-icon" icon={faInstagram} size="2x"/>
                <FontAwesomeIcon className="fa-icon" icon={faFacebook} size="2x"/>
                <FontAwesomeIcon className="fa-icon" icon={faTwitter} size="2x"/>
              </div>
            </footer>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
