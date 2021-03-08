<template>
  <div>
    <div
        v-for="description in content_list"
        :key="description.title"
    >
      <PicLeft
          v-if="description.type === `LeftPic`"
          :content="description"
          style="margin-bottom: 10px"
      ></PicLeft>

      <PicRight
          v-if="description.type === `RightPic`"
          :content="description"
          style="margin-bottom: 25px"
      ></PicRight>

      <MultiPanel
          v-if="description.type === `TripleView`"
          :content="description"
          style="margin-bottom: 10px"
      ></MultiPanel>

    </div>
  </div>
</template>

<script>
import PicLeft from "@/components/PicLeft";
import PicRight from "@/components/PicRight";
import MultiPanel from "@/components/MultiPanel";

export default {
  name: "FormattedContent",
  props: {
    content_list: Array,
    navDest: String,
  },
  components: {PicRight, PicLeft, MultiPanel},

  methods: {
    // scrollTo(dest){
    //   this.$vuetify.goTo(this.$refs.text_div, {
    //     // the options
    //     duration: 900,
    //     offset: -300, //this is offset y
    //     easing: "easeInOutCubic",
    //   })
    // }
  },
}
</script>

<style scoped>

</style>