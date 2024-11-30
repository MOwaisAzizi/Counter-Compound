import { createContext, useContext, useState } from "react"

//for Compond component do following steps
//1-create Context
const CounterContext = createContext()

//2-Create parrent Component
export default function Counter({ children }) {
  const [count, setCount] = useState(0)
  const increase = () => setCount(count => count + 1)
  const decrease = () => setCount(count => count - 1)

  return <CounterContext.Provider value={{ count, increase, decrease }}>
    <span>{children}</span>
  </CounterContext.Provider>
}

//3-create child component to help implementing the target
function Count() {
  const { count } = useContext(CounterContext)
  return <span>{count}</span>
}

function Label({ children }) {
  return <span>{children}</span>
}

function Increase({ icon }) {
  const { increase } = useContext(CounterContext)
  return <button onClick={increase}>{icon}</button>
}

function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext)
  return <button onClick={decrease}>{icon}</button>
}

//4- add child to properties of parent
Counter.Count = Count
Counter.Increase = Increase
Counter.Decrease = Decrease
Counter.Label = Label