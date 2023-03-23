import { wait } from "../../lib/modules/async/wait.js";

// 延迟3s执行
const cb = wait(() => {
    console.log("Wait a moment");
}, 3000)
cb()

// 传递参数
const cb2 = wait((a,b) => {
    console.log(a,b);
}, 3000)
cb2('a', 'b')