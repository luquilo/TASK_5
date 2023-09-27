<template>
	<div>
    
		<!-- <loading-component v-if="loading"></loading-component> -->
		<men-component :fetchproducts="fetchproducts" :product="product"></men-component>
		<!-- <women-component></women-component>
    <unavailable-component></unavailable-component> -->

		
	</div	>
</template>

<script>
  import Men from './Men.vue';
	import Women from './Women.vue';
	import Unavailable from './Unavailable.vue';
  import Loading from './Loading.vue';

  export default{
		// commit is used to call mutations
    components:{
			'men-component': Men,
			'women-component': Women,
			'unavailable-component': Unavailable,
			'loading-component': Loading
		},
		data(){
			return{
				loading: false,
				products:[],
				product: {}

			}
		},
		methods:{
			logg(){
				console.log(this.products)
				console.log(typeof this.products)
				console.log(this.products.title)
			},
			incrementIndex(){
				this.$store.commit('incrementIndex')
			},
			async fetchproducts(){
				this.loading = true
				try{
					const response = await fetch(`https://fakestoreapi.com/products/${this.$store.state.productIndex}`)
					if(!response.ok){
						throw new Error('network response was not ok')
					}
					const data = await response.json()
					this.product = data
				}catch(error){
					console.error('error : ', error)
				} finally {
					this.$store.commit('incrementIndex')
					this.loading = false
				}
			}
		},
		created(){
			this.fetchproducts()
		}
	}
</script>

<style>

</style>