<template>
  <div>
    <div v-if="showForm">
      <form @submit.prevent="showForm = false">
        <div class="form-group">
          <label for="summary">Summary</label>
          <input
            type="text"
            class="form-control"
            id="summary"
            placeholder="Summary"
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control" id="description" rows="5" />
        </div>
        <button type="submit" class="btn btn-primary float-right">Save</button>
      </form>
    </div>
    <submitted v-else @return="showForm = true" />
  </div>
</template>

<script>
import Submitted from './Assignment9Submission'

export default {
  name: 'Assignment9LocalStorage',
  components: { Submitted },
  data() {
    return {
      showForm: true,
    }
  },
}
</script> 