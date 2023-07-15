import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Adicionar = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: '',
    valor: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      nome: formData.nome,
      valor: formData.valor
    };

    axios.post('http://localhost:3001/api/teste/add', newItem)
    .then(response => {
      alert('Item adicionado com sucesso!');
      navigate('/');
    })
    .catch(error => {
      console.error('Error adding item:', error.response.data);
    });

    setFormData({
      nome: '',
      valor: ''
    });
  };

  return (
    <>
      <h1>Adicionar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </label>
        <label>
          Valor:
          <input
            type="text"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );

};

export default Adicionar;
