<template>
  <div class="accordion-section">
    <div v-for="data in accordionData" :key="data.id">
      <accordion :aHeader="data.header" :aMessage="data.message" />
    </div>
  </div>
</template>

<script>
import Accordion from "./Assignment9Accordion.vue";
export default {
  name: "Assignment9",
  components: {
    Accordion,
  },
  data() {
    return {
      accordionData: [
        {
          id: 1,
          header: "Accordion Example",
          message:
            "This page represents an example of accordion design. It is very simple and can help save screen real estate.",
        },
        {
          id: 2,
          header: "Local Storage Example",
          message:
            'The next mini exercise is to emulate <em><a href="assgmt-9-local-storage">local storage</a></em>. In practice, however, we just submit a form and simulate a response.',
        },
        {
          id: 3,
          header: "Photo Viewer Example",
          message:
            "The next mini exercise is to demonstrate a <em><a href=\"assgmt-9-photo-viewer\">photo viewer</a></em>. Please go to the photo viewer example to view it.",
        },
      ],
    };
  },
};
</script> 

<style lang="scss" scoped>
.accordion-section {
  margin: 2em auto;
}
</style>