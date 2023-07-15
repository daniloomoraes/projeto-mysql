import React, { useEffect, useState } from 'react';
import axios from "axios";

const Lista = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/teste')
      .then(resp => {
        setData(resp.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Lista</h1>
      <div>
        {data.map(item => (
          <div key={item.id}>{item.nome}</div>
        ))}
      </div>
    </>
  );

};

export default Lista;
