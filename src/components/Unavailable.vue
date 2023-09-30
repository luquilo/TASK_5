<template>
	<div class="unavailable">
		<div class="container">
			<img src="../assets/images/sad-face.png" class="sad-image">
			<h1>This product is unavailable to show</h1>
		  <button @click="callFetchproducts">Next Product</button>
		</div>
	</div>
</template>

<script>
  export default{
		props: {
			fetchproducts: Function,
		},
		methods:{
			callFetchproducts(){
				this.fetchproducts()
			}
		},

	}
</script>

<style scoped>
  .unavailable{
    display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background: linear-gradient(var(--color-light-brown) 66%, var(--color-white) 66%);
	}

	.container{
    position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		max-width: 82%;
		width: 100%;
		max-height: 70%;
		height: 100%;
		background: var(--color-white);
		z-index: 1;
	}

	.container > h1 {
		color: var(--color-black);
		font-family: Inter;
		font-size: 20px;
		font-weight: 400;
		margin: 15px;
		word-wrap: break-word;
	  z-index: 3;
	}

	.sad-image{
		z-index: 2;
	  position: absolute;
	}
	
	.container > button {
		color: var(--color-dark-brown);
		background: var(--color-white);
		border-radius: 4px;
		font-size: 20px;
		font-family: Inter;
		border: 3px var(--color-black) solid;
		width:36%;
		padding: 4px;
		z-index: 3;
  }

	.container > button:hover {
		background: var(--color-dark-brown);
		color: var(--color-white);
		cursor: pointer;
	}

</style>