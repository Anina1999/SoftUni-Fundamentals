function simpleCalculator(numOne, numTwo, operator, i = 0) {
  let multiply = numOne * numTwo;
  let divide = numOne / numTwo;
  let add = numOne + numTwo;
  let subtract = numOne - numTwo;

  let operators = ['multiply', 'divide', 'add', 'subtract'];
  let results = [multiply, divide, add, subtract];

  return (
    (operator === operators[i] && (results[i] === 0 || results[i]) && results[i])
    || (i + 1 < operators.length && simpleCalculator(numOne, numTwo, operator, i + 1))
  );
}

let output = simpleCalculator (5, 5, 'multiply');
console.log(output);
