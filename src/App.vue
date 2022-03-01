<template>
    <div>
      <h2>{{ text }}</h2>

      <CustomInput v-model="text"/>

      <ApartmentsList :items="apartmens">
      <template v-slot:title></template>
        <template v-slot:apartment="{apartment}">
          <ApartmentsItem
            v-bind:key="apartment.id"
            v-bind:descr="apartment.descr"
            v-bind:rating="apartment.rating"
            v-bind:imgSrc="apartment.imgUrl"
            v-bind:price="apartment.price"
            v-on:click.enter="handleClick"
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

export default {
  name: 'App',

  components: {
    ApartmentsList,
    ApartmentsItem,
    CustomInput,
  },

  data() {
    return {
        apartmens,
        text: "",
      }
  },

  computed: {
  
  },

  methods: {
    handleClick() {
    
    }
  }
}
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
