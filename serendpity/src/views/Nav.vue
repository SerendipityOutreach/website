<template>
  <div>
    <v-timeline v-for="section in NavDescriptions" :key="section">
      <div>
        <v-timeline-item slot="opposite" :color="section.color"> {{ section.section_name }} </v-timeline-item>
      </div>

      <div v-for="sub_section in section.content" :key="sub_section">
        <v-timeline-item
            :color="section.color + ` lighten-2`"
            small
        >
          {{ sub_section.title }}
        </v-timeline-item>
      </div>

    </v-timeline>
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
  }
}
</script>

<style scoped>

</style>