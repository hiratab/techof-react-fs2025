import { useState } from 'react'

function App() {
  const name = "Bruno na Const"

  const obj = {
    name: "Bruno no Objeto",
    outroName: "Outro nome no Objeto"
  }

  const list = [
    "Bruno na Lista", 
    "Outro nome na Lista", 
    "Mais um", 
    "Mais um outro",
  ]

  return (
    <div>
      <p>Name: Bruno no JSX</p>
      <p>Name: {name}</p>
      <p>Name: {obj.name}</p>
      <p>Name: {list[0]}</p>
      <p>Name: {list[1]}</p>
      <p>Name: {list[2]}</p>

      <h2>Dynamic Object Rendering</h2>
      {list.map(name => <p>Name: {name}</p>)}
    </div>
  )
}

export default App
