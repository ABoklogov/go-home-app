<template>
    <div>
      <ApartmentsList :items="apartmens"/>
    </div>
</template>

<script>

// import Button from './components/Button.vue'
// import StarRating from './components/StarRating.vue';
import ApartmentsList from './components/apartment/ApartmentsList.vue';
import apartmens from './components/apartment/apartment';

export default {
  name: 'App',

  components: {
    ApartmentsList,
  },

  data() {
    return {
        apartmens,
      }
  },

  computed: {
  
  },

  methods: {
    
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
