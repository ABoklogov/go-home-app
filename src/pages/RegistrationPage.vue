<template>
  <main class="registration-page">
    <AuthSection>
      <RegistrationForm />
    </AuthSection>
  </main>
</template>

<script>
import AuthSection from '../components/auth/AuthSection.vue';
import RegistrationForm from '../components/auth/RegistrationForm';

export default {
  name: 'RegistrationPage',
  components: {
    AuthSection,
    RegistrationForm,
  },
};
</script>

<style lang="scss" scoped>
</style>