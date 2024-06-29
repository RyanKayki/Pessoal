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
        <img src="eu/amigos.jpg" alt="Ryan Kayki e amigos" />
        <div className="more">
          <p><strong>Olá! Eu sou Ryan Kayki e esses são meus amigos, sou um estudante e tenho 17 anos, sou apaixonado por Desenvolvimento de Sistemas, especializado em desenvolvimento full-stack. Atualmente, meu foco está no back-end, onde passo a maior parte do meu tempo explorando e aprendendo frameworks na linguagem Python, que é minha verdadeira paixão.</strong></p>
          <p><strong>Abaixo vou deixar alguns dos meus projetos que fiz e minhas redes sociais caso queiram trocar uma ideia. Obrigado.</strong></p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
