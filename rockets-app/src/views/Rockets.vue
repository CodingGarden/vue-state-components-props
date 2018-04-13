<template lang="html">
  <section>
    <new-rocket-form
      :addRocket="addRocket">
    </new-rocket-form>
    <rocket-list
      :removeRocket="removeRocket"
      :rockets="rockets">
    </rocket-list>
  </section>
</template>

<script>
import NewRocketForm from '@/components/NewRocketForm';
import RocketList from '@/components/RocketList';
import API from '@/lib/API';

export default {
  name: 'rockets',
  components: {
    NewRocketForm,
    RocketList,
  },
  data: () => ({
    rockets: [],
  }),
  async mounted() {
    this.rockets = await API.getRockets();
  },
  methods: {
    addRocket(rocket) {
      this.rockets.push(rocket);
    },
    removeRocket(rocket) {
      const index = this.rockets.indexOf(rocket);
      this.rockets.splice(index, 1);
    },
  },
};
</script>

<style lang="css">
</style>
