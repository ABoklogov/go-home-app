<template>
  <div>
    <h2>{{ text }}</h2>

    <CustomSelect :items="['name', 'label', 'salary']" />
    <CustomInput :input="input" />

    <ApartmentsList :items="apartmens">
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
  </div>
</template>

<script>
// import Button from './components/Button.vue'
// import StarRating from './components/StarRating.vue';
import ApartmentsList from './components/apartment/ApartmentsList.vue';
import apartmens from './components/apartment/apartment';
import ApartmentsItem from './components/apartment/ApartmentsItem.vue';
import CustomInput from './components/shared/CustomInput.vue';
import CustomSelect from './components/shared/CustomSelect.vue';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    CustomInput,
    CustomSelect,
  },

  data() {
    return {
      apartmens,
      text: '',
    };
  },

  computed: {},

  methods: {
    input(e) {
      this.text = e.target.value;
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
</style>
