<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img
          :src="require('../assets/trackyourlift_logo.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3">New Set</h2>

        <v-layout justify-center>
          <v-form ref="form" v-model="valid" lazy-validations>
            <v-text-field
              v-model="weight"
              :rules="weightRules"
              label="Weight"
              placholder="225"
              type="number"
              step="0.5"
              required
            ></v-text-field>

            <v-text-field
              v-model="reps"
              :rules="repsRules"
              label="Number of Reps"
              placholder="10"
              type="number"
              step="1"
              required
            ></v-text-field>

            <v-btn :disabled="!valid" color="success" @click="submitSet">
              Submit
            </v-btn>
          </v-form>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import workoutsAPI from "../services/workoutsAPI";
import store from "../store";

export default {
  data: () => ({
    valid: true,
    weight: "",
    weightRules: [v => !!v || "Weight is required"],
    reps: "",
    repsRules: [v => !!v || "Number of reps is required"]
  }),

  methods: {
    validateSet() {
      this.valid = this.$refs.form.validate();
    },
    async submitSet() {
      this.validateWorkout();
      if (this.valid) {
        let payload = {};
        payload["weight"] = this.weight;
        payload["reps"] = this.reps;

        let setResponse = await workoutsAPI.newSet(payload);

        if (setResponse.errors) {
          console.log("Login FORM ERRORS", setResponse.errors);
        } else {
          store.commit("setSet", setResponse.data);
          this.$router.push("set");
        }
      }
    }
  }
};
</script>

<style></style>
