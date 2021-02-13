<template>
  <div id="list-container">
    <div class="img-header"></div>
    <h2 class="section-header">Game Systems Played</h2>
    <ul class="custom-list">
      <li
        class="custom-list-item"
        v-for="(item, index) in listItems"
        :key="index"
        :class="`${item.class}`"
      >
        <span v-html="item.game"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Assignment6",
  data() {
    return {
      listItems: [
        { game: "Pathfinder <em>Roleplaying Game</em>", class: "" },
        { game: "Dungeons &amp; Dragons 5e", class: "" },
        { game: "Savage Worlds", class: "" },
        { game: "Cortex Systems", class: "" },
      ],
    };
  },
  methods: {
    addToList() {
      let list = this.listItems;
      list.forEach((item) => (item.class = " subarashii"));
      list.push({ game: "Alternity", class: "custom-added-item" });
      list.unshift({ game: "Shadowrunner", class: "custom-added-item" });
    },
  },
  mounted() {
    this.addToList.call(this);
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/list-king.scss";

.custom-list {
  border: 0.19em solid $secondary;
  padding: 0;
  margin: 0;
}
.custom-list-item,
.subarashii {
  background-color: #8aa1b1;
  color: #fff;
  border-top: 0.0625em solid #e6e6e6;
  border-bottom: 0.0625em solid $primary;
  font-size: 1.5em;
  letter-spacing: 0.05em;
  list-style-type: none;
  text-shadow: .0625em .0625em $primary;
  height: 3.125em;
  padding-left: 1em;
  padding-top: 0.625em;
}
.custom-added-item {
  background-color: #66101f;
  color: #fff;
  text-shadow: .0625em .0625em #3b6a5e;
  border-top: 0.0625em solid #e6e6e6;
  border-bottom: 0.0625em solid #3b6a5e;
}
a[data-state="stop"] {
  background-image: url("../assets/img/pause.png");
}
a[data-state="record"] {
  background-image: url("../assets/img/record.png");
}
#buttons {
  height: 6.25em;
  width: 6.25em;
  margin: 0 auto;
}
#buttons a {
  width: 6.25em;
  height: 6.25em;
  text-indent: 100%;
  margin-top: 1.25em;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
}
label {
  color: #fff;
  display: block;
  margin: 0.625em 00.625em 0;
  font-size: 1.5em;
}
</style> 