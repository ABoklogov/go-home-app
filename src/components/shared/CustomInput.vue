<template>
  <div class="wrapper-input">
    <input 
      class="custom-input" 
      :class="!isValid && 'custom-input--error'" 
      @input="changePrice" 
      :value="value" 
      v-bind="$attrs"
    />
    <span v-if="!isValid" class="custom-input__error">{{ errorMessage }}</span>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  data() {
    return {
      isValid: true,
    }
  },
  inheritAttrs: false,
  props: {
    // placeholder: {
    //   type: String,
    //   default: '',
    // },
    changePrice: {
      type: Function,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
    rules: {
      type: Array,
      default: () => [],
    }
  },
  watch: {
    value(value) {
      this.validate(value);
      console.log(value);
    }
  },
  methods: {
    validate(value) {
      this.isValid = this.rules.every(rule => rule(value));
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

// .input {
//   width: 220px;
//   height: 44px;
//   background: #ffffff;
//   border: 2px solid $main-color;

//   font-family: Montserrat;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 18px;
//   line-height: 22px;
//   text-align: left;
//   color: #000000;
//   padding: 10px 32px;
// }

.wrapper-input {
  position: relative;
  display: inline-flex;
}
.custom-input {
  height: 40px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;
  &::placeholder {
    color: inherit;
  }
  &--error {
    border-color: red;
  }
  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: red;
    line-height: 1.3;
  }
}
</style>
