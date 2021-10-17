import React from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Todos/>
    </div>
  )
}

export default App
