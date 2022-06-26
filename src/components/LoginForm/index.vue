<template>
  <Form @submit.prevent="handleSubmit" class="login-form">
    <CustomInput name="email" :changeValue="changeEmail" />
    <CustomInput name="password" :changeValue="changePassword" />
    <MyButton type="submit">Click Me</MyButton>
  </Form>
</template>

<script>
import Form from '../shared/CustomForm';
import CustomInput from '../shared/CustomInput.vue';
import MyButton from '../shared/MyButton.vue';

export default {
  name: 'LoginForm',
  components: {
    Form,
    CustomInput,
    MyButton,
  },
  data() {
    return {
      formData: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.formData);
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