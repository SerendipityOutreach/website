<template>
  <div>
    <PicLeft :content="this.description"></PicLeft>
    <PicRight
        :title="description.title"
        :image_input="description.image"
        :color="description.color"
        :description="description.description"
        style="margin-bottom: 10px"
    ></PicRight>
    {{foo_content}}
    {{this.foo_content}}
  </div>
</template>

<script>
import PicLeft from "@/components/PicLeft";
import PicRight from "@/components/PicRight";
export default {
  name: "Test",
  components: {PicLeft, PicRight},
  data(){
    return{
      description: {
        type: "LeftPic",
        title: "Who are we?",
        image: "FullLogo.png",
        color: "red lighten-2",
        description: "Serendipity STEM is a student-led outreach community of and FIRST Tech Challenge teams in the Bay Area.",
      },
    }
  }
}
</script>

<style scoped>

</style>