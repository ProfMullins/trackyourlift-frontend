import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    workout: {},
    lift: {},
    set: {},
    test: "this is a test"
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setWorkout(state, workout) {
      state.workout = workout;
    },
    setLift(state, lift) {
      state.lift = lift;
    },
    setSet(state, set) {
      state.set = set;
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
    },
    setWorkout({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("setWorkout");
          resolve();
        }, 500);
      });
    },
    setLift({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("setLift");
          resolve();
        }, 500);
      });
    },
    setSet({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("setSet");
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
    },
    workout: state => {
      return state.workout;
    },
    lift: state => {
      return state.lift;
    },
    set: state => {
      return state.set;
    }
  }
});
