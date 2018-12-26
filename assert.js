const assert = require("assert");

const result = (a, b, c, d) => {
  return a + b + c + d;
};

let expected = result(1, 1, 1, 1);
assert(expected === 5, "the results of 1,1,1,1 must be equal to 4");
