import { useEffect, useState } from "react";
import Calculator from "./Calculator";
import { operate } from "./functions";

function App() {
  const [expression, setExpression] = useState([]);
  const [operator, setOperator] = useState("");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(0);
  const operators = ["*", "/", "+", "-"];

  useEffect(() => {
    let currentOperator;
    let result = 0;
    if (expression.length > 1) {
      result = expression.reduce((sum, value, index) => {
        if (operators.includes(value)) {
          currentOperator = value;
          return sum;
        } else if (index > 0) {
          return operate(sum, currentOperator, value);
        } else return sum;
      }, expression[0]);
    }
    setResult(result);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expression]);

  function handleClick(event) {
    const value = event.target.value;

    if (operators.includes(value)) operatorInput(value);
    else if (value === "=") evaluate();
    else if (value === "clear") clear();
    else if ((value >= 0 && value < 10) || value === ".")
      setNumber((prev) => prev + value);
  }

  function operatorInput(value) {
    setOperator(value);
    if (number) setExpression([...expression, number, value]);
    else setExpression([...expression, value]);
    setNumber("");
  }

  function evaluate() {
    setExpression([...expression, number]);
    setOperator("");
    setNumber(null);
  }

  function clear() {
    setExpression([]);
    setOperator("");
    setNumber("");
    setResult(0);
  }
  return (
    <Calculator
      result={result}
      operator={operator}
      handleClick={handleClick}
      clear={clear}
      evaluate={evaluate}
    />
  );
}

export default App;
