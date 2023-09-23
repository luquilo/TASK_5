<template>
	<div>
		<h1>vuex goes here</h1>
		<p>Count : {{ $store.getters.realCount}}</p>
		<button @click="increment">Increment</button>
		<button @click="decrement">Decrement</button>
		<button @click="incrementAsync">Increment async</button>
	</div>
</template>

<script>
  export default{

		// commit is used to call mutations

		methods: {
			increment(){
				this.$store.commit('increment')
			},
			decrement(){
				this.$store.commit('decrement')
			},
			incrementAsync(){
				this.$store.dispatch('incrementAsync')
			}

		}
	}
</script>