import React from 'react';
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

function Contact() {
  const iconStyle = {
    fontSize: '2.5rem', // Tamanho dos ícones
    color: '#FFF',      // Cor branca
    marginRight: '10px', // Espaçamento à direita para separação dos ícones
  };

  return (
    <div className="container2">
      <div className="profile">
        <img src="/eu/eu.png" alt="Minha Foto" />
        <div className="info">
          <h2>Esse fui eu, Obrigado por me conhecer 👋</h2>
          <h3>Desenvolvimento De Sistemas</h3>
        </div>
      </div>
      <div className="details">
        <div className="section">
          <h3>Redes Sociais:</h3>
          <p>Técnico De Hardware e Programador Full-Stack.</p>
        </div>
        <div className="social">
          <a href="https://www.instagram.com/ryan.kpssz/" target="_blank" rel="noopener noreferrer"><BsInstagram style={iconStyle} /></a>
          <a href="https://www.linkedin.com/in/ryankayki/" target="_blank" rel="noopener noreferrer"><SiLinkedin style={iconStyle} /></a>
          <a href="https://github.com/RyanKayki" target="_blank" rel="noopener noreferrer"><VscGithub style={iconStyle} /></a>
          <a href="mailto:Ryan.santos.senai@gmail.com" class="contact">Me Contate</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
