import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Home from './components/home';
import Menu from './components/menu';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    const hora = new Date().getHours();
    let saudacao = '';

    if (hora < 12) {
      saudacao = 'Bom dia ☀️';
    } else if (hora < 18) {
      saudacao = 'Boa tarde ☕';
    } else {
      saudacao = 'Boa noite 🌙';
    }

    setMensagem(`${saudacao}, seja bem-vindo ao Coffee Shops Tia Rosa!`);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div
            id="mensagem-bemvindo"
            style={{
              fontSize: "1.2rem",
              marginBottom: "20px",
              fontWeight: "500",
              textAlign: "center"
            }}
          >
            <h1>{mensagem}</h1>
          </div>
        </section>

        <Home />
        <Menu />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
