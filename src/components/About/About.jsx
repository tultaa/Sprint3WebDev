// src/components/About/About.jsx
import './About.css';
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main>
      <section id="about">
        <h2>Sobre Nós</h2>
        
        <div className="mission-section">
          <h3>Missão</h3>
          <p>
            A missão da Fórmula E é acelerar a transição global para uma mobilidade sustentável por meio de competições eletrizantes. 
            Nós unimos o melhor da tecnologia e da engenharia para mostrar ao mundo que o futuro da mobilidade já chegou, sem deixar de lado a emoção e o entretenimento das corridas.
          </p>
        </div>

        <div className="tech-section">
          <h3>Parceria com a Tech Mahindra</h3>
          <p>
            Nossa parceria com a <strong>Tech Mahindra</strong> nos permite ir além das pistas. Juntos, desenvolvemos soluções tecnológicas inovadoras, 
            mas também contribuem para um futuro mais sustentável, com foco em eficiência energética, conectividade avançada e inteligência artificial aplicada.
          </p>
        </div>

        <div className="differential-section">
          <h3>Nosso Diferencial</h3>
          <p>
            O que nos destaca? Nossa galeria visual! Capturamos os momentos mais incríveis de todas as temporadas, desde as corridas intensas até bastidores emocionantes. 
            Confira nossa <strong>Galeria de Fotos</strong> e testemunhe a energia e paixão que movem a Fórmula E.
          </p>
        </div>

        <div className="gallery-cta">
          <a className="btn-cta"><Link to="/gallery">Explore a Galeria</Link></a>
        </div>
      </section>
    </main>
  );
};

export default About;
