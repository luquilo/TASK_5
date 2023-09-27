<template>
	<div class="men">
		
		<!-- <h1>{{ product ? product.title : 'Loading...' }}</h1>
			<h1>{{ product ? product.id : 'Loading...' }}</h1>
			<h1>{{ product ? product.category : 'Loading...' }}</h1> -->
			
			<div class="container">
				<div class="image" v-if="product">
					<img :src="product.image" :alt="product.title">
				</div>
				<div class="details">
					<h1 class="title">{{ product.title }}</h1>
					<div style="display: flex; justify-content: space-between;">
						<h2>{{ product.category }}</h2>
						<div class="rate">
							<p style="margin: 0 10px;">{{ product.rating.rate }} / 5</p>
							<div class="rate-bullets"></div>
							<div class="rate-bullets"></div>
							<div class="rate-bullets"></div>
							<div class="rate-bullets"></div>
							<div class="rate-bullets"></div>
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
			loggg(){
				console.log(this.product)
				if(this.product){
					console.log(this.product.title)
				}else{
					console.log('not available yet')
				}
			},
			callFetchproducts(){
				this.fetchproducts()
			}
		},

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
	}

	.details > h1{
		margin: 15px 0;
		color: var(--color-dark-blue);
		font-size: 28px;
		font-family: Inter;
		font-weight: 600;
		word-wrap: break-word;
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


	.rate-bullets{
		width: 18px;
		height: 18px;
		margin: 1px;
		background: var(--color-white);
		border: 1px solid var(--color-dark-blue);
		border-radius: 50%;
	}

</style>