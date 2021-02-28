<template>
  <div>
    <FormattedAbout
        :content_list="AboutContent"
        :max_height="`10px`"
    ></FormattedAbout>
  </div>
</template>

<script>
import {AboutContent} from "@/assets/descriptions/AboutDescription";
import FormattedContent from "@/components/FormattedContent";

export default {
  name: 'About',

  components: {
    FormattedAbout: FormattedContent
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
