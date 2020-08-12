
import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutation-types.js'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const moduleA = {
	state: {
		name: '我是模块里面的name'
	},
	mutations: {
		// 先去state里面的mutation找，然后在模块里面的mutations找
		updateName(state,payload){
			// state.name = '我是经过模块里面的mutation的name'
			state.name = payload
		}
	},
	getters: {
		// 定义在state的getter里面
		fullName(state){
			return state.name+'111'
		},
		fullName2(state,getters){
			return getters.fullName+'222'
		},
		fullName3(state,getters,rootState){
			return getters.fullName2+rootState.counter
		}
		
	},
	actions: {
		aUpdateName(context){
			console.log(context)
			// context.rootGetters
			setTimeout(() => {
				context.commit('updateName','wangwu')
			},1000)
		}
	}
}



const store = new Vuex.Store({
	state: {
		counter: 1000,
		students: [
			{id: 110, name: 'why', age: 18},
			{id: 111, name: 'kobe', age: 24},
			{id: 112, name: 'James', age: 30},
			{id: 113, name: 'Curry', age: 10}
		],
		info: {
			name: 'Marry',
			age: 18,
			height: 1.88
		}
	},
	mutations: {
		// 方法
		[INCREMENT](state){
			state.counter++
		},
		decrement(state){
			state.counter--
		},
		incrementCount(state,payload){
			// 1. 普通的提交风格
			// state.counter += count
			
			console.log(payload);
			// 2.特殊的提交封装
			state.counter += payload.count
		},
		addStudent(state,student){
			state.students.push(student)
		},
		updateInfo(state){
			state.info.name = 'cccccc'
			// 未初始化的属性不会响应，添加成功但页面不刷新
			// state.info['address'] = '洛杉矶'
			
			// 方式一
			// Vue.set(state.info, 'address', '洛杉矶')
			// 方式二：用新对象给旧对象重新赋值
			// state.info = {...state.info, 'address':'洛杉矶'}
			
			// 该方式做不到响应式
			// delete state.info.age
			// 该方式可以做到响应式
			// Vue.delete(state.info,'age')
			
			// Mutations中的方法是同步，异步不能做到响应式
			// 通过对比视图结果和devtools中的数据，得出以上结论
			// setTimeout(() => {
			// 	state.info.name = 'cccccc'
			// },1000)
			
		}
	},
	actions: {
		aUpdateInfo(context,payload){
			// setTimeout(() => {
			// 	context.commit('updateInfo')
			// 	console.log(payload.message)
			// 	payload.success()
			// },1000)
			return new Promise((resolve,reject)=>{
				setTimeout(() => {
					context.commit('updateInfo')
					console.log(payload)
					resolve('1111')
				},1000)
			})
		}
	},
	getters: {
		powerCounter(state){
			return state.counter * state.counter;
		},
		more20Stu(state){
			return state.students.filter(s => s.age > 20)
		},
		// getters作为参数传递
		more20StuLength(state,getters){
			return getters.more20Stu.length
		},
		moreAgeStu(state){
			return age => {
				return state.students.filter(s => s.age > age)
			}
		}
	},
	modules: {
		a:moduleA
	}
})

// 3.导出store独享
export default store