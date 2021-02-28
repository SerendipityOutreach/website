<template>
  <v-container>
    <About></About>
  </v-container>
</template>

<script>
import About from "@/views/sub_views/About"
import {descriptions} from "@/assets/descriptions/AboutDescription";

export default {
  name: 'Home',

  components: {
    About
  },

  props: {},

  data() {
    return {
      website_content: descriptions,
    }
  }
}
</script>
