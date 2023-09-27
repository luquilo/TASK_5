<template>
	<div>
		<h1>cloths goes here</h1>
		<ol>
			<li v-for="cloth in cloths" :key="cloth.id">{{ cloth.title }} delete, edit, tambah</li>
		</ol>
</div>
</template>

<script>



export default{
	data(){
	  return{
			cloths: []
		
		}	
	},
	created(){
		fetch('https://fakestoreapi.com/products/')
		  .then(response => {
				if(!response.ok){
					throw new Error('something went wrong, please contact the developer')
				}
				return response.json()
			})
			.then(data => {
				console.log(data)
				console.log(typeof {name: 'luqman'})
				console.log(typeof [])
				if (data instanceof Array) {
					this.cloths = data
					return;
				}

				this.cloths = [data];
			})
			.catch(error => {
				console.log('Error : ', error)
			})
	
	}

}

</script>