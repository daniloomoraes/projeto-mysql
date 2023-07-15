import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

import axios from "axios";

const Editar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const paramValue = searchParams.get('id');
  const [formData, setFormData] = useState({
    nome: '',
    valor: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/api/teste/item/${paramValue}`)
    .then(resp => {
      setFormData({
        nome: resp.data[0].nome,
        valor: resp.data[0].valor
      });
    })
    .catch(error => {
      console.error(error);
    });
  }, [paramValue]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedItem = {
      nome: formData.nome,
      valor: formData.valor
    };
    axios.put(`http://localhost:3001/api/teste/item/edit/${paramValue}`, updatedItem)
    .then(response => {
      alert('Item alterado com sucesso!');
      navigate('/');
    })
    .catch(error => {
      console.error('Error updating item:', error.response.data);
    });
  };

  return (
    <>
      <h1>Editar</h1>
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

export default Editar;
