import React from 'react'
import './App.css'
import Counter from './Counter'

function App(){
  return (
    <div className="app">
  <Counter>
    <Counter.Decrease icon ='-'/>
    <Counter.Label > label of counter : </Counter.Label>
    <Counter.Count/>
    <Counter.Increase icon = '+'/>
  </Counter>
    </div>
  )
} 

export default App
