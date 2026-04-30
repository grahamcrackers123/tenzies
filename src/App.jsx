import { useState } from "react"
import { nanoid } from "nanoid"
import Die from "./Die.jsx"
export default function App() {

  const [dice, setDice] = useState(() => generateNewDice())

  function generateNewDice() {
    // need to fill with something or else it will map over nothing
    return new Array(10).fill(0).map(die => { 
      return {
        key: nanoid(),
        value: Math.floor(Math.random() * 6) + 1, 
        isHeld: false
      }
    })
  }

  function holdDice(key) {
    setDice(prevDice => prevDice.map(die => {
      return key === die.key ? { ...die, isHeld: !die.isHeld } : die
    }))
  }

  function rollDice() {
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld === false ? { ...die, value: Math.floor(Math.random() * 6) + 1 } : die
    }))
  }

  const isGameOver = dice.every(die => die.isHeld === true && die.value === dice[0].value)
  
  console.log('isGameOver', isGameOver)

  const diceElements = dice.map(die => {
    return <Die 
      value={die.value} 
      key={die.key} 
      isHeld={die.isHeld}
      onClick={() => holdDice(die.key)}
    />
  })



  // console.log(dice)

  return (
    <main>
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>{isGameOver ? 'New Game' : 'Roll'}</button>
    </main>
  )
}