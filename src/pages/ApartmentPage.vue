<template>
  <main class="apartment-page">
    <BaseContainer>
      <ApartmentsMainInfo
      :apartments="findApartment"/>
      <!-- <ApartmentsOwner/> -->
    </BaseContainer>
  </main>
</template>

<script>
import BaseContainer from '../components/shared/BaseContainer.vue';
import ApartmentsMainInfo from '../components/apartment/ApartmentsMainInfo.vue';
// import ApartmentsOwner from '../components/apartment/ApartmentsMainInfo.vue';
import apartments from '../components/apartment/apartments';


  export default {
    name: 'ApartmentPage',
    components: {
      BaseContainer,
      ApartmentsMainInfo,
      // ApartmentsOwner,
    },  
    computed: {
      findApartment() {
      return apartments.find(apartment => apartment.id === this.$route.params.id)
      },
    },
  }
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 72px;
}
</style>