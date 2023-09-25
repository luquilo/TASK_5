import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	// application state
  count : 0,
	productIndex: 0,
	APIData : []
}

const mutations = {
	// mutations used for modify the state (update the state)
  increment(state){
		state.productIndex++
	},



}

const actions = {
	// used to perform asynchronous operations
}

const getters = {
	// used to access and compute state properties (access computed value, not to update the state)

}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})