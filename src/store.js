import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	// application state
  count : 0,
	productIndex: 1,
	APIData : []
}

const mutations = {
	// mutations used for modify the state (update the state)
  incrementIndex(state){
		if(state.productIndex < 20){
		  state.productIndex++
		}else{
			state.productIndex = 1
		}
	}
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