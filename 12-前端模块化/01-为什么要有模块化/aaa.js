// 小明
// var name = "小明"

// function sum(num1,num2){
// 	return num1+num2
// }


// var flag = true
// if(flag){
// 	console.log(sum(10,20));
// }

// 下面是早期的解决方案，但是现在已经有模块化的规范了
// 使用立即执行函数解决
// 使用模块获取返回值，作为出口
// 只需要管理模块名字即可
var moduleA = (function(){
	// 1.定义导出的对象
	var obj = {}
	
	// 2.在对象内部定义属性和方法
	var name = "小明"
	
	function sum(num1,num2){
		return num1+num2
	}

	var flag = true
	if(flag){
		console.log(sum(10,20));
	}
	
	obj.flag = flag;
	obj.sum = sum;
	// 3. 将对象返回
	return obj;
})()



