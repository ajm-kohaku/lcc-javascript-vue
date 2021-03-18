<template>
  <div id="list-container">
    <div class="img-header"></div>
    <h2 class="section-header">Game Systems Played</h2>
    <div v-text="inputText" class="input-message"></div>
    <form action="">
      <div class="input-section">
        <label for="inputText" class="text-white">Game System</label>
        <input
          type="text"
          name="inputText"
          id="inputText"
          v-model="inputText"
          class="input-text"
          maxlength="30"
        />
      </div>
    </form>
    <div class="button-section">
      <button
        class="play"
        :class="{ record: isRecord }"
        @click="toggleRecord"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Assignment7",
  data() {
    return {
      inputText: "",
      isRecord: true,
    };
  },
  methods: {
    toggleRecord() {
      this.isRecord = !this.isRecord;
    },
  },
};
</script> 

<style scoped lang="scss">
@import "@/assets/list-king.scss";

.input-message {
  min-height: 1.5em;
  text-align: center;
  font-weight: 500;
}

.input-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-section label {
  font-size: 1.25em;
  margin: 1em;
}

.button-section {
  display: flex;
  justify-content: center;
}

.play {
  background-image: url(~@/assets/img/pause.png);
  display: inline-block;
  border: none;
  text-decoration: none;
  height: 6.25em;
  width: 6.25em;
  background-color: transparent;
}

.play.record {
  background-image: url(~@/assets/img/record.png);
}
</style>