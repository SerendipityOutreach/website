<template>
  <div>
    <!--    the actual button  -->
    <v-card
        color="blue"
        style="text-align: center; margin-top: 10px"
    >
      <v-btn
          @click="$vuetify.goTo(0)"
      >
        Learn more
      </v-btn>
      <v-card-subtitle>
        {{ show_student_view }}
      </v-card-subtitle>
    </v-card>

    <v-container>
      <v-row>

        <v-col cols="7">
          <v-card>
            <v-card-title>
              Student View
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="5">
          <v-card>
            <v-card-title>
              Stakeholders View
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

    </v-container>

  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      show_student_view: true,
    }
  },

  methods: {
    changeTeacherViewValue() {
      this.show_student_view = !this.show_student_view;
      console.log(`show teacher view status: ` + this.show_student_view)
    }
  },
}
</script>

<style scoped>

</style>