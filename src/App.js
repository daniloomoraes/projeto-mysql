// App.js or Routes.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Lista from './pages/Lista';
import Adicionar from './pages/Adicionar';
import Editar from './pages/Editar';
import Deletar from './pages/Deletar';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Lista</Link>
            </li>
            <li>
              <Link to="/adicionar">Adicionar</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Lista />} />
          <Route path="/adicionar" element={<Adicionar />} />
          <Route path="/editar" element={<Editar />} />
          <Route path="/deletar" element={<Deletar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
