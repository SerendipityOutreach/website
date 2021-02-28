<template>
  <div>
    <MultiPanel :content="content"></MultiPanel>
  </div>
</template>

<script>



import MultiPanel from "@/components/MultiPanel";

export default {
  name: "Test",
  components: {MultiPanel},
  data() {
    return {
      content: {
        type: "TripleView",
        title: "Our Passion",
        image: "Bridge.jpg",
        color: "orange darken-2",
        descriptions: [
          "Although Silicon Valley is the heart of technology, Special Education students do not have the same access to STEM opportunities as General Education students.",
          "Although Silicon Valley is the heart of technology, Special Education students do not have the same access to STEM opportunities as General Education students.",
          "Although Silicon Valley is the heart of technology, Special Education students do not have the same access to STEM opportunities as General Education students.",
        ],
      },
      content_array: ["this", "little","light", "of", "mine"]
    }
  },
}
</script>

<style scoped>

</style>