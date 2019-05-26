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
        <h2 class="headline font-weight-bold mb-3">New Lift</h2>

        <v-layout justify-center>
          <v-form ref="form" v-model="valid" lazy-validations>
            <v-text-field
              v-model="liftName"
              :rules="liftNameRules"
              label="Lift Name"
              placholder="Benchpress"
              required
            ></v-text-field>

            <v-text-field
              v-model="numSets"
              :rules="numSetsRules"
              label="Number of Sets"
              placholder="3"
              type="number"
              step="1"
              required
            ></v-text-field>

            <v-btn :disabled="!valid" color="success" @click="submitLift">
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
    liftName: "",
    liftNameRules: [v => !!v || "Lift name is required"],
    numSets: "",
    numSetsRules: [v => !!v || "Number of sets is required"]
  }),

  methods: {
    validateLift() {
      this.valid = this.$refs.form.validate();
    },
    async submitLift() {
      this.validateLift();
      if (this.valid) {
        let payload = {};
        payload["liftName"] = this.liftName;
        payload["numSets"] = this.numSets;

        let liftResponse = await workoutsAPI.newLift(payload);

        if (liftResponse.errors) {
          console.log("Lift FORM ERRORS", liftResponse.errors);
        } else {
          store.commit("setLift", liftResponse.data);
          this.$router.push("set");
        }
      }
    }
  }
};
</script>

<style></style>
