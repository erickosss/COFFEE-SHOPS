import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Seu e-mail" required />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Sua mensagem" required />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;