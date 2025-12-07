import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LightDarkMode from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LightDarkMode/>
    </>
  )
}

export default App
