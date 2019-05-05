<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Track</span>
        <span class="font-weight-light">YourLift</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!--<span class="mr-2">Latest Release</span>-->
      <v-btn>
        <router-link tag="span" class="mr-2" to="/">home</router-link>
      </v-btn>
      <v-btn>
        <router-link tag="span" class="mr-2" to="about">about</router-link>
      </v-btn>
      <v-btn>
        <router-link tag="span" class="mr-2" to="register">register</router-link>
      </v-btn>
      <v-btn>
        <router-link tag="span" class="mr-2" to="login">login</router-link>
      </v-btn>
    </v-toolbar>

    <v-content>
      <!--<Home/>-->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home'
import About from './components/About'

export default {
  name: 'App',
  components: {
    Home,
    About
  },
  data () {
    return {
      //
    }
  }
}
</script>
