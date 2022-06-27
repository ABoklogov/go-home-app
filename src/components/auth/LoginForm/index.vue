<template>
  <AuthContainer>
    <CustomForm ref="form" @submit.prevent="handleSubmit" class="login-form">
      <CustomInput name="email" :value="formData.email" :changeValue="changeEmail" :rules="emailRules" />
      <CustomInput name="password" :value="formData.password" :changeValue="changePassword" :rules="passwordRules" />
      <MyButton type="submit">Click Me</MyButton>
    </CustomForm>
  </AuthContainer>
</template>

<script>
import CustomForm from '../../shared/CustomForm';
import CustomInput from '../../shared/CustomInput.vue';
import MyButton from '../../shared/MyButton.vue';
import AuthContainer from '../../auth/AuthContainer.vue';
import { emailValidation, passwordValidation, isRequered } from '../../../utils/validationRules';

export default {
  name: 'LoginForm',
  components: {
    CustomForm,
    CustomInput,
    MyButton,
    AuthContainer,
  },
  data() {
    return {
      formData: {
        email: '',
        password: '',
      }
    }
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequered,
      };
    },
    emailRules() {
      return [this.rules.isRequered, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequered];
    }
  },
  methods: {
    handleSubmit() {
      const isFormValid = this.$refs.form.validate();

      if (isFormValid) console.log(this.formData);
    },
    changeEmail(e) {
      this.formData.email = e.target.value;
    },
    changePassword(e) {
      this.formData.password = e.target.value;
    },
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  margin-bottom: 39px;
  padding-top: 120px;
}
</style>