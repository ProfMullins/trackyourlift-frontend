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

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Logged Out
        </h1>
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
  }
};
</script>

<style></style>
