import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";

const Deletar = () => {

  const location = useLocation();
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

  return (
    <>
      <h1>Deletar</h1>
      {data[0]?.nome ? (
        <p>Tem certeza que deseja excluir: <strong>{data[0].nome}</strong></p>
        
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default Deletar;
