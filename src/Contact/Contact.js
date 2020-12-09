import React from 'react';
import { Button, Checkbox, Form, Input, TextArea } from 'semantic-ui-react'

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-form">
          <h2>CONTACT US</h2>
          <Form id="contact-form-semantic">
            <Form.Group widths='equal'>
              <Form.Field
                id='form-input-control-first-name'
                control={Input}
                label='First Name'
              />
              <Form.Field
                id='form-input-control-last-name'
                control={Input}
                label='Last Name'
              />
            </Form.Group>
            <Form.Field
              id='form-input-control-email'
              control={Input}
              label='Email'
            />
            <Form.Field
              id='form-input-control-subject'
              control={Input}
              label='Subject'
            />
            <Form.Field
              id='form-input-control-message'
              control={TextArea}
              label='Message'
            />
            <Form.Field>
              <Checkbox label='Sign up for our newsletter' />
            </Form.Field>
            <Button size="large" type='submit'>Submit</Button>
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
