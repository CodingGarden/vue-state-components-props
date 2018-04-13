<template lang="html">
  <div class="card col-4">
    <div>
      <img class="card-img-top rocket-image" :src="rocket.image" :alt="rocket.name">
    </div>
    <div class="card-body">
      <h5 class="card-title">{{rocket.name}}</h5>
      <p class="card-text">{{rocket.description}}</p>
      <button @click="removeRocket(rocket)" class="btn btn-danger">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['rocket'],
  methods: mapMutations(['removeRocket']),
};
</script>

<style media="screen">
.rocket-image {
  height: 400px;
  width: auto !important;
  margin: 0 auto;
}
</style>
