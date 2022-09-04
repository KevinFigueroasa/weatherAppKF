import { useState } from 'react'
import PalmasMantaEcuador from './video/PalmasMantaEcuador.mp4'
import reactLogo from './assets/react.svg'
import './App.css'
import WheaterApp from './assets/components/WheaterApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={PalmasMantaEcuador} type='video/mp4'/>
      </video>
      <WheaterApp/>
    </div>
  )
}

export default App
