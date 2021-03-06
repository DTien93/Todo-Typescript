import React from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Todos from './components/Todos'
const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Todos/>
    </div>
  )
}

export default App
