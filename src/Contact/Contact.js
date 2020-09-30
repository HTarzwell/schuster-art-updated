import React from 'react'

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-form">
          <h1>Interested in learning more?</h1>
          <label>First Name</label>
          <input type="text"/>
          <label>Last Name</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="email" />
          <label>Subject</label>
          <input type="text" />
          <label>Message</label>
          <input type="text" />
          <label>Sign Up For Our Newsletter</label>
          <input type="checkbox" />
        </div>
        <div className="contact-image">
          <img src={require('../About/founder_img.png')} alt='i am so sorry'/>
        </div>
      </div>
    )
  }
}

export default Contact
