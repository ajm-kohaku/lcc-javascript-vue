<template>
  <div class="accordion">
      <div class="accordion-header" v-html="aHeader" @click="toggleAccordion"></div>
      <div class="accordion-message" :class= "{open: isOpen}" v-html="aMessage"></div>
    </div>
</template>

<script>
export default {
  name: 'Assignment9Accordion',
  data() {
    return {
      isOpen: false
    }
  },
  props: [ 'aHeader', 'aMessage'  ],
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script> 

<style lang="scss" scoped>
.accordion {
  margin: .95em 0;
  box-shadow: .05em .15em .35em grey;
}

.accordion-header {
  background-color: $secondary-accent;
  color: $main-bg-color;
  padding: .25em 1em;
}

.accordion-header:hover {
  cursor: pointer;
}

.accordion-message {
  border: none;
  height: 0;
  overflow: hidden;
  transition: .3s ease all;
  background-color: lightgrey;
}

.open {
  height: 5em;
  border: .15em solid $secondary-accent;
  padding: .5em;
  
}
  
</style>