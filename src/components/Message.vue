<template>
	<div>
		<h1>this message component</h1>
		<input-component :anu="anu" :mail="mail" @messageChanged="mail = $event"></input-component>
	</div>
</template>


<script>
import Input from './Input.vue';

export default{
	components:{
		'input-component': Input
	},
  data(){
	  return{
		  mail: 'send an email',
			anu: 'anu pokoe'
	  }
  },
}
</script>
