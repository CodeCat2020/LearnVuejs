// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
	// render: h => h(APP)
  components: { App },
  template: '<App/>',
	store
})


// 3.使用全局的axios和对应的配置在进行网络请求
// // axios 的全局配置
// // 一般不会这样用，因为大型开发中，服务器不止有一个，每个服务器的URL不一样
// // 而且不同的请求的baseURL可能也不一样
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// // 单位是毫秒
// axios.defaults.timeout = 5000

// // 1.基本使用
// axios(config) 请求方式
// axios({
// 	// 可用测试网址：httpbin.org
// 	// 123.207.32.32:8000/home/multidata
// 	// 默认get请求
// 	url: 'http://123.207.32.32:8000/home/multidata',
// 	// 请求类型由服务器决定，这里的url不支持post请求
// 	// 类似与axios.post()方法
// 	// method: 'post'
// }).then(res => {
// 	console.log(res);
// })

// // axios({
// // 	url: 'http://123.207.32.32:8000/home/data',
// // 	// url传参，专门针对get请求的参数拼接
// // 	params: {
// // 		type: 'pop',
// // 		page: 1
// // 	}
// // }).then(res => {
// // 	console.log(res);
// // })



// // 2.axios发送并发请求
// // axios.all([axios(), axios()]).then()
// axios.all([axios({
// 	// url: 'http://123.207.32.32:8000/home/multidata',
// 	url: '/home/multidata',
// }), axios({
// 	url: '/home/data',
// 	params: {
// 		type: 'sell',
// 		page: 5
// 	}
// })]).then(axios.spread((res1, res2) => {
// 	console.log(res1);
// 	console.log(res2);
// }))

// 4. 创建对应的axios的实例
const instance1 = axios.create({
	baseURL: 'http://123.207.32.32:8000',
	timeout: 5000
})

instance1({
	url: '/home/multidata'
}).then(res => {
	console.log(res);
})

// const instance2 = axios.create({
// 	baseURL: 'http://222.207.32.32:8000',
// 	timeout: 10000
// })

// instance2({
// 	url: '/home/data',
// 	params: {
// 		type: 'pop',
// 		page: 1
// 	}
// }).then(res => {
// 	console.log(res);
// })


// 5. 封装 axios
// 只要是第三方框架/库，一定要封装，不要在每个组件中都使用/依赖。
// - 在 src 下创建 network 文件夹（自定义），然后用 index.js（自定义） 配置 axios。
// - 通过 import 关键字导入 axios 到 Vue 实例中。
// - 这样，每个组件（包括 Vue 实例化对象）都将继承该方法对象。

