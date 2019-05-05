<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3">Register</h2>
        <router-link tag="a" class="mr-2" to="login"
          >Already registered?</router-link
        >
        <v-layout justify-center>
          <v-form ref="form" v-model="valid" lazy-validations>
            <v-text-field
              v-model="firstName"
              :rules="nameRules"
              label="First Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email Address"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              type="password"
              required
            ></v-text-field>

            <v-select
              v-model="birthYear"
              :items="generateYears()"
              :rules="[v => !!v || 'Birth year is required']"
              label="Year"
              required
            ></v-select>

            <v-select
              v-model="birthMonth"
              :items="generateMonths()"
              :rules="[v => !!v || 'Birth month is required']"
              label="Month"
              required
            ></v-select>

            <v-select
              v-model="birthDay"
              :items="generateDays()"
              :rules="[v => !!v || 'Birth day is required']"
              label="Day"
              required
            ></v-select>

            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree to the rules?"
              required
            ></v-checkbox>

            <v-btn
              :disabled="!valid"
              color="success"
              @click="submitRegistration"
            >
              Register
            </v-btn>
          </v-form>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import usersAPI from "../services/usersAPI";

export default {
  data: () => ({
    valid: true,
    firstName: "",
    nameRules: [v => !!v || "First name is required"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [v => !!v || "Password is required"],
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    checkbox: false
  }),

  methods: {
    validateRegistration() {
      if (this.$refs.form.validate()) {
        this.valid = true;
      } else {
        this.valid = false;
      }
    },
    async submitRegistration() {
      this.validateRegistration();
      if (this.valid) {
        let payload = {};
        payload["email"] = this.email;
        payload["firstName"] = this.firstName;
        payload["password"] = this.password;
        payload["birthYear"] = this.birthYear;
        payload["birthMonth"] = this.birthMonth;
        payload["birthDay"] = this.birthDay;

        let regResponse = await usersAPI.register(payload);

        if (regResponse.errors) {
          console.log("REG FORM ERRORS", regResponse.errors);
        }
        else {
          console.log("REG SUCCESS:", regResponse);
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
        for (var i = 1; i <= new Date(year, month, 0).getDate(); i++) {
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
