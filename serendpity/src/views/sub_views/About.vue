<template>
  <div>
    <div
        v-for="description in AboutContent"
        :key="description.title"
    >
      <AboutUs
          v-if="description.type === `LeftPic`"
          :image_input="description.image"
          :title="description.title"
          :description="description.description"
      ></AboutUs>
    </div>
  </div>
</template>

<script>
import PicLeft from "@/components/PicLeft";
import {AboutContent} from "@/assets/Descriptions";

export default {
  name: 'About',

  components: {
    AboutUs: PicLeft,
  },

  props: {},

  data() {
    return {
      //note you can also create a local copy of AboutContent by saying
      //localAboutContent: AboutContent
      AboutContent,
    }
  }
}
</script>
