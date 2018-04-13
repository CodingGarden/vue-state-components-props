<template lang="html">
  <section>
    <button
      @click="showForm = !showForm"
      type="button"
      class="btn btn-danger">
      Show Form
    </button>
    <form v-if="showForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" value="" class="form-control">
      </div>
      <div class="form-group">
        <label for="country">Country</label>
        <input type="text" name="country" id="country" value="" class="form-control">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea type="text" name="description" id="description" value="" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input type="text" name="image" id="image" value="" class="form-control">
      </div>
      <button type="button" class="btn btn-success">Add Rocket</button>
    </form>
  </section>
</template>

<script>
export default {
  data: () => ({
    showForm: false,
  }),
};
</script>

<style lang="css">
</style>
