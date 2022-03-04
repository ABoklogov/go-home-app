<template>
  <button :type="type" :class="{ btn: true, 'btn--outlined': outlined }">
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
  width: 349px;
  height: 49px;
  background: #ff662d;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &--outlined {
    background: #fff;
    border: 2px solid #ff662d;
    box-shadow: none;
  }
}
</style>
