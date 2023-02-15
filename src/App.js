import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Testimonials from './components/testimonials/Testimonials';
import Download from './components/download/Download';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';
import Plans from './components/plans/Plans';
import Benifits from './components/benifits/Benifits';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <Benifits />
      <About />
      <Plans />
      <Testimonials />
      <Download />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
