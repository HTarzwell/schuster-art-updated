import React from 'react';
import { Button, Checkbox, Form, Input, TextArea, Transition, Message } from 'semantic-ui-react';
import emailjs from 'emailjs-com';

class Contact extends React.Component {

  serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  userId = process.env.REACT_APP_EMAILJS_USER_ID;

  state = {
    name: '',
    email: '',
    subjectLine: '',
    messageBody: '',
    subscribe: true,
    successVisible: false,
    errorVisible: false,
  }

  handleChangeFirstName = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleChangeEmail = event => {
    this.setState({
      email: event.target.value
    })
  }

  handleChangeSubject = event => {
    this.setState({
      subjectLine: event.target.value
    })
  }

  handleChangeMessage = event => {
    this.setState({
      messageBody: event.target.value
    })
  }

  handleChangeSubscriberStatus = event => {
    this.setState({
      subscribe: event.target.value
    })
  }

  handleSubmit (event) {
    emailjs.send(this.serviceId, this.templateId, {
      from_name: this.state.name,
      to_name: "Schuster Art",
      message: this.state.messageBody,
      reply_to: this.state.email,
    }, this.userId).then(res => {
      this.setState({
        name: '',
        email: '',
        subjectLine: '',
        messageBody: '',
        subscribe: true,
        successVisible: true
      })
    })
    .catch(err => {
      this.setState({
        errorVisible: true
      })
    })
  }

  render() {
    return (
      <div className="contact">
        <div className="contact-form">
          <h2>CONTACT US</h2>
          <Form id="contact-form-semantic" onSubmit={this.handleSubmit.bind(this)}>
            <Form.Field
              id='form-input-control-name'
              control={Input}
              label='Name'
              required={true}
              value={this.state.name}
              onChange={this.handleChangeFirstName.bind(this)}
            />
            <Form.Field
              id='form-input-control-error-email'
              control={Input}
              label='Email'
              required={true}
              value={this.state.email}
              onChange={this.handleChangeEmail.bind(this)}
            />
            <Form.Field
              id='form-input-control-subject'
              control={Input}
              label='Subject'
              value={this.state.subjectLine}
              onChange={this.handleChangeSubject.bind(this)}
            />
            <Form.Field
              id='form-input-control-message'
              control={TextArea}
              label='Message'
              required={true}
              value={this.state.messageBody}
              onChange={this.handleChangeMessage.bind(this)}
            />
            <Form.Field>
              <Checkbox checked={this.state.subscribe} onChange={this.handleChangeSubscriberStatus} label='Sign up for our newsletter' />
            </Form.Field>
            <Button size="large" type='submit' value="Send">Submit</Button>
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
          </Form>
        </div>
        <div className="contact-image">
          <img src={require('./contact_default.png')} alt='abstract artwork piece'/>
        </div>
      </div>
    )
  }
}

export default Contact
