import React from 'react';
import Navbar from '../components/Navbar';
import Encabezado from '../components/Encabezado';
import SeccionIntro from '../components/SeccionIntro';
import SeccionProductosInicio from '../components/SeccionProductosInicio';
import SeccionRegistro from '../components/SeccionRegistro';
import SeccionGarantias from '../components/SeccionGarantias';
import Footer from '../components/Footer';
import '../css/Home.css';

function Home() {
  return (
    <>
      <Navbar />
      <Encabezado />
      <SeccionIntro />
      <SeccionProductosInicio />
      <SeccionRegistro />
      <SeccionGarantias />
      <Footer />
    </>
  );
}

export default Home;
