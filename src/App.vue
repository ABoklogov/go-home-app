<template>
  <div>
    <BaseContainer>
      <ApartmentFilterForm class="apartment-filter" @submitForm="filter" />

      <ApartmentsList :items="filteredApartmens">
        <template v-slot:title></template>
        <template v-slot:apartment="{ apartment }">
          <ApartmentsItem
            :key="apartment.id"
            :descr="apartment.descr"
            :rating="apartment.rating"
            :imgSrc="apartment.imgUrl"
            :price="apartment.price"
            @click.enter="handleClick"
          />
        </template>
      </ApartmentsList>
    </BaseContainer>
  </div>
</template>

<script>
import BaseContainer from './components/shared/BaseContainer.vue';
import ApartmentsList from './components/apartment/ApartmentsList.vue';
import apartmens from './components/apartment/apartment';
import ApartmentsItem from './components/apartment/ApartmentsItem.vue';
import ApartmentFilterForm from './components/apartment/ApartmentFilterForm.vue';

export default {
  name: 'App',
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
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.apartment-filter {
  margin-bottom: 39px;
}
</style>
