import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header_electro from './components/Header_electro'; // Ajusta la ruta si es necesario
import Footer from './components/Footer'; // Ajusta la ruta si es necesario
import Hero from './components/Hero';
import AppSection from './components/AppSection';

function App() {
  return (
    <BrowserRouter>
      <Header_electro />
      <Hero/>
      {/* Contenido dinámico según la ruta */}
      <Routes>
        <Route path="/nosotros" element={<div>Sección Nosotros</div>} />
        <Route path="/servicios" element={<div>Sección Servicios</div>} />
        <Route path="/contactos" element={<div>Sección Contactos</div>} />
      </Routes>
      <AppSection/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
