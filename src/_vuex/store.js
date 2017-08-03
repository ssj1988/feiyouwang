
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'

Vue.use(Vuex)

const state = {
	username:"xxx"
}

const motations = {
	changeid(state,yourid){
		state.username = yourid
	}
}

const store = new Vuex.Store({
	state,
	motations,
	actions
})

export default store