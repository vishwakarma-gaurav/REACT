import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number){
      str+="0123456789"
    }
    if(character){
      str+="!@#$%^&*()_+:<>;}{]['/.,"
    }

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char) 
    }

    setPassword(pass)

  }, [length, number, character, setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length, number, character, passwordGenerator])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,16)
    window.navigator.clipboard.writeText(password)

  },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-50  bg-gray-700 text-center pb-3 pt-2'>PassWord Generator
        <div className='className=" flex shadow rounded-lg overflow-hidden mb-4 "'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 text-black' placeholder='password' readOnly ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassword}
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={16} className='cursor-pointer' 
            onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked = {number}
            id='numberInput'
            onChange={()=>{
              setNumber((p) => !p);
            }}/>Number
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked = {character}
            id='characterInput'
            onChange={()=>{
              setCharacter((p) => !p);
            }}/>character
          </div>
        </div>
      </div>
    </>
  )
}

export default App
