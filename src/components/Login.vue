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
        <h2 class="headline font-weight-bold mb-3">Login</h2>
        <router-link tag="a" class="mr-2" to="register"
          >Not registered?</router-link
        >
        <v-layout justify-center>
          <v-form ref="form" v-model="valid" lazy-validations>
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

            <v-btn :disabled="!valid" color="success" @click="submitLogin">
              Login
            </v-btn>
          </v-form>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import usersAPI from "../services/usersAPI";
import store from "../store";

export default {
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [v => !!v || "Password is required"]
  }),

  methods: {
    validateLogin() {
      this.valid = this.$refs.form.validate();
    },
    async submitLogin() {
      this.validateLogin();
      if (this.valid) {
        let payload = {};
        payload["email"] = this.email;
        payload["password"] = this.password;

        let loginResponse = await usersAPI.login(payload);

        if (loginResponse.errors) {
          console.log("Login FORM ERRORS", loginResponse.errors);
        } else {
          store.commit('setUser', loginResponse.data);
          this.$router.push("profile");
        }
      }
    }
  }
};
</script>

<style></style>
