const sum = (a, b) => +a + +b;

const multiply = (a, b) => +a * +b;

const divide = (a, b) => (b !== 0 ? +a / +b : null);

const subtract = (a, b) => +a - +b;

module.exports = {
  sum,
  subtract,
  multiply,
  divide,
};
