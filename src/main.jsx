import React, { StrictMode } from 'react'; // Mantenha apenas 'React' e 'StrictMode' aqui
import ReactDOM from 'react-dom/client'; // Importar 'ReactDOM' diretamente
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
