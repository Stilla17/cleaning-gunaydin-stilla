import React from 'react';
import Header from './components/Header';
import Service from './components/Service';
import ServiceTwo from './components/ServiceTwo';
import FormContact from './components/FormContact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Service />
      <ServiceTwo />
      <FormContact />
      <Footer />
    </div>
  );
}

export default App;
