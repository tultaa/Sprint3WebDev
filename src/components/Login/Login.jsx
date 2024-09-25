import './Login.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      navigate('/account'); // Redireciona se o usuário já estiver logado
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = storedUser.find(user => user.username === username && user.password === password);

    if (foundUser) {
      setSuccessMessage('Login realizado com sucesso! Redirecionando...');
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
      setTimeout(() => {
        navigate('/account');
      }, 1500);
    } else {
      setErrorMessage('Usuário ou senha incorretos.');
    }
  };

  return (
    <main className="login-container">
      <section className="login-section">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            className="login-input"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            className="login-input"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">Entrar</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
        <p className="signup-message">
          Ainda não tem conta? <Link to="/signup">Cadastre-se</Link>
        </p>
      </section>
    </main>
  );
};

export default Login;