<template>
  <div>
    <div
        v-for="description in content_list"
        :key="description.title"
        :refs="description.name"
    >
      <PicLeft
          v-if="description.type === `LeftPic`"
          :content="description"
          style="margin-bottom: 10px"
          :ref="description.title"
      ></PicLeft>

      <PicRight
          v-if="description.type === `RightPic`"
          :content="description"
          style="margin-bottom: 25px"
          :ref="description.title"
      ></PicRight>

      <MultiPanel
          v-if="description.type === `TripleView`"
          :content="description"
          style="margin-bottom: 10px"
          :ref="description.title"
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
  data(){
    return{
      foo: "Passion",
    }
  },
  props: {
    content_list: Array,
    navDest: String,
  },
  components: {PicRight, PicLeft, MultiPanel},

  watch: {
    navDest: function () {
      // console.log("the navDest in Formatted content is " + this.navDest)
      // console.log("the reference " + this.$refs.text_div)
      console.log(this.$refs[this.navDest][0])
      this.$vuetify.goTo(this.$refs[this.navDest][0], {
        // the options
        duration: 900,
        offset: 0, //this is offset y
        easing: "easeInOutCubic",
      })

    },
  },
  methods: {
  },
}
</script>

<style scoped>

</style>