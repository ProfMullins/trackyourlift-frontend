<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase hidden-sm-and-down">
        <span>Track</span>
        <span class="font-weight-light">YourLift</span>
      </v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn flat>
        <router-link tag="span" class="mr-2" to="/">home</router-link>
      </v-btn>
      <v-btn flat>
        <router-link tag="span" class="mr-2" to="about">about</router-link>
      </v-btn>
      <v-btn v-if="!isLoggedIn" flat>
        <router-link tag="span" class="mr-2" to="register">register</router-link>
      </v-btn>
      <v-btn v-if="!isLoggedIn" flat>
        <router-link tag="span" class="mr-2" to="login">login</router-link>
      </v-btn>
      <v-btn v-else flat>
        <router-link tag="span" class="mr-2" to="logout">logout</router-link>
      </v-btn>
      <v-btn v-if="isLoggedIn" flat>
        <router-link tag="span" class="mr-2" to="workout">workout</router-link>
      </v-btn>
    </v-toolbar>

    <v-content>
      <!--<Home/>-->
      <router-view></router-view>
    </v-content>
    <v-footer dark height="auto" class="justify-center">
      <v-card class="flex justify-center" flat tile>
        <v-card-title class="grey darken-3 justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            class="mx-3"
            dark
            icon
            v-bind:href="icon.url"
          >
            <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">
          &copy; {{ new Date().getFullYear() }} &mdash;
          <strong>
            <v-btn href="https://mullins.io" target="_blank" flat>
              Nicholas Mullins
            </v-btn>
          </strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Login from "./components/Login";
import Workout from "./components/Workout";
import Lift from "./components/Lift";
import Set from "./components/Set";
import store from "./store";

export default {
  name: "App",
  components: {
    Home,
    About,
    Register,
    Login,
    Workout,
    Lift,
    Set
  },
  data() {
    return {
      icons: [
        {
          icon: "fab fa-twitter",
          url: "https://twitter.com"
        },
        {
          icon: "fab fa-linkedin",
          url: "https://linkedin.com"
        },
        {
          icon: "fab fa-github",
          url: "https://github.com"
        }
      ]
    };
  },
  method: {
    logout () {
      store.commit("setUser", {});
    }
  },
  computed: {
    getUser () {
      return this.$store.getters.user;
    },
    isLoggedIn () {
      if (this.$store.getters.user["email"]) {
        return 1;
      }
      return null;
    }
  }
};
</script>
