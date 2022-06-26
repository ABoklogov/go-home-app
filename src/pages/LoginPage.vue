<template>
  <main class="login-page">
    <BaseContainer>
      <LoginForm />
    </BaseContainer>
  </main>
</template>

<script>
import BaseContainer from '../components/shared/BaseContainer.vue';
import LoginForm from '../components/LoginForm';

export default {
  name: 'LoginPage',
  components: {
    BaseContainer,
    LoginForm,
  }
}
</script>

<style lang="scss" scoped>
</style>