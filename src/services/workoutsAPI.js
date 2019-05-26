import axios from "axios";

export default {
  newWorkout(payload) {
    return axios.post("workouts/", payload);

  },

  newLift(payload) {
    return axios.post("workouts/lift/", payload);
  },

  newSet(payload) {
    return axios.post("workouts/set/", payload);
  }
};
