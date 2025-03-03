import { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  // function to perform an operation

  const calculate = (operator) => {
    const number1 = Number(num1);
    const number2 = Number(num2);

    let calcResult = 0;

    switch (operator) {
      case "+":
        calcResult = number1 + number2;
        break;
      case "-":
        calcResult = number1 - number2;
        break;
      case "*":
        calcResult = number1 * number2;
        break;
      case "/":
        calcResult = number2 !== 0 ? number1 / number2 : "Zero division Error";
        break;
      default:
        break;
    }
    setResult(calcResult);
  };
  return (
    <div>
      <h2>Calculator</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter the first Number"
          style={{ padding: "10px", width: "150px", marginRight: "5px" }}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter the Second Number"
          style={{ padding: "10px", width: "150px", marginRight: "5px" }}
        />
      </div>
      <div>
        <button
          onClick={() => calculate("+")}
          style={{ padding: "8px", marginRight: "5px" }}
        >
          +
        </button>
        <button
          onClick={() => calculate("-")}
          style={{ padding: "8px", marginRight: "5px" }}
        >
          -
        </button>
        <button
          onClick={() => calculate("*")}
          style={{ padding: "8px", marginRight: "5px" }}
        >
          *
        </button>
        <button
          onClick={() => calculate("/")}
          style={{ padding: "8px", marginRight: "5px" }}
        >
          /
        </button>
      </div>
      {result !== null && (
        <div style={{ marginTop: "20px", fontSize: "20px" }}>
          Result : {result}
        </div>
      )}
    </div>
  );
};

export default Calculator;
