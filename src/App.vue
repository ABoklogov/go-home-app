<template>
    <div class="content">
      <AppHeader/>
      <router-view></router-view>
    </div>
    <AppFooter/>
</template>

<script>
import AppFooter from './components/shared/Footer.vue';
import AppHeader from './components/shared/Header.vue';

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
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
.content{
  flex-grow: 1;
}
</style>
