import React, { useState } from 'react';
import axios from "axios";

const MyForm = () => {

  const [formData, setFormData] = useState({
    nome: '',
    valor: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const newItem = {
      nome: formData.nome,
      valor: formData.valor
    };

    axios.post('http://localhost:3001/api/teste/add', newItem)
    .then(response => {
      console.log('Item added successfully');
      console.log('Updated list of items:', response.data);
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
  );
};

export default MyForm;
