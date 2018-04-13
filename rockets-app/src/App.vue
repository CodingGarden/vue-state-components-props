<template>
  <section>
    <nav-bar></nav-bar>
    <rockets class="container mt-2"></rockets>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar';
import Rockets from '@/views/Rockets.vue';

export default {
  name: 'app',
  components: {
    Rockets,
    NavBar,
  },
};
</script>

<style>
</style>
