<template>
  <div>
    <router-link
        :to="{path: '/test#whitehaven'}"
    >


    <v-btn>
      Scroll to bottom
    </v-btn>
    </router-link>
    <About></About>
    <v-card
        class="overflow-y-auto mx-auto"
    max-height="100"
        ref="text_div">
      <div ref="descrip_para" id="post">
        <p id="whitehaven">Whitehaven Beach is a 7 km stretch along Whitsunday Island, Australia. The island is accessible by boat,
          seaplane & helicopter from Airlie Beach, as well as Hamilton Island. It lies across from Stockyard Beach,
          better known as Chalkie's Beach, on Haslewood Island. The beach is known for its crystal white silica sands
          and turquoise coloured waters. The beach has tour barbeque and camping facilities.</p>
        <p>The beach was named and discovered in 1879 by Staff Commander EP Bedwell. 'Whitehaven' was one of the many
          names, from the then English county of Cumberland, which Bedwell brought to the area. It followed James Cook's
          1770 naming of the island group, the Cumberland Islands.</p>
      </div>
    </v-card>

        <div id="app">
          <v-app>
            <v-main>
              <v-container>
                <v-card ref="card"
                        class="overflow-y-auto mx-auto"
                        outlined
                        max-width=""
                        max-height="400">
                  <v-img
                      class="white--text align-end"
                      height="200px"
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                    <v-card-title>
                      Whitehaven Beach
                      <v-btn
                          class="ml-6"
                          dark
                          dense
                          x-small
                          color="red"
                          @click="toTop">GoTo</v-btn>
                    </v-card-title>
                  </v-img>
                  <v-card-text>
                    <p>Whitehaven Beach is a 7 km stretch along Whitsunday Island, Australia. The island is accessible by boat, seaplane & helicopter from Airlie Beach, as well as Hamilton Island. It lies across from Stockyard Beach, better known as Chalkie's Beach, on Haslewood Island. The beach is known for its crystal white silica sands and turquoise coloured waters. The beach has tour barbeque and camping facilities.</p>
                    <p>The beach was named and discovered in 1879 by Staff Commander EP Bedwell. 'Whitehaven' was one of the many names, from the then English county of Cumberland, which Bedwell brought to the area. It followed James Cook's 1770 naming of the island group, the Cumberland Islands.</p>
                  </v-card-text>
                  <v-card-actions ref="actions">
                    <v-btn text>Button</v-btn>
                  </v-card-actions>
                </v-card>
              </v-container>
            </v-main>
          </v-app>
        </div>

  </div>
</template>

<script>


import About from "@/views/About";
import router from "@/router/router";

export default {
  name: "Test",
  components:{
    About,
  },
  data: () => ({
    fab: false
  }),

  methods: {
    onScroll(e) {
      if (typeof window !== 'undefined') {
        const top = window.pageYOffset || e.target.scrollTop || 0
        this.fab = top > 20
      }

    },
    toTop() {
      // this.$vuetify.goTo("scroll-target")
      this.$vuetify.goTo(this.$refs.actions, {container: this.$refs.card});
      // this.$vuetify.goTo(this.$r, { container: this.$refs.card });
    },
    toBottom() {
      // this.$vuetify.goTo("scroll-target")
      // this.$vuetify.goTo(this.$refs.descrip_para, {container: this.$refs.text_div});
      // this.$vuetify.goTo(this.$r, { container: this.$refs.card });
      // router.push({path: '/post#whitehaven'})
      console.log(router.getRoutes())
    },


  }
}
</script>

<style scoped>

</style>