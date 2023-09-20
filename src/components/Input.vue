<template>
	<div>
    <input type="text" :value="mail" @input="changeMessage" >
		<h3>{{ inputedMessage }}</h3>
	</div>
</template>

<script>
export default{
	props: ['mail'],
	data(){
		return{
			inputedMessage: ''
		}
	},
	methods:{
		changeMessage(event){
      this.inputedMessage = event.target.value
			console.log(event.target.value)
			this.$emit('messageChanged', this.inputedMessage)
		}
	}
}
</script>