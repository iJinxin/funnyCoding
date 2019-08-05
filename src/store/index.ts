import Vue from 'vue'
import Vuex from 'vuex'

import { AppState } from './modules/app.js'

Vue.use(Vuex)

export interface RootState {
  app: AppState
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<RootState>({})