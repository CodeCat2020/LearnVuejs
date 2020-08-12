var name = '小明'
var age = 18
var flag = true

function sum(num1, num2){
	return num1 + num2
}

// 导出方式一
export {
	// 对象的增强写法
	flag, sum
};


// 导出方式二
export var num1 = 700;

// 导出函数/类
export function multiply(x, y) {
  return x * y;
};

// 导出 ES6 中的类
export class Person {
	run() {
		console.log('在奔跑');
	}
}

// export default。导出时可以不命名
// 只能有一个 export default，默认的只能有一个
// const address = '北京市'
// export default address

// 导出匿名函数
export default function(argument) {
	console.log(argument)
}

