
import { strictEqual} from "assert"
import { LinkList } from "../../lib/modules/structure/linkList.js";

const linkList = new LinkList()

linkList.add(1)
linkList.add(2)
linkList.add(3)
strictEqual(linkList.getFirst().val, 1)
strictEqual(linkList.getLast().val, 3)
strictEqual(linkList.removeLast().val, 3)
strictEqual(linkList.removeFirst().val, 1)
strictEqual(linkList.removeLast().val, 2)
strictEqual(linkList.isEmpty(), true)

linkList.addFirst(1)
strictEqual(linkList.isEmpty(), false)
strictEqual(linkList.getFirst().val, 1)

