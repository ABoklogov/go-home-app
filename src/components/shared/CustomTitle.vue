<template>
  <component :is="tagName" class="title">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'CustomTitle',
  props: {
    level: {
      type: Number,
      default: 1,
    }
  },
  computed: {
    tagName() {
      return `h${this.level}`;
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0.5em;
}
</style>