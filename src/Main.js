import React, { Component } from 'react';
import './Main.css';
import About from './About/About'
import Artists from './Artists/Artists'
import Home from './Home'
import Contact from './Contact/Contact'
import Favorites from './Favorites/Favorites'
import {
  Route,
  NavLink,
  HashRouter,
  withRouter
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Label, Container, Icon } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

class Main extends Component {

  render() {
    return (
        <div className="App">
          <div className="App-header">
              <header>
                <div className="splashTitle">schuster</div>
                <div className="splashSub">art consultancy</div>
              </header>
              <ul>
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/about">About</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/contact">Contact</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/favorites">
                  Favorites
                  <Icon id="menu-heart" corner name="heart" color="red"/>
                </NavLink></li>
            </ul>
          </div>
          <div className="App-content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/artists/:artists" render={(artistSelected) => (
              <Artists artist={artistSelected}/>
            )} />
            <Route path="/contact" component={Contact}/>
            <Route path="/favorites" component={Favorites}/>
          </div>
            <div className="App-footer">
              <div className="footer-subscribe">
                <div className="subscription-label">
                  <p>Subscribe to our newsletter</p>
                </div>
                <div className="ui action">
                  <button className="ui button">SIGN UP</button>
                </div>
              </div>
              <div className="footer-info">
                <div>
                  <p id="copyright-info">Copyright &copy; 2021 Schuster Art Consultancy</p>
                </div>
                <a href="mailto: info@schusterartconsultancy.com">info@schusterartconsultancy.com</a>
              </div>
              <div className="footer-social">
                <a href="https://www.facebook.com/pages/category/Local-Business/Schuster-Art-Consultancy-328435110650312/">
                  <FontAwesomeIcon className="fa-icon" icon={faFacebook} size="2x"/>
                </a>
                <a href="schuster_art_consultancy">
                  <FontAwesomeIcon className="fa-icon" icon={faInstagram} size="2x"/>
                </a>
              </div>
            </div>
        </div>
    );
  }
}

export default withRouter(Main);
