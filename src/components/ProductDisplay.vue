<template>
	<div>
		<h1>this is product display</h1>
		<p>product index now : {{ $store.state.productIndex }}</p>
		<button @click="increment">next button</button>
	</div>
</template>

<script>
  export default{
		// commit is used to call mutations

		methods:{
			increment(){
				this.$store.commit('increment')
			}
		}
	}
</script>