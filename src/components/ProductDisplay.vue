<template>
	<div class="container">

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
   :root{
	--color-dark-blue: #002772;
	--color-light-blue: #D6E6FF;
	--color-dark-purple: #720060;
	--color-light-purple: #FDE2FF;
	--color-dark-brown: #3F3F3F;
	--color-light-brown: #DCDCDC;
	--color-black: #1E1E1E;
	--color-white: #FFF;
  }
  p{
		color: green;
	}

</style>