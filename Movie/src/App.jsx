import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MovieInput } from './Components/MovieInput'
import { MovieList } from './Components/MovieList'


function App() {

  return (
    <>
      <MovieInput />
      <MovieList />
    </>
  )
}

export default App
