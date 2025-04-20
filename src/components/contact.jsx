import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => (
  <section id="contact" className="section">
    <h2>Contato</h2>
    <p>Email: contato@tiarosacoffee.com</p>
    <p>Instagram: <a href="https://instagram.com/coffeetirosa" target="_blank">@coffeetirosa</a></p>
    <ContactForm />
  </section>
);

export default Contact;