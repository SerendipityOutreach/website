<template>
  <div>
    <v-row no-gutters>
      <v-col>
        <v-card
            :color="color"
            dark
            height="100%"
        >
          <v-card-title class="headline text-h3" style="flex-direction: row-reverse">
            {{ this.title }}
          </v-card-title>

          <v-card-subtitle class="headline text-h6" style="margin-top: 10px">
            {{ this.description }}
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="7">
        <v-card>
          <v-img :src="require(`@/assets/img/${image_input}`)"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PicRight",
  components: {},

  props: {
    image_input: String,
    title: String,
    description: String,
    color: String
  },

  data() {
    return {}
  },

  methods: {},

}
</script>

<style scoped>

</style>