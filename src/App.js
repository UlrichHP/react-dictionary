import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])

  const dictionaryApi = async() => {
    try {
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/plane')
      setData(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(data)

  useEffect(() => {
    dictionaryApi()
  }, [])

  return (
    <div className="App">
      React Dictionary
    </div>
  );
}

export default App;
