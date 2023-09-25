<template>
	<div>
		<h1>this is product display</h1>
		<p>my name is {{ name }}</p>
		<p>product index now : {{ $store.state.productIndex }}</p>
		<button @click="incrementIndex">next button</button>

	</div>
</template>

<script>
  export default{
		// commit is used to call mutations
    data(){
			return{
				name: 'muhammad luqmanul hakim'
			}
		},
		methods:{
			incrementIndex(){
				this.$store.commit('incrementIndex')
			}
		}
	}
</script>

<style>
  p{
		color: green;
	}

  h1{
    color: var(--font-red)
	}
</style>