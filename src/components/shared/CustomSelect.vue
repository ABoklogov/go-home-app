<template>
  <select class="select" v-on="listeners">
    <option v-for="item in formaredItems" :key="item.value" :value="item.value">
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'CustomSelect',

  props: {
    items: {
      type: Array,
      requeired: true,
    },
  },

  computed: {
    listeners() {
      return {
        ...this.listeners,
        input: event => this.$emit('input', event.target.value),
      };
    },
    formaredItems() {
      return this.items.map(item =>
        typeof item === 'object' ? item : { value: item, label: item },
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.select {
  min-width: 220px;
  min-height: 44px;
  background: #ffffff;
  border: 2px solid $main-color;
  padding: 11px 20px;
}
</style>
