import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';


function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section class="pt-5 contact-form">
      <div class="container">
      <h1 class="text-white body-title" data-testid="h1tag">Contact me</h1>
      </div>
      <form class="container p-3 mb-5 rounded contact-container" id="contact-form" onSubmit={handleSubmit}>
        <div class="row pb-1">
          <label class="text-white" htmlFor="name">Name:</label>
          <input type="text" name="name" controlId="ControlInput1" defaultValue={name} onBlur={handleChange} />
        </div>
        <div class="row">
          <label class="text-white" htmlFor="email">Email address:</label>
          <input type="email" controlId="ControlInput1" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div class="row pb-2">
          <label class="text-white" htmlFor="message">Message:</label>
          <textarea controlId="ControlInput1" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div class="text-white">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" class="btn btn-outline-light" data-testid="button">Dark</button>
      </form>


    </section>
  );
}

export default ContactForm;