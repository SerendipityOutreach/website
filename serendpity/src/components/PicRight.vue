<template>
  <div>
    <v-row no-gutters>
      <v-col>
        <v-card
            :color="this.content.color"
            dark
            height="100%"
        >
          <v-card-title class="headline text-h3" style="">
            {{ this.content.title }}
          </v-card-title>

          <v-card-subtitle class="headline text-h6" style="margin-top: 10px">
            {{ this.content.description }}
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="7">
        <v-card>
          <v-img :src="require(`@/assets/img/${this.content.image}`)"></v-img>
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
   content: Object,
  },

  data() {
    return {}
  },

  methods: {},

}
</script>

<style scoped>

</style>