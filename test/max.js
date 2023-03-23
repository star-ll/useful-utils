import assert from "assert"
import {max} from "../lib/modules/max.js"

const testData = []
for (let i = 0; i < 10; i++){
    testData.push(Math.floor(Math.random() * 100))
    
    if (i === 5) {
        testData.push(Number.MAX_SAFE_INTEGER)
    }
}

assert.strictEqual(max(testData), Number.MAX_SAFE_INTEGER)
