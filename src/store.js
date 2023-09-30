import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	// application state
	productIndex: 1,
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

export default new Vuex.Store({
	state,
	mutations
})