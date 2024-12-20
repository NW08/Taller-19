import React from 'react';
import './AppSection.css'; // Asegúrate de tener un archivo CSS correspondiente

const AppSection = () => {
  return (
    <section className="container app">
      <div className="mobile">
        <h2 className="mobile__title">Descarga la aplicación</h2>
        <p className="mobile__description">
          Con nuestra app, puedes reservar una electrolinera en cuestión de minutos, además,
          puedes encontrar estaciones de carga cerca de ti y hacer un seguimiento de la duración
          de la batería de tu coche en tiempo real y mucho más.
        </p>
        <div className="mobile__buttons">
          <img src="./src/images/appstore.png" alt="AppStore" loading="lazy" />
          <img src="./src/images/googleplay.png" alt="Play Store" loading="lazy" />
        </div>
      </div>

      <div className="mobile__img">
        <img src="./src/images/Phone.svg" alt="CarMobile" loading="lazy" />
      </div>
    </section>
  );
};

export default AppSection;
