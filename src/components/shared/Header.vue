<template>
    <header class="header">
        <!-- <BaseContainer> -->
            <Logo/>
        <!-- </BaseContainer> -->
    </header>
</template>

<script>
// import BaseContainer from './BaseContainer.vue';
import Logo from './Logo.vue';

    export default {
        name: "AppHeader",
        components: {
            // BaseContainer,
            Logo,
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

    .header {
        padding: 16px 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-color: $secondary-color;
        height: 60px;
    }
</style>