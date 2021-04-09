<template>
  <div>
    <h1 class="head-response">Thank You!</h1>
    <div class="message">Your fake submission has been fake recorded (づ｡◕‿‿◕｡)づ</div>
    <button class="btn btn-primary" @click="$emit('return')">Return</button>
  </div>
</template>

<script>
export default {
  name: 'Assignment9Submission',
  data() {
    return {
      
    }
  },
  emits: ['return']
}
</script> 

<style lang="scss" scoped>
  h1 {
    margin: 1em;
  }
</style>