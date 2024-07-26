import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/contact.css';

function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact-container">
        <h1>Contact Us</h1>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <h2>Our Address</h2>
          <p>Dhanbad Jharkhand</p>
          <h2>Email</h2>
          <p>imprince.0107@gmail.com</p>
          <h2>Phone</h2>
          <p>(+91) 6204421818</p>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Contact;
