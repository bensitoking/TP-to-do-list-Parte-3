import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from'./assets/components/Form.jsx'
import Theme from './assets/components/Theme.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Formulario/>
      <Theme/>
    </>
  )
}

export default App
