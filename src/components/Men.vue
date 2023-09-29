<template>
	<div class="men">
			
			<div class="container">
				<div class="image" v-if="product">
					<img :src="product.image" :alt="product.title">
				</div>
				<div class="details">
					<div class="top-details">
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
						</div>
					</div>
					<hr>
					<p class="product-description">{{ product.description }}</p>
					</div>
					<div class="bottom-details">
						<hr>
					<p class="price">${{ product.price }}</p>
					<div class="buttons">
						<button class="buy-button">Buy Now</button>
					  <button @click="callFetchproducts" class="next-button">next product</button>
					</div>
				</div>
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
			},
		}
	}
</script>

<style scoped>
  .men{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background: linear-gradient(var(--color-light-blue) 66%, var(--color-white) 66%);
	}
	.container{
		display: flex;
    



		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		max-width: 82%;
		width: 100%;
		max-height: 70%;
		height: 100%;
		background: var(--color-white);
	}

	.image{
		display: flex;
		justify-content: center;
		align-items: center;

		max-width: 40%;
		padding: 50px 50px 50px 100px;
	}

	.image > img{
		width: 350px;
		height: auto;
	}

  .details{
		display: flex;
		flex-direction: column;
	  margin: 50px;
		justify-content: space-between;
	}
	.title{
		color: var(--color-dark-blue);
		margin: 15px 0;
		font-size: 28px;
		font-family: Inter;
		font-weight: 600;
		word-wrap: break-word;
	}

	hr{
		color: var(--color-light-brown);
		opacity: 40%;
	}
	.top-details{
		display: flex;
		flex-direction: column;
	}

	.bottom-details{
		display: flex;
		flex-direction: column;
	}

	.buttons{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	h2 {
		color: var(--color-dark-brown);
		margin: 15px 0;
		font-size: 18px;
		font-family: Inter;
		font-weight: 400;
		word-wrap: break-word;
	}

	.rate{
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.rate > h2, .rate > p{
	  margin: 15px 0;
	}


	.rate-circle-white{
		width: 18px;
		height: 18px;
		margin: 1px;
		background: var(--color-white);
		border: 1px solid var(--color-dark-blue);
		border-radius: 50%;
	}

	.rate-circle-blue{
		width: 18px;
		height: 18px;
		margin: 1px;
		background: var(--color-dark-blue);
		border: 1px solid var(--color-dark-blue);
		border-radius: 50%;
	}
	
  .product-description{
		color: var(--color-black);
		font-size: 20px;
		font-family: Inter;
		font-weight: 400;
		word-wrap: break-word; 
	  padding: 30px 0;
	}

	.price{
		color: var(--color-dark-blue);
		font-size: 28px;
		font-weight: 600;
		font-family: Inter;
		word-wrap: break-word;
		padding: 16.5px 0;
	}

</style>