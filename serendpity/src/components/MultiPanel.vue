<template>
  <div>
    <v-row>
      <v-col>
        <v-card
            :color="this.content.color"
            dark
            height="100%"
        >
<!--          :img="require(`@/assets/img/${this.content.image}`)"    -->
          <v-row>
            <v-col v-for="i in 3" :key="i" cols="4">
              <v-card-title v-if="i===2" class="text-h3 ml-7" v-text="content.title"></v-card-title>
            </v-col>
          </v-row>

          <v-row>
            <v-col v-for="text_block in content.descriptions" :key="text_block" cols="4">
              <v-card-subtitle class="headline text-h6 white--text" v-text="text_block"></v-card-subtitle>
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