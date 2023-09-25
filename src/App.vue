<script setup>
import ProductCard from './components/rakamin-e__commerce/ProductCard.vue';
import VuexComponent from './components/vuex-learn/vuex.vue'
import ProductDisplay from './components/ProductDisplay.vue';
import Message from './components/Message.vue';

</script>

<template>
  <div id="app">
    <ProductDisplay/>
    <Message/>
  </div>
</template>

<style>
  :root{
	--color-dark-blue: #002772;
	--color-light-blue: #D6E6FF;
	--color-dark-purple: #720060;
	--color-light-purple: #FDE2FF;
	--color-dark-brown: #3F3F3F;
	--color-light-brown: #DCDCDC;
	--color-black: #1E1E1E;
	--color-white: #FFF;
  }
</style>
