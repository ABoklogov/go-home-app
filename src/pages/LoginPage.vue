<template>
  <main class="login-page">
    <AuthSection>
      <LoginForm />
    </AuthSection>
  </main>
</template>

<script>
import AuthSection from '../components/auth/AuthSection.vue';
import LoginForm from '../components/auth/LoginForm';

export default {
  name: 'LoginPage',
  components: {
    AuthSection,
    LoginForm,
  }
}
</script>

<style lang="scss" scoped>
</style>