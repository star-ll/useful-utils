import assert from "assert";
import { reduce } from "../lib/modules/collection/reduce.js";
import { createRandomArray } from "./common.js";

const data = createRandomArray();

// Array
assert.strictEqual(
  data.reduce((a, b) => (a > b ? a : b)),
  reduce(data, (a, b) => (a > b ? a : b))
);
assert.strictEqual(
  data.reduce((a, b) => (a > b ? a : b), 1),
  reduce(data, (a, b) => (a > b ? a : b), 1)
);
assert.strictEqual(
    data.reduce((a, b) => (a > b ? a : b), 10000),
    reduce(data, (a, b) => (a > b ? a : b), 10000)
);
  
assert.strictEqual(
  data.reduce((a, b, index) => index, 1),
  reduce(data, (a, b, index) => index, 1)
);

assert.strictEqual(
  [1].reduce((a, b) => (a > b ? a : b)),
  reduce([1], (a, b) => (a > b ? a : b))
);



// Object
assert.strictEqual(
  reduce({ a: 1, b: 2, c: 0 }, (a, b) => (a > b ? a : b)),
  2
);

assert.strictEqual(
  reduce({ a: 1, b: 2, c: 0 }, (a, b) => (a > b ? a : b), 5),
  5
);

assert.strictEqual(
  reduce({ a: 1, b: 2, c: 0 }, (a, b, key) => key, 5),
  'c'
);