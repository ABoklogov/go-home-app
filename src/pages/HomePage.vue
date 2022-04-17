<template>
  <main class="home-page">
    <BaseContainer>
      <ApartmentFilterForm class="apartment-filter" @submitForm="filter" />

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
import apartmens from '../components/apartment/apartment';
import ApartmentsItem from '../components/apartment/ApartmentsItem.vue';
import ApartmentFilterForm from '../components/apartment/ApartmentFilterForm.vue';

export default {
  name: 'HomePage',
  components: {
    BaseContainer,
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
  
  },

  data() {
    return {
      apartmens,
      filters: {
        city: '',
        price: '',
      },
    };
  },

  computed: {
    filteredApartmens() {
      return this.filterByCityName(this.filterByPrice(this.apartmens));
    },
  },

  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },

    filterByCityName(apartmens) {
      if (!this.filters.city) return apartmens;

      return apartmens.filter(
        apartment => apartment.location.city === this.filters.city,
      );
    },

    filterByPrice(apartmens) {
      if (!this.filters.price) return apartmens;
      return apartmens.filter(
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
