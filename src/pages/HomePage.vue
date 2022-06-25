<template>
  <main class="home-page">
    <BaseContainer>
      <ApartmentsFilterForm class="apartment-filter" @submitForm="filter" />

      <p v-if="!filteredApartmens.length">
        Ничего не найдено
      </p>

      <ApartmentsList v-else :items="filteredApartmens">
        <template v-slot:title></template>
        <template v-slot:apartment="{ apartment }">
          <ApartmentsItem
            :key="apartment.id"
            :id="apartment.id"
            :descr="apartment.descr"
            :rating="apartment.rating"
            :src="apartment.imgUrl"
            :price="apartment.price"
          />
        </template>
      </ApartmentsList>
    </BaseContainer>
  </main>
</template>

<script>
import BaseContainer from '../components/shared/BaseContainer.vue';
import ApartmentsList from '../components/apartment/ApartmentsList.vue';
import ApartmentsItem from '../components/apartment/ApartmentsItem.vue';
import ApartmentsFilterForm from '../components/apartment/ApartmentsFilterForm.vue';
import { getApartmentsList } from '@/services/apartment.services';

export default {
  name: 'HomePage',
  components: {
    BaseContainer,
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
  
  },
  data() {
    return {
      apartments: [],
      filters: {
        city: '',
        price: '',
      },
    };
  },
  async created() {
    try {
     const {data} = await getApartmentsList();
     this.apartments = data;
    } catch (error) {
      console.error(error)
    }
  },
  computed: {
    filteredApartmens() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },

  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },

    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter(
        apartment => apartment.location.city === this.filters.city,
      );
    },

    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;
      return apartments.filter(
        apartment => apartment.price >= this.filters.price,
      );
    },
  },
};
</script>

<style>
.apartment-filter {
  margin-bottom: 39px;
  padding-top: 120px;
}
</style>
