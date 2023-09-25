<template>
	<div>
    <input type="text" @input="changeMessage" >
		<h3>{{ inputedMessage }}</h3>
		<p>{{ mail }}</p>
		<p>{{ anu }}</p>
	</div>
</template>

<script>
export default{
	props: ['mail', 'anu'],
	data(){
		return{
			inputedMessage: 'sfdsdfs'
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