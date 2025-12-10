import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GithubProfileFinder from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GithubProfileFinder/>
    </>
  )
}

export default App
