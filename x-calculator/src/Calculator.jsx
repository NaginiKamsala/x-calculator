import { useState } from "react";

import styles from "./Calculator.module.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const evalResult = eval(input).toString();
      setResult(evalResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className={styles.calculator}>
      <h1>React Calculator</h1>
      <input
        type="text"
        value={input}
        readOnly
        className={styles.calculatorinput}
      />
      <input
        type="text"
        value={result}
        readOnly
        className={styles.calculatorinput}
      />
      <div className={styles.calculatorbuttons}>
        {["7", "8", "9", "+"].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
        {["4", "5", "6", "-"].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
        {["1", "2", "3", "*"].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
        {["C"].map((value) => (
          <button key={value} onClick={handleClear}>
            {value}
          </button>
        ))}

        {["0", "=", "/"].map((value) => (
          <button
            key={value}
            onClick={value === "=" ? handleCalculate : () => handleClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
