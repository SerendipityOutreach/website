<template>
  <v-container>
<!--    TODO fix this styling-->
    <p>Learn About Our Mission</p>
    <template>
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
            color="purple lighten-2"
            fill-dot
            right
        >
          <v-card>
            <v-card-title class="purple lighten-2">
              <v-icon
                  dark
                  size="42"
                  class="mr-4"
              >
                mdi-magnify
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">
                What is Serendipity?
              </h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col
                    cols="12"
                    md="9"
                >
                  Serendipity STEM is a student-led collaborative outreach community of individuals and robotics teams in the Bay Area.

                </v-col>
                <v-col
                    class="hidden-sm-and-down text-right"
                    md="2"
                    style="margin-right: 0px"
                >
                  <v-icon size="64">
                    mdi-home-heart
                  </v-icon>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item
            color="amber lighten-1"
            fill-dot
            left
            small
        >
          <v-card>
            <v-card-title class="amber lighten-1 justify-end">
              <h2 class="display-1 mr-4 white--text font-weight-light">
                Title 2
              </h2>
              <v-icon
                  dark
                  size="42"
              >
                mdi-home-outline
              </v-icon>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col
                    cols="12"
                    md="8"
                >
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                </v-col>
                <v-col
                    cols="12"
                    md="4"
                >
                  Lorem ipsum dolor sit amet, no nam oblique veritus.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item
            color="cyan lighten-1"
            fill-dot
            right
        >
          <v-card>
            <v-card-title class="cyan lighten-1">
              <v-icon
                  class="mr-4"
                  dark
                  size="42"
              >
                mdi-email-outline
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">
                Title 3
              </h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col
                    v-for="n in 3"
                    :key="n"
                    cols="12"
                    md="4"
                >
                  Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item
            color="red lighten-1"
            fill-dot
            left
            small
        >
          <v-card>
            <v-card-title class="red lighten-1 justify-end">
              <h2 class="display-1 mr-4 white--text font-weight-light">
                Title 4
              </h2>
              <v-icon
                  dark
                  size="42"
              >
                mdi-account-multiple-outline
              </v-icon>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col
                    class="hidden-sm-and-down"
                    md="2"
                >
                  <v-icon size="64">
                    mdi-server-network
                  </v-icon>
                </v-col>
                <v-col
                    cols="12"
                    md="10"
                >
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item
            color="green lighten-1"
            fill-dot
            right
        >
          <v-card>
            <v-card-title class="green lighten-1">
              <v-icon
                  class="mr-4"
                  dark
                  size="42"
              >
                mdi-phone-in-talk
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">
                Title 5
              </h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col>
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </template>
  </v-container>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>