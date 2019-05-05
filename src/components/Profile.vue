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

      <v-flex xs12>
        <h1 class="display-2 font-weight-bold mb-3">
         Profile
        </h1>
      </v-flex>

      <v-flex mb-4 justify-center align-center text-xs-center>
        <v-card
                class="mx-auto"
                dark
                max-width="400"
        >
          <v-card-title>
            <v-icon
                    large
                    left
                    dark
            >
              fa-user
            </v-icon>
            <span class="title font-weight-light text-capitalize">{{ getUser.firstName }}</span>
          </v-card-title>

          <v-card-text class="headline font-weight-bold">
            <p>{{ getUser.email }}</p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-layout justify-center>
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    whatsNext: [
      {
        text: "Getting Started",
        href: "https://example.com"
      },
      {
        text: "Tips",
        href: "https://example.com"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://example.com"
      }
    ]
  }),
  computed: {
    getUser () {
      return this.$store.state.user;
    }
  }
};
</script>

<style></style>
