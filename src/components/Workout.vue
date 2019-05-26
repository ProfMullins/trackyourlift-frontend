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
        <h2 class="headline font-weight-bold mb-3">New Workout</h2>

        <v-layout justify-center>
          <v-form ref="form" v-model="valid" lazy-validations>
            <v-text-field
              v-model="workoutName"
              :rules="workoutRules"
              label="Workout Name"
              placholder="StrongLifts 5x5"
              required
            ></v-text-field>

            <v-select
              v-model="year"
              :items="generateYears()"
              :rules="[v => !!v || 'Year is required']"
              label="Year"
              required
            ></v-select>

            <v-select
              v-model="month"
              :items="generateMonths()"
              :rules="[v => !!v || 'Month is required']"
              label="Month"
              required
            ></v-select>

            <v-select
              v-model="day"
              :items="generateDays()"
              :rules="[v => !!v || 'Day is required']"
              label="Day"
              required
            ></v-select>

            <v-btn :disabled="!valid" color="success" @click="submitWorkout">
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
    workoutName: "",
    workoutRules: [v => !!v || "Workout name is required"],
    year: "",
    month: "",
    day: ""
  }),

  methods: {
    validateWorkout() {
      this.valid = this.$refs.form.validate();
    },
    async submitWorkout() {
      this.validateWorkout();
      if (this.valid) {
        let payload = {};
        payload["workoutName"] = this.workoutName;
        payload["year"] = this.year;
        payload["month"] = this.month;
        payload["day"] = this.day;

        let workoutResponse = await workoutsAPI.newWorkout(payload);

        if (workoutResponse.errors) {
          console.log("Workout FORM ERRORS", workoutResponse.errors);
        } else {
          store.commit("setWorkout", workoutResponse.data);
          this.$router.push("lift");
        }
      }
    },

    generateYears() {
      let years = [];
      for (var i = 1900; i <= new Date().getFullYear(); i++) {
        years.push(i.toString());
      }
      return years;
    },

    generateMonths() {
      let months = [];
      for (var i = 1; i <= 12; i++) {
        months.push(i.toString());
      }
      return months;
    },

    generateDays() {
      let days = [];

      if (this.month) {
        for (var i = 1; i <= new Date(this.year, this.month, 0).getDate(); i++) {
          days.push(i.toString());
        }
      } else {
        for (var i = 1; i <= 31; i++) {
          days.push(i.toString());
        }
      }
      return days;
    }
  }
};
</script>

<style></style>
