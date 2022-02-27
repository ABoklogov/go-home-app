<template>
  <h1>{{title}}</h1>
  <!-- <Button v-on:click='increment' outlined>Click my</Button> -->
  <StarRating :rating="4.5"/>
  <!-- <DirectivesTest/> -->
</template>

<script>

// import Button from './components/Button.vue'
// import DirectivesTest from './components/DirectivesTest.vue'
import StarRating from './components/StarRating.vue';

export default {
  name: 'App',

  components: {
    // Button,
    StarRating,
    // DirectivesTest,
  },

  data() {
    return {
      amountOfClicks: 0
      }
  },

  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`
    }
  },

  methods: {
    increment() {
     this.amountOfClicks += 1
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
