import React from 'react';
import { useInView } from 'react-intersection-observer';

const Bio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
    {/* SOBRE MIM */}
    <section id="about" ref={ref} className={inView ? 'slide-in' : ''}>
      <h2 className="titulo">
          Sobre <span>Mim</span>
        </h2>
      <div className="me">
        <img src="profile/eu.jpg" alt="Ryan Kayki" height={490} className='photo-me'/>
        <div className="more">
        <p><strong><em>Olá, sou Ryan Kayki, um estudante de 18 anos e profissional de tecnologia. Tenho experiência em atendimento ao cliente, suporte técnico e manutenção de hardware. Sou formado em Desenvolvimento de Sistemas e atualmente estou cursando Mecatrônica Industrial no Senai, o que me permite integrar minha formação em programação com a área de automação.</em></strong></p>

        <p><strong><em>Ao longo da minha jornada, desenvolvi projetos, com um foco principal em criar soluções e automações para facilitar o dia a dia. Tenho grande interesse em utilizar a tecnologia para tornar o mundo mais prático e eficiente. Com uma sólida formação em programação orientada a objetos, estou sempre em busca de novos desafios, especialmente na área da automação.</em></strong></p>

        <p><strong><em>Abaixo, compartilho alguns dos meus projetos e redes sociais. Fique à vontade para entrar em contato e trocar ideias! Obrigado pela atenção!</em></strong></p>
        </div>
      </div>
    </section>

    {/* MINHAS STACKS */}
    <section id="stacks" ref={ref} className={inView ? 'slide-in' : ''}>
  <h2 className="titulo">
    Minhas <span>Stacks</span>
  </h2>
  <div className="stacks-grid">
    <div className="stack-item">
      <img height="50em" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    </div>
    <div className="stack-item">
      <img height="50em" src="https://img.shields.io/badge/next.js-20232A?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    </div>
    <div className="stack-item">
      <img height="50em" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
    </div>
    <div className="stack-item">
      <img height="45em" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" alt="JavaScript" />
    </div>
    <div className="stack-item">
      <img height="50em" src="https://img.shields.io/badge/GIT-E34F26?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
    </div>
    <div className="stack-item">
      <img height="50em" src="https://img.shields.io/badge/GITHUB-2D333B?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
    </div>
    <div className="stack-item">
      <img height="50em" src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows" />
    </div>
    <div className="stack-item">
      <img height="50em" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
    </div>
    <div className="stack-item">
      <img height="50em" src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" />
    </div>
    <div className="stack-item">
      <img height="50em" src="https://img.shields.io/badge/VERCEL-2D333B?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
    </div>
    <div className="stack-item">
      <img height="50em" src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VS Code" />
    </div>
  </div>
</section>

    </>
  );
};

export default Bio;