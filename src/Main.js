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
import { Button, Form } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

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
          <div className="App-footer">
            <footer>
              <div className="footer-subscribe">
                <Form id="footer-form">
                  <Form.Group>
                    <Form.Field
                      id='form-footer-input-control-email'>
                      <label>Subscribe to our newsletter</label>
                      <input placeholder="Email"/>
                      </Form.Field>
                    <Button type='submit' id='footer-submit-button'>SIGN UP</Button>
                  </Form.Group>
                </Form>
              </div>
              <div className="footer-info">
                <div>Copyright &copy; 2019 Schuster Art Consultancy</div>
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
