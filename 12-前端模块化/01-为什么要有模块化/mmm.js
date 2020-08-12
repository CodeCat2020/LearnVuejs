
// // 在aaa中，小明认为flag是true，但是并没有打印成功
// if(flag){
// 	console.log('小明是天才，哈哈哈');
// }

;(function(){
	if(moduleA.flag){
		console.log('小明是天才，哈哈哈');
	}
	console.log(moduleA.sum(10,80));
})()

