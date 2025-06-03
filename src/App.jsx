import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='min-h-screen items-center justify-center px-4 flex flex-col font-bold'><h1 className=''>Currency Converter</h1>
    <button className='color-red bg-black px-10 rounded-lg'>enter</button></div>



    </>
  )
}

export default App
