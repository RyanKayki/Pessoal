import React from 'react';
import { useInView } from 'react-intersection-observer';

const Bio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className={inView ? 'slide-in' : ''}>
      <h2 style={{ paddingBottom: '40px', textAlign: 'center' }}>Sobre Mim</h2>
      <div className="me">
        <img src="profile/eu.jpg" alt="Ryan Kayki" height={490} className='photo-me'/>
        <div className="more">
        <p><strong>Olá, sou Ryan Kayki, um estudante de 18 anos e profissional de tecnologia. Tenho experiência em atendimento ao cliente, suporte técnico e manutenção de hardware. Sou formado em Desenvolvimento de Sistemas e atualmente estou cursando Mecatrônica Industrial no Senai, o que me permite integrar minha formação em programação com a área de automação.</strong></p>

        <p><strong>Ao longo da minha jornada, desenvolvi projetos utilizando Python, JavaScript, HTML, CSS e Flask, com um foco principal em criar soluções e automações para facilitar o dia a dia. Tenho grande interesse em utilizar a tecnologia para tornar o mundo mais prático e eficiente. Com uma sólida formação em programação orientada a objetos, estou sempre em busca de novos desafios, especialmente na área da automação.</strong></p>

        <p><strong>Abaixo, compartilho alguns dos meus projetos e redes sociais. Fique à vontade para entrar em contato e trocar ideias! Obrigado pela atenção!</strong></p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
