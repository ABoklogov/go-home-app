<template>
  <AuthContainer class="login">
    <CustomTitle class="login__title">Логин</CustomTitle>
    <CustomForm ref="form" @submit.prevent="handleSubmit" class="login-form">
      <div class="login__input">
        <CustomInput
          name="email"
          type="email"
          v-model:value="formData.email"
          :rules="emailRules"
          class="login__input"
          placeholder="Email"
        />
      </div>

      <CustomInput
        name="password"
        type="password"
        v-model:value="formData.password"
        :rules="passwordRules"
        class="login__input"
        placeholder="Password"
      />

      <MyButton type="submit" class="login__btn"> Вход </MyButton>
    </CustomForm>
  </AuthContainer>
</template>

<script>
import CustomForm from '../../shared/CustomForm';
import CustomInput from '../../shared/CustomInput.vue';
import MyButton from '../../shared/MyButton.vue';
import AuthContainer from '../../auth/AuthContainer.vue';
import CustomTitle from '../../shared/CustomTitle.vue';
import {
  emailValidation,
  passwordValidation,
  isRequered,
} from '../../../utils/validationRules';
import { loginUser } from '../../../services/auth.services';

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
      },
    };
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
    },
  },
  methods: {
    async handleSubmit() {
      const isFormValid = this.$refs.form.validate();

      if (isFormValid) {
        try {
          const data = await loginUser(this.formData);
          console.log('🚀 ~ handleSubmit ~ data', data);
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
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