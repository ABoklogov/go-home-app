<template>
    <input :value="value" @:input="input">
</template>

<script>
  export default {
    name: "CustomInput",

    props: {
      value: {
        type: [String, Number],
        default: ''
      }
    },

    methods: {
      input(e) {
        this.$emit("input", e.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>