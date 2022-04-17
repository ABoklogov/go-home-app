<template>
  <div class="apartment-page">
    <BaseContainer>
      <h1>Apartment Page</h1>
    </BaseContainer>
  </div>
</template>

<script>
import BaseContainer from '../components/shared/BaseContainer.vue';

  export default {
    name: 'ApartmentPage',
    components: {
      BaseContainer,
    },  
    mounted() {
      console.log(this.$router);
      console.log(this.$route);
    }
  }
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 100px;
}
</style>