<template>
  <AuthContainer class="login">
    <CustomTitle class="login__title">Логин</CustomTitle>
    <CustomForm ref="form" @submit.prevent="handleSubmit" class="login-form">
      <div class="login__input">
        <CustomInput name="email" :value="formData.email" :changeValue="changeEmail" :rules="emailRules" />
      </div>

      <CustomInput name="password" :value="formData.password" :changeValue="changePassword" :rules="passwordRules" class="login__input" />

      <MyButton type="submit" class="login__btn">Click Me</MyButton>
    </CustomForm>
  </AuthContainer>
</template>

<script>
import CustomForm from '../../shared/CustomForm';
import CustomInput from '../../shared/CustomInput.vue';
import MyButton from '../../shared/MyButton.vue';
import AuthContainer from '../../auth/AuthContainer.vue';
import CustomTitle from '../../shared/CustomTitle.vue';
import { emailValidation, passwordValidation, isRequered } from '../../../utils/validationRules';

export default {
  name: 'LoginForm',
  components: {
    CustomForm,
    CustomInput,
    MyButton,
    AuthContainer,
    CustomTitle,
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
.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>