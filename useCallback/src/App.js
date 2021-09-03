import React, { useState, useCallback } from 'react';
import './App.css';
const functionCounter = new Set()
function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const increment = () => {
    console.log('increment')
    setCount(count + 1)
  }
  const increment2 = useCallback(() => {
    console.log('increment2')
    setCount2(count2 + 1)
  }, [count2])
  functionCounter.add(increment)
  functionCounter.add(increment2)
  console.log(functionCounter)
  return (
    <div className="App">
      <p>counter 1 : {count} </p>   <p>counter 2 : {count2}</p>
      <button onClick={increment}>increase counter 1</button>
      <button onClick={increment2}>increase counter 2</button>
    </div>
  );
}

export default App;
