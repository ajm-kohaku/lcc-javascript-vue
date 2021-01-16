<template>
  <div id="list-container">
    <h1 class="list-header"></h1>
    <h2 id="list-sub-header">Game Systems Played</h2>
    <form action="fake-success.html">
      <div class="label-input">
        <label for="systemInput">Game System</label>
        <input type="text" id="systemInput" />
      </div>
      <div id="buttons">
        <a data-state="record" href="">record</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Assignment7",
};
</script>