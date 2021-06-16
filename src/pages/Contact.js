import React from 'react';
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css'

function Contact() {
  return (
    <div class="container .p-3 col-sm-6 col-md-4">
      <h3>CONTACT</h3>
      <form id="contact" class="contact-form">
        <div>
          <label for="user">Name:</label>
          <input id="name" type="text" placeholder="First & Last Name"></input>
        </div>
        <div>
          <label for="email">Email:</label>
          <input id="email" type="text" placeholder="johndoe@example.com"></input>
        </div>
        <div>
          <label for="comment">Comment:</label>
          <textarea class="form-row" id="comment"
            placeholder="Let's Connect! Please leave a message!"></textarea>
        </div>
        <div class="d-grid gap-2 col-4 mx-auto">
          <button class="btn btn-secondary btn-sm" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;