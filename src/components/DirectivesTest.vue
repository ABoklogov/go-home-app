<template>
  <div v-if="isVisible">
    <h1 v-show="false">Directives title</h1>

    <ul>
      <template v-for="fruit in fruits">
        <li v-if="fruit === 'banana'" v-bind:key="fruit">
          {{fruit}}
        </li>
      </template>
    </ul>

    <ul>
      <li v-for="(car, key) in cars" v-bind:key="key"> {{key}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "DirectivesTest",

    data() {
      return {
        isVisible: true,
        fruits: ['kiwi', 'banana', 'apple'],
        cars: {
          bmw: {
            color: 'red',
          },
          audi: {
            color: 'black',
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>