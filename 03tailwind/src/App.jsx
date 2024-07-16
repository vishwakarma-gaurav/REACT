import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username : "Gaurav",
    age : 21
  }
  return (
    <>
      <h1 className='bg-green-400'>Tailwind</h1>
      <Card channel = "gaurav"/>
      <Card/>
    </>
  )
}

export default App
