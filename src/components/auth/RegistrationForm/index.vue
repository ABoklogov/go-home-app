<template>
  <AuthContainer class="registration">
    <CustomTitle class="registration__title">Логин</CustomTitle>
    <CustomForm
      ref="form"
      @submit.prevent="handleSubmit"
      class="registration-form"
    >
      <div class="registration__input">
        <CustomInput
          name="name"
          type="name"
          v-model:value="formData.name"
          :rules="nameRules"
          placeholder="Name"
        />
      </div>
      <div class="registration__input">
        <CustomInput
          name="email"
          type="email"
          v-model:value="formData.email"
          :rules="emailRules"
          placeholder="Email"
        />
      </div>
      <div class="registration__input">
        <CustomInput
          name="password"
          type="password"
          v-model:value="formData.password"
          :rules="passwordRules"
          placeholder="Password"
        />
      </div>
      <CustomInput
        name="password"
        type="password"
        v-model:value="formData.confirmPassword"
        :rules="confirmPasswordRules"
        class="registration__input"
        placeholder="Confirm password"
      />

      <MyButton type="submit" class="registration__btn"> Вход </MyButton>
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
  matchCheck,
} from '../../../utils/validationRules';
import { registrationUser } from '../../../services/auth.services';

export default {
  name: 'RegistrationForm',
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
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequered,
        matchCheck,
      };
    },
    nameRules() {
      return [this.rules.isRequered];
    },
    emailRules() {
      return [this.rules.isRequered, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequered];
    },
    confirmPasswordRules() {
      return [this.rules.matchCheck(this.formData.password)];
    },
  },
  methods: {
    async handleSubmit() {
      const form = this.$refs.form;
      const isFormValid = form.validate();
      const { name, email, password } = this.formData;

      if (isFormValid) {
        try {
          const data = await registrationUser({ name, email, password });
          form.reset();
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
.registration {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(15, 29, 45, 0.5);
    z-index: -1;
  }

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