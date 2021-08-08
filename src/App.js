import { Container } from '@material-ui/core';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [data, setData] = useState([])
  const [category, setCategory] = useState('en')
  const [word, setWord] = useState('')

  const dictionaryApi = async() => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      setData(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(data)

  useEffect(() => {
    dictionaryApi()
  }, [word, category])

  return (
    <div className="App">
      <Container className="container" maxWidth="md">
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} />
      </Container>
    </div>
  );
}

export default App;
