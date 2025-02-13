import React from 'react';
import { useInView } from 'react-intersection-observer';

const Gallery = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
  <section id="gallery" ref={ref} className={inView ? 'slide-in-right' : ''}>
    <h2 className="titulo">
      MEUS <span>Projetos</span>
    </h2>
    <div className="projetos">
      <a href="https://ryankayki.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
        <img src="projetos/youtech.png" alt="Youtech" />
      </a>
      <a href="https://ryankayki.github.io/reclame-aqui/" target="_blank" rel="noopener noreferrer">
        <img src="projetos/reclame.png" alt="Suporte" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src="projetos/Manutencao.png" alt="Tio Carlos Concerta" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="em-breve">
        <span>Mais em breve...</span>
      </a>
    </div>
  </section>
  );
};

export default Gallery;
