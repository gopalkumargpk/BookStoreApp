import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '60px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2>About Us</h2>
        <p>
          Welcome to our bookstore! We are passionate about books and dedicated to providing a diverse selection of titles to readers of all ages and interests. Our mission is to foster a love of reading and to create a welcoming space for book lovers to explore, discover, and connect.
        </p>
        <h2>Our Story</h2>
        <p>
          Our bookstore was founded in [Year] by [Founder's Name], a lifelong reader and book enthusiast. What started as a small, independent shop has grown into a beloved community hub where readers can find everything from the latest bestsellers to rare and out-of-print editions.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Diversity and Inclusion:</strong> We believe in the power of diverse voices and strive to feature books from a wide range of authors and perspectives.</li>
          <li><strong>Community:</strong> Our bookstore is more than just a place to buy books; it's a place to connect with fellow readers and engage in meaningful conversations.</li>
          <li><strong>Customer Service:</strong> We are committed to providing excellent service and personalized recommendations to help you find the perfect book.</li>
        </ul>
        <h2>Visit Us</h2>
        <p>
          We are located at [Address]. Stop by to browse our shelves, attend a book signing, or simply enjoy a quiet moment with a great book.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
