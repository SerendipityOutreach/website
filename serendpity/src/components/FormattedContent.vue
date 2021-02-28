<template>
<div>
  <div
      v-for="description in content_list"
      :key="description.title"

  >
    <p>{{description.type}}</p>
    <p>{{description}}</p>
    <PicLeft
        v-if="description.type === `LeftPic`"
        :content="description"
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
    max_height: String,
  },
  components: {PicRight, PicLeft}
}
</script>

<style scoped>

</style>