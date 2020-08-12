<template>
	<div>
		<h2>{{$store.state.counter}}</h2>
		<p>{{$store.getters.powerCounter}}</p>
		<p>{{$store.getters.more20Stu}}</p>
		<p>{{$store.state.info}}</p>
	</div>
</template>

<script>
	export default {
		name: "HelloVuex"
	}
</script>

<style>
</style>
