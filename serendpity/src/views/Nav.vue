<template>
  <div>
    <v-row class="">
      <v-col cols="7">
        <v-timeline v-for="section in NavDescriptions" :key="section.color">
          <div @click="broadcastScrollSection(section.section_name)">
            <v-timeline-item >
              {{ section.section_name }}
            </v-timeline-item>
          </div>

          <div v-for="sub_section in section.content" :key="sub_section.title"
               @click="broadcastScrollSection(sub_section.title)">
            <v-timeline-item
                :color="section.color + ` lighten-2`"
                small
            >
              {{ sub_section.title }}
            </v-timeline-item>
          </div>

        </v-timeline>
      </v-col>
      <v-col cols="5"></v-col>
    </v-row>
  </div>
</template>

<script>
import {NavDescriptions} from "@/assets/descriptions/NavDescriptions";

export default {
  name: "Nav",
  data() {
    return {
      NavDescriptions
    }
  },
  methods: {
    broadcastScrollSection(scrollSection){
      console.log("Broadcasting scroll section " + scrollSection)
      this.$emit("scrollRequest", scrollSection)
    }
  }
}
</script>

<style scoped>

</style>