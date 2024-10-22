import React from 'react';
import { useInView } from 'react-intersection-observer';

const Gallery = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="gallery" ref={ref} className={inView ? 'slide-in-right' : ''}>
      <h2 style={{ textAlign: 'center', paddingBottom: '40px' }}>Meus Projetos</h2>
      <div className="projetos">
        <a href="https://ryankayki.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
          <img src="projetos/youtech.png" alt="Descrição da imagem 1" />
        </a>
        <a href="https://ryankayki.github.io/reclame-aqui/" target="_blank" rel="noopener noreferrer">
          <img src="projetos/reclame.png" alt="Descrição da imagem 2" />
        </a>
        <img src="projetos/rabisco.png" alt="Descrição da imagem 3" />
      </div>
    </section>
  );
};

export default Gallery;
