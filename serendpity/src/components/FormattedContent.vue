<template>
<div>
  <div
      v-for="description in content_list"
      :key="description.title"
  >
    <PicLeft
        v-if="description.type === `LeftPic`"
        :title="description.title"
        :image_input="description.image"
        :color="description.color"
        :description="description.description"
        style="margin-bottom: 10px"
    ></PicLeft>
    <PicRight
        v-if="description.type === `RightPic`"
        :title="description.title"
        :image_input="description.image"
        :color="description.color"
        :description="description.description"
        style="margin-bottom: 10px"
    ></PicRight>
  </div>
</div>
</template>

<script>
import PicLeft from "@/components/PicLeft";
import PicRight from "@/components/PicRight";
export default {
  name: "FormattedContent",
  props:{
    content_list: Array,
  },
  components: {PicRight, PicLeft}
}
</script>

<style scoped>

</style>