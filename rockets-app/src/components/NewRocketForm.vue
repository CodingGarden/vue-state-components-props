<template lang="html">
  <section>
    <button
      @click="showForm = !showForm"
      type="button"
      class="btn btn-danger">
      Show Form
    </button>
    <form v-if="showForm" @submit.prevent="onAddRocket">
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="rocket.name" type="text" name="name" id="name" value="" class="form-control">
      </div>
      <div class="form-group">
        <label for="country">Country</label>
        <input v-model="rocket.country" type="text" name="country" id="country" value="" class="form-control">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea v-model="rocket.description" type="text" name="description" id="description" value="" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input v-model="rocket.image" type="text" name="image" id="image" value="" class="form-control">
      </div>
      <button type="submit" class="btn btn-success">Add Rocket</button>
    </form>
  </section>
</template>

<script>
function getEmptyRocket() {
  return {
    name: '',
    description: '',
    country: '',
    image: '',
  };
}

export default {
  data: () => ({
    showForm: false,
    rocket: getEmptyRocket(),
  }),
  methods: {
    onAddRocket() {
      this.$store.commit('addRocket', this.rocket);
      this.rocket = getEmptyRocket();
      this.showForm = false;
    },
  }
};
</script>

<style lang="css">
</style>
