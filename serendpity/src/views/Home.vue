<template>
  <div>
    <AboutUs :image_input="`FullLogo`"></AboutUs>
  </div>
</template>

<script>
// @ is an alias to /src\

import PicLeft from "@/components/PicLeft";

export default {
  name: 'Home',

  components: {
    AboutUs: PicLeft,
  },

  props: {},

  data() {
    return {}
  }
}
</script>
