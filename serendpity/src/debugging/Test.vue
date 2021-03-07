<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h3
              ref="radio"
              class="headline"
          >
            Target
          </h3>

          <v-radio-group
              v-model="type"
              row
          >
            <v-radio
                label="Number"
                value="number"
            ></v-radio>

            <v-radio
                label="Selector"
                value="selector"
            ></v-radio>

            <v-radio
                label="DOMElement"
                value="element"
            ></v-radio>
          </v-radio-group>

          <v-text-field
              v-if="type === 'number'"
              v-model="number"
              label="Number"
              type="number"
          ></v-text-field>

          <v-text-field
              v-if="type === 'selector'"
              v-model="selector"
              label="Selector"
          ></v-text-field>

          <v-select
              v-if="type === 'element'"
              v-model="selected"
              :items="elements"
              label="DOMElement"
          ></v-select>
        </v-col>

        <v-col cols="12">
          <h3 class="headline">
            Options
          </h3>

          <v-select
              v-model="easing"
              :items="easings"
              label="Easing"
          ></v-select>

          <v-slider
              v-model="duration"
              label="Duration"
              max="1000"
              min="0"
              thumb-label
          ></v-slider>

          <v-slider
              v-model="offset"
              label="Offset"
              max="500"
              min="-500"
              thumb-label
          ></v-slider>
        </v-col>

        <v-col>
          <v-btn
              ref="button"
              block
              color="primary"
              @click="scrollToPoint"
          >
            scroll
          </v-btn>
        </v-col>
      </v-row>

    </v-container>
<!--the bunch of random content extra-->
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
            ref="text_div"
            class="overflow-y-auto mx-auto"
            max-height="100">
          <div id="post" ref="descrip_para">
            <p id="whitehaven">Whitehaven Beach is a 7 km stretch along Whitsunday Island, Australia. The island is
              accessible by boat,
              seaplane & helicopter from Airlie Beach, as well as Hamilton Island. It lies across from Stockyard Beach,
              better known as Chalkie's Beach, on Haslewood Island. The beach is known for its crystal white silica
              sands
              and turquoise coloured waters. The beach has tour barbeque and camping facilities.</p>
            <p>The beach was named and discovered in 1879 by Staff Commander EP Bedwell. 'Whitehaven' was one of the
              many
              names, from the then English county of Cumberland, which Bedwell brought to the area. It followed James
              Cook's
              1770 naming of the island group, the Cumberland Islands.</p>
          </div>
        </v-card>
        <p ref="target_scroll"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ducimus error nesciunt perspiciatis praesentium reiciendis. Corporis culpa ex expedita fugit impedit incidunt molestiae molestias officiis, quas quidem suscipit totam voluptatem!</p>

        <div id="app">
          <v-app>
            <v-main>
              <v-container>
                <v-card ref="card"
                        class="overflow-y-auto mx-auto"
                        max-height="400"
                        max-width=""
                        outlined>
                  <v-img
                      class="white--text align-end"
                      height="200px"
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                    <v-card-title>
                      Whitehaven Beach

                    </v-card-title>
                  </v-img>

                  <v-card-text>
                    <p>Whitehaven Beach is a 7 km stretch along Whitsunday Island, Australia. The island is accessible
                      by boat, seaplane & helicopter from Airlie Beach, as well as Hamilton Island. It lies across from
                      Stockyard Beach, better known as Chalkie's Beach, on Haslewood Island. The beach is known for its
                      crystal white silica sands and turquoise coloured waters. The beach has tour barbeque and camping
                      facilities.</p>
                    <p>The beach was named and discovered in 1879 by Staff Commander EP Bedwell. 'Whitehaven' was one of
                      the many names, from the then English county of Cumberland, which Bedwell brought to the area. It
                      followed James Cook's 1770 naming of the island group, the Cumberland Islands.</p>
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
  </div>

</template>
<script>
import * as easings from 'vuetify/es5/services/goto/easing-patterns'
import About from "@/views/sub_views/About";

export default {
  components: {
    About,
  },
  data() {
    return {
      type: 'number',
      number: 9999,
      selector: '#scroll-with-options',
      selected: 'Button',
      elements: ['Button', 'Radio group'],
      duration: 300,
      offset: 0,
      easing: 'easeInOutCubic',
      easings: Object.keys(easings),
    }
  },
  methods:{
    scrollToPoint(){
      this.$vuetify.goTo(this.$refs.text_div, {
        // the options
        duration: 900,
        offset: -300, //this is offset y
        easing: "easeInOutCubic",
      })
      }
    },
  computed: {
    target() {
      const value = this[this.type]
      console.log("the value in target computed is " + Number (value))
      if (!isNaN(value)) return Number(value)
      else return value
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      }
    },
    element() {
      if (this.selected === 'Button') return this.$refs.button
      else if (this.selected === 'Radio group') return this.$refs.radio
      else return null
    },
  },
}
</script>


