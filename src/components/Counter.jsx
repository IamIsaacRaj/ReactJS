import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

  return (
    <div>
      <h2>Counter</h2>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        style={{ width: "50px", marginRight: "10px" }}
      />
      <button onClick={() => setCount(count - step)}>-</button>
      <span style={{ margin:"0 15px", fontSize: "20px"}}>{count}</span>
      <button onClick={() => setCount(count + step)}>+</button>
      <br />
      <button onClick={() => setCount(0)} style={{ marginTop:"10px", backgroundColor:"blueviolet" }}>Reset</button>
    </div>
  );
}

export default Counter;