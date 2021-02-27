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
  withRouter
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Icon, Modal, Button, Form, Input, Transition, Message, Popup } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import emailjs from 'emailjs-com';

class Main extends Component {

  serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  userId = process.env.REACT_APP_EMAILJS_USER_ID;

  state = {
    artistShowcase: null,
    footerModalOpen: false,
    subscriberEmail: null,
    successVisible: false,
    errorVisible: false,
  }

  toggleSubscriberModal = bool => {
    this.setState({
      footerModalOpen: bool
    })
  }

  handleChangeEmail = event => {
    this.setState({
      subscriberEmail: event.target.value
    })
  }

  handleSubmit (event) {
    emailjs.send(this.serviceId, this.templateId, {
      from_name: "subscriber",
      to_name: "Schuster Art",
      message: `please subscribe me to your newsletter: ${this.state.subscriberEmail}`,
      reply_to: this.state.subscriberEmail,
    }, this.userId).then(res => {
      this.setState({
        subscriberEmail: null,
        successVisible: true
      })
    })
    .catch(err => {
      this.setState({
        errorVisible: true
      })
    })
  }

  setArtistName = name => {
    this.setState({
      artistShowcase: name
    })
    console.log(this.state.artistShowcase, 'is artistShowcase')
  }

  render() {
    return (
        <div className="App">
          <div className="App-header">
                <header>
                <NavLink className="headerLink" to="/">
                  <div className="splashTitle">schuster</div>
                  <div className="splashSub">art consultancy</div>
                </NavLink>
                </header>
              <ul>
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/about">About</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div className="App-content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/artists/:artists" render={(artistSelected, headerName) => (
              <Artists onLoad={() => this.setArtistName(headerName)} artist={artistSelected}/>
            )} />
            <Route path="/contact" component={Contact}/>
            <Route path="/favorites" component={Favorites}/>
          </div>
            <div className="App-footer">
              <div className="footer-subscribe">
                <div className="subscription-label">
                  <p>Subscribe to our newsletter: </p>
                </div>
                <div className="ui action">
                  <Modal
                    basic
                    closeIcon
                    onOpen={() => this.toggleSubscriberModal(true)}
                    onClose={() => this.toggleSubscriberModal(false)}
                    open={this.state.footerModalOpen}
                    trigger={<button className="subscribe-button">SUBSCRIBE</button>}
                    >
                    <Modal.Header>Become a subscriber!</Modal.Header>
                    <Modal.Content>
                    <Form inverted id="contact-form-semantic" onSubmit={this.handleSubmit.bind(this)}>
                      <Form.Field
                        id='form-input-control-error-email'
                        control={Input}
                        label='Email'
                        required={true}
                        value={this.state.subscriberEmail}
                        onChange={this.handleChangeEmail.bind(this)}
                      />
                      <Button size="large" type='submit' value="Send">Submit</Button>
                    </Form>
                    <Transition visible={this.state.successVisible} animation='scale' duration={500}>
                      <Message success>
                        <Message.Header>Success!  Your message is on its way.</Message.Header>
                        <Message.Content>Thank you for reaching out to us.</Message.Content>
                      </Message>
                    </Transition>
                    <Transition visible={this.state.errorVisible} animation='scale' duration={500}>
                      <Message negative>
                        <Message.Header>Oops, something went wrong</Message.Header>
                        <Message.Content>Please try again!  It's not you, it's us.</Message.Content>
                      </Message>
                    </Transition>
                    </Modal.Content>
                  </Modal>
                </div>
              </div>
              <div className="footer-info">
                <div>
                  <p id="copyright-info">Copyright &copy; 2021 Schuster Art Consultancy</p>
                </div>
                <a href="mailto: info@schusterartconsultancy.com">info@schusterartconsultancy.com</a>
              </div>
              <div className="footer-social">
                <a href="https://www.facebook.com/pages/category/Local-Business/Schuster-Art-Consultancy-328435110650312/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="fa-icon" icon={faFacebook} size="2x"/>
                </a>
                <a href="schuster_art_consultancy" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="fa-icon" icon={faInstagram} size="2x"/>
                </a>
                <Popup trigger={<Icon circular name='file code outline'/>}>
                  Developed and built by Leni Tarzwell
                </Popup>
                <Popup trigger={<Icon circular name='fire'/>}>
                  Designed by Brent C
                </Popup>
              </div>
            </div>
        </div>
    );
  }
}

export default withRouter(Main);
