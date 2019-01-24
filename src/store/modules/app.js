import Cookies from 'js-cookie';

const app = {
  state: {
    sidebarOpened: !!Cookies.get('sidebarOpened')
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebarOpened = !state.sidebarOpened
      Cookies.set('sidebarOpened', state.sidebarOpened)
    }
  },
  actions: {
    toggleSidebar({ commit }) {
      commit('TOGGLE_SIDEBAR');
    }
  }
}

export default app;