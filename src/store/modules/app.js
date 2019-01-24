import Cookies from 'js-cookie'

const app = {
  state: {
    // 侧边导航栏默认展开
    sidebarCollapse: Cookies.get('sidebarCollapse') ? !!+Cookies.get('sidebarCollapse') : false
  },
  getters: {
    sidebarCollapse: state => state.sidebarCollapse
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebarCollapse = !state.sidebarCollapse
      Cookies.set('sidebarCollapse', state.sidebarCollapse)
    },
    CLOSE_SIDEBAR: state => {
      state.sidebarCollapse = true
      Cookies.set('sidebarCollapse', true)
    }
  },
  actions: {
    toggleSidebar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSidebar({ commit }) {
      commit('CLOSE_SIDEBAR')
    }
  }
}

export default app