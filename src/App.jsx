import { useState } from 'react'
import './App.css'
import PrimarySearchAppBar from './components/Header.jsx'
import BottomAppBar from './components/MusicBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrimarySearchAppBar>
          
      </PrimarySearchAppBar>
      
      <BottomAppBar>

      </BottomAppBar>
    </>
  )
}

export default App
