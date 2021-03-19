<template>
  <li
    class="item list-item-intro d-flex justify-content-between"
    :class="{ 'list-item-clicked': isClicked, 'list-item': isListItem }"
    @click="clickListItem"
    ref="item"
  >
    <div>
      <span v-text="itemText"></span>
    </div>
    <div>
      <button
        v-if="isTrashCan"
        class="trash-can"
        aria-label="delete"
        @click.prevent="toDelete"
        type="button"
      >
        &#128465;&#65039;
      </button>
    </div>
  </li>
</template>
<script>
export default {
  name: "ListItem",
  data() {
    return {
      isClicked: false,
      isListItem: true,
      isTrashCan: false,
    };
  },
  props: {
    itemText: {
      type: String,
      required: true,
    },
  },
  methods: {
    clickListItem() {
      this.isClicked = !this.isClicked;
      this.isTrashCan = !this.isTrashCan;
      console.log("list item clicked");
    },
    toDelete() {
      this.$emit("isDelete", this.itemText);
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/list-king.scss";

.item {
  color: $white;
  border-top: 1px solid $white;
  border-bottom: 1px solid $primary;
  font-size: 24px;
  letter-spacing: 0.05em;
  list-style-type: none;
  text-shadow: 2px 2px 1px $primary;
}

.item span {
  padding: 0.25em 0 0.25em 0.5em;
}

.list-item-intro {
  animation-name: intro;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.list-item-clicked {
  background-color: $brown;
  animation-name: pre-delete;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.trash-can {
  padding: 0 0.25em;
  border-left: 1px solid $main-bg-color;
  text-decoration: none;
  background-color: $brown;
}

.trash-can:hover,
.trash-can:focus {
  background-color: $grey;
}

@keyframes pre-delete {
  from {
    background-color: $blue-grey;
  }

  to {
    background-color: $brown;
  }
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