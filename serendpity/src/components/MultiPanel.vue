<template>
  <div>
    <v-row>
      <v-col>
        <v-card
            :color="this.content.color"
            :img="require(`@/assets/img/${this.content.image}`)"
            dark
            height="100%"
        >
          <v-row
              :style="[{paddingTop: content.image_length/2 + `px`, paddingBottom: content.image_length/2 + `px`}]"
          >
            <v-col v-for="i in 3" :key="i" cols="4">
              <v-card :color="content.color" class="rounded-lg">
                <v-card-title v-if="i===2" class="text-h3 ml-7" v-text="content.title"></v-card-title>
              </v-card>
            </v-col>
          </v-row>

          <v-row
              class="mx-0"
          >
<!--            cols length are dynamically resized so that they are always centered -->
            <v-col v-for="text_block in content.descriptions" :key="text_block" :cols="12/content.descriptions.length">
              <v-card
                  class="mb-12 rounded-lg"
                  :color="content.color"
              >
                <v-card-subtitle class="headline text-h6 white--text" v-text="text_block"></v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>

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
  data() {
    return {}
  },
}
</script>

<style scoped>

</style>