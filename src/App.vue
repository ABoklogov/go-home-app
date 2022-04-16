<template>
  <div id="app">
    <div class="content">
      <AppHeader/>
      <BaseContainer>
        <ApartmentFilterForm class="apartment-filter" @submitForm="filter" />

      <router-view></router-view>
        <p v-if="!filteredApartmens.length">Ничего не найдено</p>

        <ApartmentsList v-else :items="filteredApartmens">
          <template v-slot:title></template>
          <template v-slot:apartment="{ apartment }">
            <ApartmentsItem
              :key="apartment.id"
              :descr="apartment.descr"
              :rating="apartment.rating"
              :src="apartment.imgUrl"
              :price="apartment.price"
              @click.enter="handleClick"
            />
          </template>
        </ApartmentsList>
      </BaseContainer>
    </div>
    
  <AppFooter/>
  </div>
</template>

<script>
import BaseContainer from './components/shared/BaseContainer.vue';
import ApartmentsList from './components/apartment/ApartmentsList.vue';
import apartmens from './components/apartment/apartment';
import ApartmentsItem from './components/apartment/ApartmentsItem.vue';
import ApartmentFilterForm from './components/apartment/ApartmentFilterForm.vue';
import AppFooter from './components/shared/Footer.vue';
import AppHeader from './components/shared/Header.vue';

export default {
  name: 'App',
  components: {
    BaseContainer,
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    AppFooter,
    AppHeader,
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.apartment-filter {
  margin-bottom: 39px;
  padding-top: 120px;
}

.content{
  flex-grow: 1;
}
</style>
