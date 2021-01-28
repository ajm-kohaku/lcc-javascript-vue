<template>
  <div>
    <h2 v-text="title"></h2>
    <p v-text="ipsumText"></p>
  </div>
</template>

<script>
export default {
  name: "JsAssignment3",
  data: () => {
    return {
      title: "Assignment 3",
    ipsumText:
      "We can fix anything. I thought today we would make a happy little stream that's just running through the woods here. That's a son of a gun of a cloud. The shadows are just like the highlights, but we're going in the opposite direction. Of course he's a happy little stone, cause we don't have any other kind. A fan brush can be your best friend.",
    } 
  },
};
</script> 