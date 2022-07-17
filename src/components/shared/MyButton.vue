<template>
  <button :type="type" class="btn" :class="{ 'btn--outlined': outlined }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',

  props: {
    type: {
      type: String,
      default: 'button',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  display: inline-block;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  background: #ff662d;
  color: #fff;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;
  cursor: pointer;
  transition: background-color 0.4s, color 0.4s;

  &:hover {
    background: #fff;
    color: #ff662d;
    border: 1px solid #ff662d;
  }

  &--outlined {
    background: #fff;
    border: 2px solid #ff662d;
    box-shadow: none;
  }
}
</style>
