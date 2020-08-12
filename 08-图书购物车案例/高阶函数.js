// 编程范式：命令式编程、声明式编程
// 编程范式：面向对象编程（第一公民：对象）、函数式编程（第一公民：函数）

// 举例说明
const nums = [10,20,111,222,444,40,50]

// 更简洁的方法
let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre,n)=>pre+n);
console.log("一行代码解决："+total);

// // 高阶函数编程
// let total = nums.filter(function(n){
// 	return n < 100
// }).map(function(n){
// 	return n * 2
// }).reduce(function(preValue,n){
// 	return preValue + n
// },0)
// console.log(total);

// ---------------------------------------------

// // 1.filter函数的使用
// // 回调七次
// // filter/map/reduce
// // filter中的回调函数有一个要求：必须返回一个boolean值
// // 返回true：函数内部将这次回调的n加入到一个新的数组里面
// // 返回false：函数内部过滤掉这次的n
// let newNums = nums.filter(function(n){
// 	return n < 100
// })
// console.log(newNums);	// 10，20，40，50

// // 2. map函数的使用
// let new2Nums = newNums.map(function(n){
// 	return n * 2
// })
// console.log(new2Nums);	// 20，40，80，100

// // 3. reduce函数的使用
// // 对数组中所有的内容进行求和
// let total = new2Nums.reduce(function(preValue,n){
// 	return preValue + n
// },0)
// console.log(total);			// 240

// // 第一次：preValue：0		n：20
// // 第二次：preValue：20		n：40
// // 第三次：preValue：60		n：80
// // 第四次：preValue：140		n：100





// ---------------------------------------------


// // 1.取出所有小于100的数字
// let newNums = []
// for(let i of nums){
// 	if(n < 100){
// 		newNums.push(n)
// 	}
// }

// // 2. 将所有小于100的数字进行转化：全部*2
// let new2Nums = []
// for(let i of newNums){
// 	new2Nums.push(i * 2)
// }

// // 3. 将所有满足条件的数字相加，得到最终的结果
// let new3Nums = []
// for(let i of new2Nums){
// 	nums[i] *= 2
// }

