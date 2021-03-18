<template>
  <div id="list-container">
    <div class="img-header"></div>
    <h2 class="section-header">
      Game Systems Played <span v-text="gameList.length"></span>
    </h2>
    <ul class="custom-list">
      <list-item
        class="custom-list-item"
        v-for="(game, index) in gameList"
        :key="index"
        v-text="game"
      ></list-item>
    </ul>
    <form
      id="add-game-form"
      class="d-flex justify-content-between mt-3"
      @submit.prevent="populateList"
    >
      <input
        type="text"
        class="add-item-text"
        placeholder="Add Game"
        ref="addText"
      />
      <button class="game-button">Add Game</button>
    </form>
  </div>
</template>

<script>
import ListItem from "./Assignment8ListItem";
export default {
  name: "Assignment8",
  components: { ListItem },
  data() {
    return {
      text: "Pathfinder 1e",
      gameList: [],
    };
  },
  methods: {
    initiateList() {
      const list = [
        "Pathfinder Roleplaying Game",
        "Dungeons & Dragons 5e",
        "Savage Worlds",
        "Cortex Systems",
      ];
      for (let i = 0; i < list.length; i++) {
        this.delay(list[i], i);
      }
    },
    delay(item, index) {
      setTimeout(() => this.gameList.push(item), 500 * index);
    },
    populateList() {
      let item = this.$refs.addText.value;
      this.delay(item, 1);
    },
  },
  mounted() {
    this.initiateList();
  },
};
</script> 

<style lang="scss">
@import "@/assets/list-king.scss";
.custom-list {
  padding: 0;
  margin: 0;
}

.section-header span {
  background-color: $white;
  color: black;
  border-radius: 50%;
  display: inline-block;
  font-size: 0.75em;
  width: 1.25em;
  height: 1.25em;
}

#add-game-form {
  margin-top: 5em;
}

.add-item-text {
  background-color: $grey;
  color: #333;
  font-size: 24px;
  width: 90%;
  padding: 0.15em 1em;
  border: 1px solid $grey;
  border-radius: 8px;
  margin: 0.05em 0 0 .35em;
}

.game-button {
  background-color: #cb6868;
  color: $white;
  border-radius: 8px;
  border: none;
  padding: 4px 6px;
  margin: 0 1em;
  font-size: smaller;
  text-decoration: none;
  text-transform: uppercase;
}

.game-button:hover {
  background-color: #913c3c;
}
</style>