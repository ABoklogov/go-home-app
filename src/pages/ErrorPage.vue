<template>
  <section class="error">
    <h1 class="error__title">Страница не найдена!</h1>
  </section>
</template>

<script>
  export default {
    name: 'ErrorPage',  
  }
</script>

<style lang="scss" scoped>
.error {
&__title {
    font-size: 60px;
    text-align: center;
    margin-top: 100px;
  }
}
</style>