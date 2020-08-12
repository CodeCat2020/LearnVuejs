// 小红
// 1.导入 {} 中定义的变量
import {sum} from './aaa.js'

var name = "小红"
var flag = false
console.log(name,sum(10,80));

// 2.直接导入export定义的变量
import {num1} from './aaa.js'

// 3. 导入 export 的function、class
import {multiply,Person} from './aaa.js'

console.log('multiply:',multiply(6, 7))
const p = new Person();
p.run()

// 4. 导入export default
import addr from './aaa.js'
console.log(addr);
addr('我是导入的匿名函数');

// 5. 导入：全部导入
// 导入到一个对象
import * as aa from './aaa.js'
console.log(aa.sum(100,80));