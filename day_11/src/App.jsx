import React ,{useEffect,useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0);
   const increment = () => {
    setCount(count + 1)
    console.log("increment clicked");
  }
  useEffect(() => {
    console.log("component rendered");
  })
  return (
    <div>
      <h1>counter</h1>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
       </div>
  )
}

export default App
