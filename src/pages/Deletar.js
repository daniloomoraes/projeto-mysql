import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

import axios from "axios";

const Deletar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const paramValue = searchParams.get('id');

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/teste/item/${paramValue}`)
    .then(resp => {
      setData(resp.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, [paramValue]);

  const handleRedirect = () => {
    axios.delete(`http://localhost:3001/api/teste/item/delete/${paramValue}`)
    .then(() => {
      alert('Item removido com sucesso!');
      navigate('/');
    })
    .catch(error => {
      console.error(error);
    });
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <>
      <h1>Deletar</h1>
      {data[0]?.nome ? (
        <>
          <p>Tem certeza que deseja excluir: <strong>{data[0].nome}</strong></p>
          <button onClick={handleGoBack}>Não</button>  
          <button onClick={handleRedirect}>Sim</button>
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default Deletar;
