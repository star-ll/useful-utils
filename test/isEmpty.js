import { strictEqual } from "assert"
import { isEmpty } from "../lib/utils/isEmpty.js"

strictEqual(isEmpty([]), true)
strictEqual(isEmpty({}), true)
strictEqual(isEmpty([1]), false)
strictEqual(isEmpty({a: 1}), false)

strictEqual(isEmpty({[ Symbol()]: 'Symbol' }), true)
strictEqual(isEmpty({ [Symbol()]: 'Symbol' }, { includeSymbol: true }), false)

strictEqual(isEmpty(undefined), true)
strictEqual(isEmpty(null), true)

