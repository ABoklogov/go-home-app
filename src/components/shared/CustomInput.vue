<template>
  <div class="wrapper-input">
    <input class="custom-input" :class="!isValid && 'custom-input--error'" @input="changeValue" v-bind="$attrs" :value="value" />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  data() {
    return {
      isValid: true,
      error: '',
    }
  },
  inject: {
    form: {
      default: null,
    }
  },
  inheritAttrs: false,
  props: {
    changeValue: {
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
  //при маунте регистрируем инпут в компоненте формы CustomForm
  mounted() {
    if (!this.form) return;
    this.form.registerInput(this);
  },
  //при размонтировании компонента удаляем инпут из компонента CustomForm
  beforeUnmount() {
    if (!this.form) return;
    this.form.unRegisterInput(this);
  },
  //следим за вводом данных в инпут и проводим валидацию
  watch: {
    value() {
      this.validate();
    }
  },
  methods: {
    //метод валидации входных данных
    validate() {
      return this.isValid = this.rules.every(rule => {
        const { hasPassed, message } = rule(this.value);

        if (!hasPassed) {
          this.error = message || this.errorMessage
        }

        return hasPassed
      });
    },
    // метод обнуления инпута
    reset() {
      this.$emit('input', '');
    },
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.wrapper-input {
  position: relative;
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
