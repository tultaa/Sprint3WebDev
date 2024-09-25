// src/components/Events/Events.jsx
import React from 'react';
import './Events.css';

const Events = () => {
  return (
    <main>
      <section id="events">
        <h2>Próximos Eventos</h2>
        <p>Acompanhe os próximos eventos da Fórmula E...</p>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Local</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12 de Julho, 2024</td>
              <td>Autódromo Hermanos Rodríguez</td>
              <td>Cidade do México, México</td>
            </tr>
            <tr>
              <td>26 de Julho, 2024</td>
              <td>Brooklyn Street Circuit</td>
              <td>Nova York, EUA</td>
            </tr>
            <tr>
              <td>9 de Agosto, 2024</td>
              <td>Tempelhof Airport Street Circuit</td>
              <td>Berlim, Alemanha</td>
            </tr>
            <tr>
              <td>23 de Agosto, 2024</td>
              <td>Paris Street Circuit</td>
              <td>Paris, França</td>
            </tr>
            <tr>
              <td>30 de Agosto, 2024</td>
              <td>Autodromo Nazionale Monza</td>
              <td>Monza, Italia</td>
            </tr>
            <tr>
              <td>13 de Setembro, 2024</td>
              <td>Baku City Circuit</td>
              <td>Baku, Azerbaijão</td>
            </tr>
            <tr>
              <td>20 de Setembro, 2024</td>
              <td>Marina Bay Street Circuit</td>
              <td>Singapore, Singapura</td>
            </tr>
            <tr>
              <td>18 de Outubro, 2024</td>
              <td>Circuit of the Americas</td>
              <td>Texas, Estados Unidos</td>
            </tr>
            <tr>
              <td>25 de Outubro, 2024</td>
              <td>Autodromo Hermanos Rodriguez</td>
              <td>Cidade do México, México</td>
            </tr>
            <tr>
              <td>1 de Novembro, 2024</td>
              <td>Autodromo Jose Carlos Pace</td>
              <td>São Paulo, Brasil</td>
            </tr>
            <tr>
              <td>21 de Novembro, 2024</td>
              <td>Las Vegas Street Circuit</td>
              <td>Las Vegas, Estados Unidos</td>
            </tr>
            <tr>
              <td>29 de Novembro, 2024</td>
              <td>Losail International Circuit</td>
              <td>Doha, Qatar</td>
            </tr>
            <tr>
              <td>6 de Dezembro, 2024</td>
              <td>Yas Marina Circuit</td>
              <td>Abu Dhabi, Abu Dhabi Emirate</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Events;
