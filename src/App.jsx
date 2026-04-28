import { useState } from "react"
import Die from "./Die.jsx"
export default function App() {

  // const [dice, setDice] = useState()

  // const diceElements = {}

  return (
    <main>
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
      </div>
      <button className="roll-dice"></button>
    </main>
  )
}