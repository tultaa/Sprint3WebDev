import './Account.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); // Remove o usuário logado
    localStorage.removeItem('users'); // Remove todos os dados dos usuários
    navigate('/login');
  };

  if (!loggedInUser) {
    return <p>Você não está logado.</p>;
  }

  return (
    <main className="account-container">
      <section className="account-section">
        <h2>Minha Conta</h2>
        <p><strong>Usuário:</strong> {loggedInUser.username}</p>
        <p><strong>Email:</strong> {loggedInUser.email}</p>
        <button onClick={handleLogout}>Sair</button>
      </section>
    </main>
  );
};

export default Account;
