import React, { useState, useMemo } from 'react';
import ComponentA from './components/ComponentA'
import './App.css';

function App() {
  const [countA, setCountA] = useState(0);
  const incrementA = () => {
    setCountA(countA + 1);
  };
  const memoComponentA = useMemo(() => {
    return <ComponentA />
  }, [])
  return (
    <div className="App">
      App js count A: {countA}
      <p>
        <button onClick={incrementA}>Increment A</button>
      </p>
      {memoComponentA}
    </div>
  );
}

export default App;
