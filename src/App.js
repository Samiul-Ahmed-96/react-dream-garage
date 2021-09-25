import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(()=>{
    fetch("./vehicle.json")
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
  return (
    <div className="App">

    </div>
  );
}

export default App;
