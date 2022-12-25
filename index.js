const factorialOfTwoNumbers = require("../factorial/index");

// console.log(factorial);

const ratioOfTwoNumbers = require("../ratio/index");

// console.log(ratio);

const ratioAndFactorial = (a, b, c) => {
  const ratio = ratioOfTwoNumbers(a, b);
  console.log(ratio);
  const factorial = factorialOfTwoNumbers(c);
  console.log(factorial);

  return { ratio, factorial };
};

ratioAndFactorial(1, 2, 3);

module.exports = ratioAndFactorial;
