<template>
  <div id="app">
    <h2>{{message}}</h2>
		<p>{{$store.state.counter}}</p>
		<button @click="addition">+</button>
		<button @click="subtraction">-</button> 
		<button @click="addCount(5)">+5</button>
		<button @click="addCount(10)">+10</button>
		<button @click="addStudent">添加学生</button>
		
		<!-- getters -->
		<p>-- getters --</p>
		<p>{{$store.getters.powerCounter}}</p>
		<p>{{$store.getters.more20Stu}}</p>
		<p>{{$store.getters.more20StuLength}}</p>
		<p>{{$store.getters.moreAgeStu(8)}}</p>
		
		<p>-- vuex响应式原理 --</p>
		<p>{{$store.state.info}}</p>
		<button @click="updateInfo">修改信息</button>
		
		<!--  -->
		<p>-- vuex模块里面的内容 --</p>
		<!-- 错误的访问方式 -->
		<!-- <p>state.name:{{$store.state.name}}</p> -->
		<p>state.a.name:{{$store.state.a.name}}</p>
		<button @click="updateName">修改名字</button>
		<p>{{$store.getters.fullName}}</p>
		<p>{{$store.getters.fullName2}}</p>
		<p>{{$store.getters.fullName3}}</p>
		<button @click="asyncUpdateName">异步修改名字</button>
		
		<!-- hello-vuex -->
		<p>-- hello-vuex --</p>
		<hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex.vue'
import {INCREMENT} from './store/mutation-types.js'

export default {
  name: 'App',
	components: {
		HelloVuex
	},
  data() {
		return {
			message: '我是App组件',
		}
	},
	methods: {
		addition() {
			this.$store.commit(INCREMENT)
		},
		subtraction() {
			this.$store.commit('decrement')
		},
		addCount(count){
			// 1. 普通的提交风格
			// this.$store.commit('incrementCount',count)
		
			// 2.特殊的提交封装
			this.$store.commit({
				type: 'incrementCount',
				count
			})
		},
		addStudent() {
			const stu = {id: 115, name:'cc', age: 32};
			this.$store.commit('addStudent',stu)
		},
		updateInfo(){
			// this.$store.commit('updateInfo')
			// this.$store.dispatch('aUpdateInfo',{
			// 	message: '我是payload',
			// 	success: () => {
			// 		console.log('里面已经完成了');
			// 	}
			// })
			
			// 更优雅的方式
			// this.$store.dispatch('aUpdateInfo',{
			// 	message: '我是payload',
			// 	success: () => {
			// 		console.log('里面已经完成了');
			// 	}
			// })
			
			this.$store
			.dispatch('aUpdateInfo','我是携带的信息')
			.then(res => {
				console.log('里面已经完成了提交');
				console.log(res);
			})
		},
		updateName(){
			this.$store.commit('updateName')
		},
		asyncUpdateName(){
			this.$store.dispatch('aUpdateName')
		}
	}
}
</script>

<style>

</style>
