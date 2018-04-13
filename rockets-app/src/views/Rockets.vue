<template lang="html">
  <section>
    <new-rocket-form>
    </new-rocket-form>
    <rocket-list>
    </rocket-list>
  </section>
</template>

<script>
import NewRocketForm from '@/components/NewRocketForm';
import RocketList from '@/components/RocketList';

export default {
  name: 'rockets',
  components: {
    NewRocketForm,
    RocketList,
  },
  async mounted() {
    this.$store.dispatch('getRockets');
  }
};
</script>

<style lang="css">
</style>
