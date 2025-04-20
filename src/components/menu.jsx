import React, { useState } from 'react';
import espressoImg from '../assets/espresso.png';
import capuccinoImg from '../assets/capuccino.png';
import boloImg from '../assets/bolo.png';

const Menu = () => {
  // Estado para controlar o carrinho
  const [carrinho, setCarrinho] = useState([]);

  // Função para adicionar um item ao carrinho
  const adicionarAoCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
    alert(`${item.nome} foi adicionado ao seu carrinho!`);
  };

  return (
    <section id="menu" className="section">
      <h2>Nosso Cardápio</h2>

      <div className="menu-grid">
        <div className="menu-card">
          <img src={espressoImg} alt="Café Espresso" />
          <h3>Café Espresso</h3>
          <p>R$ 6,00</p>
          <button onClick={() => adicionarAoCarrinho({ nome: 'Café Espresso', preco: 6 })}>
            Adicionar ao Carrinho
          </button>
        </div>

        <div className="menu-card">
          <img src={capuccinoImg} alt="Capuccino" />
          <h3>Capuccino</h3>
          <p>R$ 8,00</p>
          <button onClick={() => adicionarAoCarrinho({ nome: 'Capuccino', preco: 8 })}>
            Adicionar ao Carrinho
          </button>
        </div>

        <div className="menu-card">
          <img src={boloImg} alt="Bolo de Chocolate" />
          <h3>Bolo de Chocolate</h3>
          <p>R$ 5,00</p>
          <button onClick={() => adicionarAoCarrinho({ nome: 'Bolo de Chocolate', preco: 5 })}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      {/* Exibir o número de itens no carrinho */}
      <div className="carrinho-info">
        <h3>Itens no Carrinho: {carrinho.length}</h3>
      </div>
    </section>
  );
};

export default Menu;
