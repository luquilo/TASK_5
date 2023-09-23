<template>
	<div>
		<h1>{{ name }} is fetching...</h1>
		<product-fetch-component></product-fetch-component>
	</div>
</template>

<script>
import ProductFetch from "./ProductFetch.vue"

export default{
	components:{
		'product-fetch-component': ProductFetch
	},
	data(){
		return{
			name: 'MUHAMMAD LUQMANUL HAKIM'
		}
	}
}



</script>