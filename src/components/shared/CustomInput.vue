<template>
  <input class="input" type="text" @input="input" />
</template>

<script>
export default {
  name: 'CustomInput',

  props: {
    input: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.input {
  min-height: 44px;
  min-width: 349px;
  background: #ffffff;
  border: 2px solid $main-color;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  color: #000000;
  padding: 10px 32px;
}
</style>
