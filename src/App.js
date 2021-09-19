import { useEffect, useState } from "react";
import Calculator from "./Calculator";
import { operate } from "./functions";

function App() {
  const [expression, setExpression] = useState([]);
  const [operator, setOperator] = useState("");
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
  }, [expression]);

  function handleClick(event) {
    const value = event.target.value;

    if (operators.includes(value) && expression.length > 0)
      operatorInput(value);
    else if (value.match(/[.0-9]/)) numberInput(value);
    else if (value === "clear") clear();
  }

  function numberInput(value) {
    const lastElement = expression.slice(-1)[0];
    if (expression.length < 2) {
      setExpression((prev) => [prev + value]);
    } else if (operators.includes(lastElement.slice(-1)[0])) {
      setExpression((prev) => [...prev, value]);
    } else if (lastElement.match(/[.0-9]/)) {
      let temp = [...expression.slice(0, -1), lastElement + value];
      setExpression(temp);
    }
  }

  function operatorInput(value) {
    const lastElement = expression.slice(-1)[0];
    setOperator(value);

    if (operators.includes(lastElement)) {
      setExpression([...expression.slice(0, -1), value]);
    } else if (lastElement.match(/[.0-9]/))
      setExpression([...expression, value]);
  }

  function clear() {
    setExpression([]);
    setOperator("");
    setResult(0);
  }
  return (
    <Calculator
      result={result}
      operator={operator}
      handleClick={handleClick}
      clear={clear}
      expression={expression}
    />
  );
}

export default App;
