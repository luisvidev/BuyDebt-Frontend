import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navbarItem: 0,
  },
  mutations: {
    changeNavBar(state, number) {
      state.navbarItem = number;
    },
  },
  actions: {},
  modules: {},
});
