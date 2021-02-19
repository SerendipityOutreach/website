<template>

  <v-app style="
  background: #3A1C71;
  background: -webkit-linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71);
  background: linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71);
/*  credits: User Blue Frog from https://stackoverflow.com/questions/50243769/vuetify-how-to-set-background-color*/
  min-width: 856px;
/*  todo fix sizing error when resizing window*/
"
  >
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style>
</style>