import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    navbarItem: 0,
    token: "",
    currentRol: "",
    userEmail: "",
    password: "",
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
    updatePassword(state, password) {
      state.password = password;
    },
  },
  actions: {},
  modules: {},
});
