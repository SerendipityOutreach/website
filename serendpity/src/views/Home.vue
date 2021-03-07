<template>
  <div class="pr-5">
    <v-row>
      <v-col cols="2">
        <Nav></Nav>
      </v-col>
      <v-col cols="10">
<!--         put main content here    -->
        <About v-if="false"></About>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import About from "@/views/sub_views/About"
import {descriptions} from "@/assets/descriptions/AboutDescription";
import Nav from "@/views/Nav";

export default {
  name: 'Home',

  components: {
    About,
    Nav,
  },

  props: {},

  data() {
    return {
      website_content: descriptions,
    }
  }
}
</script>
