import React from 'react';
import './Hero.css'; // Asegúrate de tener un archivo CSS para este componente

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero__text">
        <h2 className="hero__title">
          <span className="hero__title--primary">SIENTE</span> EL PODER DEL FUTURO
        </h2>
        <div className="hero__buttons">
          <a href="#" className="button hero__button--primary">Más Información</a>
          <a href="#" className="button hero__button--secondary">Puntos de Carga</a>
        </div>
      </div>
      <div className="hero__img">
        <img src="./src/images/Car.png" alt="Car" />
      </div>
    </main>
  );
};

export default Hero;
