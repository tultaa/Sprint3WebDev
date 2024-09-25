// src/components/Signup/Signup.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Novo estado para confirmar a senha
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se o e-mail ou nome de usuário já existe
    const emailExists = users.some(user => user.email === email);
    const usernameExists = users.some(user => user.username === username);

    if (emailExists) {
      setError('Este e-mail já está cadastrado.');
      return;
    }

    if (usernameExists) {
      setError('Este nome de usuário já está cadastrado.');
      return;
    }

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    // Cria um novo usuário
    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    setSuccess('Cadastro realizado com sucesso!');
    setError('');
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword(''); // Limpa o campo de confirmar senha
  };

  return (
    <main className="signup-container">
      <section className="signup-section">
        <h2 className="signup-title">Cadastro</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          <label htmlFor="username">Usuário:</label>
          <input type="text" className="signup-input" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          
          <label htmlFor="email">E-mail:</label>
          <input type="email" className="signup-input" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          
          <label htmlFor="password">Senha:</label>
          <input type="password" className="signup-input" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          
          <label htmlFor="confirm-password">Confirmar Senha:</label>
          <input type="password" className="signup-input" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          
          <button type="submit" className="signup-button">Cadastrar</button>
          {error && <p className="error-message">{error}</p>}
          {success && (
            <div className="success-message-container">
              <p className="success-message">{success}</p>
              <Link to="/login" className="login-link">Fazer Login</Link>
            </div>
          )}
        </form>
      </section>
    </main>
  );
};

export default Signup;
