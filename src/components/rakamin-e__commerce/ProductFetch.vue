<template>
	<div>
		<h1>cloths goes here</h1>
		<ol>
			<li v-for="cloth in cloths" :key="cloth.id">{{ cloth.category }}</li>
		</ol>
</div>
</template>

<script>



export default{
	data(){
	  return{
			name: 'MUHAMMAD LUQMANUL HAKIM',
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
        this.cloths = data
			})
			.catch(error => {
				console.log('Error : ', error)
			})
	
	}

}

</script>