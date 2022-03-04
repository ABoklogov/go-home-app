<template>
  <select class="select" @change="changeCity">
    <option
      v-for="item in formaredItems"
      :key="item.value"
      :value="item.value"
      :selected="item.selected"
    >
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
    changeCity: {
      type: Function,
      requeired: true,
    },
  },

  computed: {
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
  width: 220px;
  height: 44px;
  background: #ffffff;
  border: 2px solid $main-color;
  padding: 9px 20px;

  font-family: Montserrat;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}
</style>
