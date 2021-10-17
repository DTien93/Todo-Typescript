import React from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Todo/>
    </div>
  )
}

export default App
