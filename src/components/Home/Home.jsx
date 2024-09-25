// src/components/Home/Home.jsx
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="home-container">
      <h1 className="home-title">Bem-vindo à Fórmula E: A Corrida Elétrica</h1>
      <h2 className="home-subtitle">Descubra a emoção das corridas elétricas</h2>
      <Link to="/login" className="home-login-button">Faça seu Login</Link>
      <div className="home-image-container">
        <img src="/images/mahindra22.png" alt="Imagem Grande" className="home-large-image" />
      </div>
    </main>
  );
};

export default Home;
