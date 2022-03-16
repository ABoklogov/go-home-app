<template>
  <div id="app">
    <div class="content">
      <AppHeader/>
      <BaseContainer>
        <ApartmentFilterForm class="apartment-filter" @submitForm="filter" />

        <p v-if="!filteredApartmens.length">Ничего не найдено</p>

        <ApartmentsList v-else :items="filteredApartmens">
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
<<<<<<< Updated upstream
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
=======
    filter(obj) {
      this.filters.city = obj.city;
      this.filters.price = obj.price;
      console.log(obj);
>>>>>>> Stashed changes
    },

    filterByCityName(apartmens) {
      if (!this.filters.city) return apartmens;
<<<<<<< Updated upstream

      return apartmens.filter(
        apartment => apartment.location.city === this.filters.city,
      );
=======
      
      return apartmens.filter(apartment => {
        return apartment.location.city === this.filters.city;
      });
>>>>>>> Stashed changes
    },

    filterByPrice(apartmens) {
      if (!this.filters.price) return apartmens;
<<<<<<< Updated upstream

      return apartmens.filter(
        apartment => apartment.price >= this.filters.price,
      );
=======
      
      return apartmens.filter(apartment => {
        return apartment.price >= this.filters.price;
      });
>>>>>>> Stashed changes
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
