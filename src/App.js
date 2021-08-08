import { Container } from '@material-ui/core';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Definitions from './components/Definitions/Definitions';
import Header from './components/Header/Header';

function App() {
  const [datas, setDatas] = useState([])
  const [category, setCategory] = useState('en')
  const [word, setWord] = useState('')

  const dictionaryApi = async() => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      setDatas(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dictionaryApi()
  }, [word, category])

  return (
    <div className="App">
      <Container className="container" maxWidth="md">
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} />
        {datas && (<Definitions word={word} datas={datas} category={category} />)}
      </Container>
    </div>
  );
}

export default App;
