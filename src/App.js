import axios from "axios";

function App() {

  axios.get('http://localhost:3001/api/teste').then(resp => {
    console.log(resp);
  });
  
  return (
    <div>
      teste
    </div>
  );
}

export default App;
