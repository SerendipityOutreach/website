<template>
  <v-container>


    <v-expansion-panels
        v-for="(curriculum, i) in target_curriculum_array"
        :key="i"
        class="my-3"
        color="pink lighten-5"
        elevation="2"
    >
      <v-expansion-panel v-if="curriculum.show">
        <v-expansion-panel-header>
          <v-col cols="11">
            <h2>Week {{ curriculum.week }}: {{ curriculum.name }}</h2>
          </v-col>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <v-list-item :href="curriculum.documentation" target="_blank">Documentation: {{
              curriculum.name
            }}
          </v-list-item>
          <v-list-item :href="curriculum.student_link" target="_blank">Student Project: {{
              curriculum.name
            }}
          </v-list-item>
          <v-list-item :href="curriculum.teacher_link" target="_blank">Teacher Project: {{
              curriculum.name
            }}
          </v-list-item>
        </v-expansion-panel-content>

      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import {exploration_curriculum, sortCurriculum} from "@/components/curriculum/CurriculumData";
import {getCollection} from "@/backend/backend";
import EditCurriculum from "@/components/curriculum/EditCurriculum";

export default {
  name: "CurriculumContent",
  components: {

  },
  props: {
  },

  data() {
    return {}
  },

  mounted() {
  },

  beforeUpdate() {
  }
}
</script>

