import React, { useEffect, useState } from 'react';
import axios from "axios";

function App() {

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
    <div>
      {data.map(item => (
        <div key={item.id}>{item.nome}</div>
      ))}
    </div>
  );
}

export default App;
