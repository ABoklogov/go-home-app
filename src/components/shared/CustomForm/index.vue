<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'CustomForm',
  provide() {
    return {
      form: this,
    }
  },
  data() {
    return {
      inputs: [],
    }
  },
  methods: {
    //метод регистрации инпута в форме
    registerInput(input) {
      this.inputs.push(input);
    },
    //метод удаления инпута из формы
    unRegisterInput(input) {
      this.inputs.filter(item => item !== input);
    },
    // метод валидации всех инпутов в форме
    validate() {
      return this.inputs.reduce((isValid, input) => {
        const isInputValid = input.validate()

        return isValid && isInputValid
      }, true);
    },
    // метод обнуления всех инпутов в форме
    reset() {
      this.inputs.forEach(input => input.reset());
    }
  }
}
</script>

<style lang="scss" scoped>
</style>