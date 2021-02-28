<template>
  <div>
    <v-row>
      <v-col>
        <v-card
            :color="this.content.color"
            dark
            height="100%"
        >
          <!--          :img="require(`@/assets/img/${this.content.image}`)"-->

          <v-row>
            <v-col v-for="i in 3" :key="i" cols="4">
              <v-card-title class="text-h3" v-text="content.title"></v-card-title>
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
  data() {
    return {}
  },
}
</script>

<style scoped>

</style>