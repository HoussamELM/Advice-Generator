import { useState, useEffect, useWindowDimensions } from 'react'
import reactLogo from './assets/react.svg'
import Advice from './components/Advice'
import './App.css'

function App() {

  const [advice, setAdvice] = useState({})

  const generateAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        const adv = data.slip.advice
        const id = data.slip.id
        setAdvice({ advice: adv, id: id })
      })
  }

  useEffect(() => {
    generateAdvice()
  }, [])

  return (
    <div className="App">
      <Advice advice={advice} generate={generateAdvice} />
    </div>
  )
}

export default App
