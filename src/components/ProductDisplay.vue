<template>
	<div>
    
		<loading-component v-if="loading"></loading-component>
		<men-component v-if="!loading && product && product.category === category.men" :fetchproducts="fetchproducts" :product="product"></men-component>
		<women-component v-else-if="!loading && product && product.category === category.women" :fetchproducts="fetchproducts" :product="product"></women-component>
    <unavailable-component v-else-if="!loading" :fetchproducts="fetchproducts"></unavailable-component>
		
	</div	>
</template>

<script>
  import Men from './Men.vue';
	import Women from './Women.vue';
	import Unavailable from './Unavailable.vue';
  import Loading from './Loading.vue';

  export default{
    components:{
			'men-component': Men,
			'women-component': Women,
			'unavailable-component': Unavailable,
			'loading-component': Loading
		},
		data(){
			return{
				loading: false,
				product: {},
				category:{
					men:"men's clothing",
					women:"women's clothing"
				}

			}
		},
		methods:{
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