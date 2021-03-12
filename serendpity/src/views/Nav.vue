<template>
  <div class="pl-6 pt-3">
    <v-row>
      <v-navigation-drawer
      >
        <div v-for="section in NavDescriptions" :key="section.color">

          <v-list
              nav
              dense
          >

            <v-list-item-group v-model="list_selection">
              <div v-for="sub_section in section.content" :key="sub_section.title"
                   @click="broadcastScrollSection(sub_section.title)"
              >
                <v-list-item>
                  <v-list-item-icon>

                    <v-icon v-text="section.image"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{ sub_section.title }}</v-list-item-title>
                </v-list-item>


              </div>
            </v-list-item-group>
          </v-list>
        </div>
      </v-navigation-drawer>
    </v-row>
  </div>
</template>

<script>
import {NavDescriptions} from "@/assets/descriptions/NavDescriptions";

export default {
  name: "Nav",
  data() {
    return {
      NavDescriptions,
      list_selection: 0,
    }
  },
  methods: {
    broadcastScrollSection(scrollSection) {
      console.log("Broadcasting scroll section " + scrollSection)
      this.$emit("scrollRequest", scrollSection)
    }
  }
}
</script>

<style scoped>

</style>