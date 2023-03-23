import { deepStrictEqual, strictEqual } from "assert";
import { filter } from "../lib/modules/filter.js";

const demo1 = [1, 2, 3, 5, 1, 5, 2];

deepStrictEqual(
  filter(demo1, (value) => value > 3),
  demo1.filter((value) => value > 3)
);

const demo2 = [
  {
    value: 1,
  },
  { value: 2 },
  { value: 3 },
];

deepStrictEqual(
  filter(demo2, ({ value }) => value >= 3),
  demo2.filter(({ value }) => value === 3)
);
