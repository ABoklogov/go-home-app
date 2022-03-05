<template>
  <div class="apartments-list">
    <slot name="title"></slot>
    <template v-for="apartment in items">
      <slot name="apartment" :apartment="apartment"></slot>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ApartmentsList',

  components: {},

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
</style>
