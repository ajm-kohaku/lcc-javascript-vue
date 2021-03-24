<template>
  <div>
    <form action="/assgmt-9-submission">
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
        <textarea class="form-control" id="description" rows="5"/>
      </div>
      <button type="submit" class="btn btn-primary float-right">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Assignment9LocalStorage",
  data() {
    return {};
  },
};
</script> 