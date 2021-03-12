<template>
  <div>
    <FormattedAbout
        :content_list="AboutContent"
        :navDest="navDest"
        ref=""
    ></FormattedAbout>
  </div>
</template>

<script>
import {AboutDescription} from "@/assets/descriptions/AboutDescription";
import FormattedContent from "@/components/FormattedContent";

export default {
  name: 'About',

  components: {
    FormattedAbout: FormattedContent
  },

  props: {
    navDest: String,
  },

  data() {
    return {
      //note you can also create a local copy of AboutContent by saying
      //localAboutContent: AboutContent
      AboutContent: AboutDescription.descriptions,
    }
  },
  watch: {
    navDest: function (){
      // console.log("the navDest in Formatted content is " + this.navDest)
      // console.log("the reference " + this.$refs.text_div)
      console.log("fire from about navDest watcher")

    }
  },
}
</script>
