import { Container, Switch, withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Definitions from './components/Definitions/Definitions';
import Header from './components/Header/Header';

function App() {
  const [datas, setDatas] = useState([])
  const [category, setCategory] = useState('fr')
  const [theme, setTheme] = useState(false)
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

  const ThemeSwitch = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: theme ? "#fff" : "#282c34",
        color: theme ? "black" : "white",
        transition: "all 0.5s linear",
      }}
    >
      <Container className="container" maxWidth="md">
        <div className="switch">
          <span>{theme ? 'Dark' : 'Light'} Mode</span>
          <ThemeSwitch checked={theme} onChange={() => {setTheme(!theme)}} />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          theme={theme}
        />
        {datas && (<Definitions
          word={word}
          datas={datas}
          category={category}
          theme={theme}
        />)}
      </Container>
    </div>
  );
}

export default App;
