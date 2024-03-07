import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: true,
  },
  getters: {},
  mutations: {
    SET_DRAWER(state, data) {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    setDrawer({ commit }, data) {
      commit("SET_DRAWER", data);
    },
  },
  modules: {
    auth,
  },
});
