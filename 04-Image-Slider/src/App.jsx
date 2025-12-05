import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageSlider from './ImageSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/>
    </>
  )
}

export default App
