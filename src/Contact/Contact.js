import React from 'react';
import { Button, Checkbox, Form, Input, TextArea } from 'semantic-ui-react';
import emailjs from 'emailjs-com';

class Contact extends React.Component {

  state = {
    name: '',
    email: '',
    subjectLine: '',
    messageBody: '',
    subscribe: true
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
    emailjs.send("service_m28uzfo","sa_contact",{
      from_name: this.state.name,
      to_name: "Schuster Art",
      message: this.state.messageBody,
      reply_to: this.state.email,
    }, 'user_bnIPZmBdfhJCtZHvX6A7K').then(res => {
      console.log('Email successfully sent!')
    })
    .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  render() {
    return (
      <div className="contact">
        <div className="contact-form">
          <h2>CONTACT US</h2>
          <Form id="contact-form-semantic" onSubmit={this.handleSubmit.bind(this)}>
            <Form.Field
              id='name'
              control={Input}
              label='Name'
              required={true}
              value={this.state.name}
              onChange={this.handleChangeFirstName.bind(this)}
            />
            <Form.Field
              id='email'
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
