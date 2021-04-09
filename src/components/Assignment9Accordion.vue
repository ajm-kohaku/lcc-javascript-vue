<template>
  <div class="accordion">
    <div
      class="accordion-header"
      v-html="aHeader"
      @click="toggleAccordion"
    ></div>
    <div
      class="accordion-message"
      :class="{
        open: isOpen,
        'local-storage': isLocalStorage,
        'photo-viewer': isPhotoViewer,
      }"
    >
      <div v-html="aMessage"></div>
      <local-storage v-if="aComponent === 'local-storage'" />
      <photo-viewer v-if="aComponent === 'photo-viewer'" />
    </div>
  </div>
</template>

<script>
import LocalStorage from './Assignment9LocalStorage'
import PhotoViewer from './Assignment9PhotoViewer'

export default {
  name: 'Assignment9Accordion',
  components: {
    LocalStorage,
    PhotoViewer,
  },
  data() {
    return {
      isOpen: false,
      isLocalStorage: false,
      isPhotoViewer: false,
    }
  },
  props: ['aHeader', 'aMessage', 'aComponent'],
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen
      if (this.aComponent === 'local-storage') {
        this.isLocalStorage === true
      } else if (this.aComponent === 'photo-viewer') {
        this.isPhotoViewer === true
      }
    },
    setComponent(comp) {
      if (comp === 'local-storage') {
        this.isLocalStorage = true
      } else if (comp === 'photo-viewer') {
        this.isPhotoViewer = true
      }
    },
  },
  watch: {
    aComponent(comp) {
      this.setComponent(comp)
    }
  },
}
</script> 

<style lang="scss" scoped>
.accordion {
  margin: 0.95em 0;
  box-shadow: 0.05em 0.15em 0.35em grey;
}

.accordion-header {
  background-color: $secondary-accent;
  color: $main-bg-color;
  padding: 0.25em 1em;
}

.accordion-header:hover {
  cursor: pointer;
}

.accordion-message {
  border: none;
  height: 0;
  overflow: hidden;
  transition: 0.5s ease all;
  background-color: lightgrey;
}

.open {
  height: 100%;
  border: 0.15em solid $secondary-accent;
  padding: 0.5em;
}

</style>