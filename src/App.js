// App.js or Routes.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Lista from './pages/Lista';
import Adicionar from './pages/Adicionar';

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
              <Link to="/Adicionar">Adicionar</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Lista />} />
          <Route path="/adicionar" element={<Adicionar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
