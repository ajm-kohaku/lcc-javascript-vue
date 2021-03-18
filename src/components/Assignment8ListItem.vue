<template>
  <li class="custom-list-item"><span v-text="itemText"></span></li>
</template>
<script>
export default {
  name: "ListItem8",
  props: {
    itemText: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/list-king.scss";

.custom-list-item {
  color: $white;
  border-top: 1px solid $white;
  border-bottom: 1px solid $primary;
  font-size: 24px;
  letter-spacing: 0.05em;
  list-style-type: none;
  text-shadow: 2px 2px 1px $primary;
  padding: .25em 0 .25em .5em;
  animation-name: intro;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}

@keyframes intro {
  from {
    background-color: $brown;
    opacity: 0;
    transform: translateY(0);
  }

  75% {
    opacity: 100;
  }
  to {
    background-color: $blue-grey;
  }
}
</style>