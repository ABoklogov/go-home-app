<template>
  <main class="apartment-page">
    <BaseContainer>
    <div v-if="apartment" class="apartment-page__content">
      <ApartmentsMainInfo :apartment="apartment"/>

      <div class="apartment-page__additional-info">
        <ApartmentsOwner
          class="apartment-page__owner"
          :owner="apartment.owner"
        />
        <ReviewsSection :reviews="reviewsList"/>
      </div>
    </div>
    </BaseContainer>
  </main>
</template>

<script>
import BaseContainer from '../components/shared/BaseContainer.vue';
import ApartmentsMainInfo from '../components/apartment/ApartmentsMainInfo.vue';
import ApartmentsOwner from '../components/apartment/ApartmentsOwner.vue';
import ReviewsSection from '../components/reviews/index.vue';
import reviewsList from '../components/reviews/reviews.json';
import {getApartmentById} from '@/services/apartment.services';

  export default {
    name: 'ApartmentPage',
    components: {
      BaseContainer,
      ApartmentsMainInfo,
      ApartmentsOwner,
      ReviewsSection,
    },  
    data() {
      return {
        apartment: null,
      }
    },
    async created() {
      const {id} = this.$route.params;
      try {
        const {data} = await getApartmentById(id);
        this.apartment = data;
      } catch (error) {
        console.error(error); 
      }
    },
    computed: {
      reviewsList() {
        return reviewsList
      },
    },
  }
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;
  &__content {
    display: flex;
    align-items: flex-start;
  }
  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>