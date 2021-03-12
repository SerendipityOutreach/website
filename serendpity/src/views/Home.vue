<template>
  <div class="pr-5">
    <v-row>
      <v-col cols="2" class="pl-1">
        <Nav @scrollRequest="setScrollDest"></Nav>
      </v-col>
      <v-col cols="10">
<!--         put main content here    -->
        <About ref="about" :navDest="scrollDest"></About>
        <p ref="hello">hi</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import About from "@/views/sub_views/About"
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
      scrollDest: "About",
    }
  },
  methods: {
    setScrollDest(refDest){ //note there is literally a ref tag that's why it's called refDest
      this.scrollDest = refDest
      console.log("The about component")
      console.log(this.$refs["about"])

    }
  }
}
</script>
