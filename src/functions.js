export function operate(a, operator, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  let decimal = false;
  if (a % 1 > 0 || b % 1 > 0) decimal = true;
  switch (operator) {
    case "+":
      return decimal ? (a + b).toFixed(2) : a + b;
    case "-":
      return decimal ? (a - b).toFixed(2) : a - b;
    case "/":
      return decimal ? (a / b).toFixed(2) : a / b;
    case "*":
      return decimal ? (a * b).toFixed(2) : a * b;

    default:
      break;
  }
}
