<template>
    <button v-bind:type="type" :class="{'btn': true, 'btn--outlined': outlined}">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Button',

        props: {
            type: {
              type: String,
              default: "button"
            },
            outlined: {
              type: Boolean,
              default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn {
    width: 349px;
    height: 49px;
    background: #FF662D;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      &--outlined {
        background: #FFF;
        border: 2px solid #FF662D;
        box-shadow: none;
      }
    }
</style>