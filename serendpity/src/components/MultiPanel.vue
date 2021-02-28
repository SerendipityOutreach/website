<template>
  <div>
    <v-row>
      <v-col>
        <!--         v-for="foo in this.content_array"
                  :key="foo"-->
        <v-card
            :color="this.content.color"
            dark
            height="100%"

        >
          <!--          :img="require(`@/assets/img/${this.content.image}`)"-->

            <v-row v-for="i in 3" :key="i">
              <v-col cols="4">
                <v-card-title
                    class="text-h3">
                  <!--                {{ this.content.title }}-->
                  <p>hi</p>
                </v-card-title>

              </v-col>
            </v-row>

          <!--          <v-card-subtitle class="headline text-h6 white&#45;&#45;text" style="margin-top: 10px">-->
          <!--            {{ this.content.description }}-->
          <!--          </v-card-subtitle>-->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "MultiPanel",
  props: {
    content: Object,
  },
}
</script>

<style scoped>

</style>