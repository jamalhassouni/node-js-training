const counter = arr => {
  return `There are ${arr.length} elements on this array`;
};
const adder = (a, b) => {
  return `The sum of 2 numbers is ${a + b}`;
};
const pi = 3.142;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
