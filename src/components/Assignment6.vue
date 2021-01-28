<template>
  <div id="list-container">
    <h1 class="list-header"></h1>
    <h2 class="list-sub-header">Game Systems Played</h2>
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

<style lang="scss">
#list-container {
  background-color: #000;
  font-family: "Oswald", "Futura", sans-serif;
  max-width: 480px;
  min-height: 350px;
  margin: 20px auto 20px auto;
  padding: 20px;
}
.list-header {
  background-image: url(../assets/img/kinglogo.png);
  background-repeat: no-repeat;
  background-position: center center;
  border-bottom: none;
  text-align: center;
  text-indent: -1000%;
  height: 75px;
  line-height: 75px;
  width: 117px;
  margin: 0 auto 0 auto;
  padding: 30px 10px 20px 10px;
}
.list-sub-header {
  border-bottom: none;
  color: #fff;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 23px 0;
}
.list-sub-header span {
  border-radius: 50%;
  background-color: #000;
  font-size: 10px;
  text-align: center;
  display: inline-block;
  position: relative;
  top: -5px;
  height: 18px;
  width: 20px;
  margin-left: 5px;
  padding: 4px 0 0 4px;
}
.custom-list {
  background-color: #584f4d;
  border: none;
  padding: 0;
  margin: 0;
}
.custom-list-item,
.subarashii {
  background-color: #8aa1b1;
  color: #fff;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #044389;
  font-size: 24px;
  letter-spacing: 0.05em;
  list-style-type: none;
  text-shadow: 2px 2px 1px #044389;
  height: 50px;
  padding-left: 1em;
  padding-top: 10px;
}
.custom-added-item {
  background-color: #66101f;
  color: #fff;
  text-shadow: 2px 2px 1px #3b6a5e;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #3b6a5e;
}
a[data-state="stop"] {
  background-image: url("../assets/img/pause.png");
}
a[data-state="record"] {
  background-image: url("../assets/img/record.png");
}
#buttons {
  height: 100px;
  width: 100px;
  margin: 0 auto;
}
#buttons a {
  width: 100px;
  height: 100px;
  text-indent: 100%;
  margin-top: 20px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
}
label {
  color: #fff;
  display: block;
  margin: 10px 0 10px 0;
  font-size: 24px;
}
</style> 