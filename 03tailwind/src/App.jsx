import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='bg-green-400'>Tailwind</h1>
      <Card channel = "gaurav" dis = "Gaurav is bhakt of Ram"/>
      <Card channel = "Shyam" dis = "Shyam is Krishna"/>
      <Card channel = "Ram" dis = "Ram is vishnu"/> //we can pass objects in props
    </>
  )
}

export default App
