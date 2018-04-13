<template lang="html">
  <section>
    <new-rocket-form></new-rocket-form>
  </section>
</template>

<script>
import NewRocketForm from '@/components/NewRocketForm';
import API from '@/lib/API';

export default {
  name: 'rockets',
  components: {
    NewRocketForm
  },
  data: () => ({
    rockets: [],
  }),
  async mounted() {
    const rockets = await API.getRockets();
    console.log(rockets);
  },
};
</script>

<style lang="css">
</style>
