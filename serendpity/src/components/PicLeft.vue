<template>
  <div>
    <p>2/3 and 1/3 template</p>

    <v-row no-gutters>
      <v-col cols="7">
        <v-card>
          <v-img :src="require(`@/assets/img/${image_input}.png`)"></v-img>
        </v-card>
      </v-col>

      <v-col>
        <v-card
            color="#385F73"
            dark
            height="100%"
        >
          <v-card-title class="headline " style="flex-direction: row-reverse">
            Unlimited music now
          </v-card-title>

          <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.
          </v-card-subtitle>

          <v-card-actions>
            <v-btn text>
              Listen Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>
  </div>
</template>

<script>
export default {
  name: "PicLeft",
  components: {},

  props: {
    image_input: String,
  },

  data() {
    return {}
  },

  methods: {},

}
</script>

<style scoped>

</style>