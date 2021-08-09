import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import './Header.css'
import categories from '../../data/categories'

const Header = ({category, setCategory, word, setWord, theme}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: theme ? '#000' : '#fff'
      },
      type: theme ? 'light' : 'dark'
    }
  })

  const handleChange = (e) => {
    setCategory(e.target.value)
    setWord('')
  }

  return (
    <div className="header">
      <span className="title">{word ? word : 'Dictionnaire'}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Rechercher un mot"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            className="select"
            label="Langue"
            value={category}
            onChange={(e) => handleChange(e)}
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Header
