<template>
	<div class="women">

		<div class="container">
				<div class="image" v-if="product">
					<img :src="product.image" :alt="product.title">
				</div>
				<div class="details">
					<h1 class="title">{{ product.title }}</h1>
					<div style="display: flex; justify-content: space-between;">
						<h2>{{ product.category }}</h2>
						<div class="rate" v-if="product.rating && typeof product.rating.rate === 'number'" >
							<p style="margin: 0 10px;">{{ product.rating.rate.toFixed(1) }} / 5</p>

							<div class=""></div>
							<div class=""></div>
							<div class=""></div>
							<div class=""></div>
							<div class=""></div>

							<div v-for="index in renderBlueCircle()" :key="index+10" class="rate-circle-blue"></div>
							<div v-for="index in renderWhiteCircle()" :key="index+20" class="rate-circle-white"></div>
							<!-- <div v-for="index in 5" :key="index" class="rate-circle-white"></div> -->

						</div>
					</div>
					<hr>
					<p>{{ product.description }}</p>
					<hr>
					<p>{{ product.price }}</p>
					<button @click="callFetchproducts">next product</button>
			  </div>
		  </div>

	</div>
</template>

<script>
  export default{
		props: {
			fetchproducts: Function,
			product: Object 
		},
		data(){
      return{
				image:`${this.product.image}`
			}
		},
		methods:{
			renderBlueCircle(){
				const blueCircle = Math.round(this.product.rating.rate)
				console.log(blueCircle)
				return blueCircle
			},
			renderWhiteCircle(){
				const blueCircle = Math.round(this.product.rating.rate)
				const whiteCircle = 5 - blueCircle				
				return whiteCircle
			},
			callFetchproducts(){
				this.fetchproducts()
			}
		}
	}
</script>

<style scoped>
  .women{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background: linear-gradient(var(--color-light-purple) 66%, var(--color-white) 66%);
	}

</style>