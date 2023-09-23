import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	// application state
  count : 0,
	APIData : []
}

const mutations = {
	// mutations used for modify the state
  increment(state){
		state.count++
	},
	decrement(state){
		state.count--
	}

}

const actions = {
	// used to perform asynchronous operations
  async incrementAsync({commit}){
		// simulate api call or async task
		await new Promise((resolve) => setTimeout(resolve, 7000))
		commit('increment')
	}
}

const getters = {
	// used to access and compute state properties 
  doubleCount	(state){
		return state.count * 2
	},
	realCount(state){
		return state.count
	}

}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})