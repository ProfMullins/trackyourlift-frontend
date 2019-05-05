import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    test: "this is a test"
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    setUser({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("setUser");
          resolve();
        }, 500);
      });
    }
  },
  getters: {
    user: state => {
      return state.user;
    },
    getTest: state => {
      return state.test;
    }
  }
});
