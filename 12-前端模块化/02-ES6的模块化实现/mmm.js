
// 小明
// 如果不引入 aaa.js 模块，这里会报错
// if(flag){
// 	console.log('小明是天才，哈哈哈');
// }

import {flag,sum} from './aaa.js'
if(flag){
	console.log('小明是天才，哈哈哈');
	sum(40,80)
}
