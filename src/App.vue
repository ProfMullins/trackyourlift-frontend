<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Track</span>
        <span class="font-weight-light">YourLift</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!--<span class="mr-2">Latest Release</span>-->
      <v-btn flat>
        <router-link tag="span" class="mr-2" to="/">home</router-link>
      </v-btn>
      <v-btn flat>
        <router-link tag="span" class="mr-2" to="about">about</router-link>
      </v-btn>
      <v-btn flat>
        <router-link tag="span" class="mr-2" to="register"
          >register</router-link
        >
      </v-btn>
      <v-btn flat>
        <router-link tag="span" class="mr-2" to="login">login</router-link>
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

export default {
  name: "App",
  components: {
    Home,
    About
  },
  data() {
    return {
      //
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
  }
};
</script>
