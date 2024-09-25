// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Events from './components/Events/Events';
import Gallery from './components/Gallery/Gallery';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup'; // Importando a tela de signup
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Account from './components/Account/Account'; // Importando a tela de conta

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Rota para a tela de signup */}
        <Route path="/account" element={<Account />} /> {/* Rota para a tela de conta */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
