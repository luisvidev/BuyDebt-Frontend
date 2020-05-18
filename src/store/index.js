import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navbarItem: 0,
    token: "",
    currentRol: "",
    userEmail: "",
  },
  mutations: {
    changeNavBar(state, number) {
      state.navbarItem = number;
    },
    saveToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = "";
    },
    updateRol(state, rol) {
      state.currentRol = rol;
    },
    updateUser(state, user) {
      state.userEmail = user;
    },
  },
  actions: {},
  modules: {},
});
