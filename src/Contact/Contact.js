import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-form">
          <h2>Interested in an artist?</h2>
          <Form>
            <Form.Group inline>
              <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <label>Email</label>
              <input placeholder='Email Address' />
            </Form.Field>
            <Form.Field>
              <label>Subject</label>
              <input placeholder='Subject' />
            </Form.Field>
            <Form.Field>
              <label>Message</label>
              <input />
            </Form.Field>
            <Form.Field>
              <Checkbox label='Sign up for our newsletter' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </div>
        <div className="contact-image">
          <img src={require('../About/founder_img.png')} alt='i am so sorry'/>
        </div>
      </div>
    )
  }
}

export default Contact
