<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="form-left-box">
      <CustomSelect :items="sities" :changeCity="changeCity" class="form__select" />
      <CustomInput :value="price" :changeValue="changePrice" :errorMessage="'Не должно быть пустым'" :rules="rules" placeholder="Цена, от"
        v-model="price" />
    </div>

    <SubmitButton class="form__submit" type="submit">
      Подбор жилья
    </SubmitButton>
  </form>
</template>

<script>
import CustomSelect from '../shared/CustomSelect.vue';
import CustomInput from '../shared/CustomInput.vue';
import SubmitButton from '../shared/MyButton.vue';
import { isRequered, charLimit, numberCheck } from '../../utils/validationRules.js';

export default {
  name: 'ApartmentsFilterForm',
  components: {
    CustomSelect,
    CustomInput,
    SubmitButton,
  },
  data() {
    return {
      city: '',
      price: '',
    };
  },
  computed: {
    // набор правил для компонента CustomInput
    rules() {
      return [isRequered, charLimit(10), numberCheck];
    },
    sities() {
      return [
        { value: '', label: 'Город', selected: true },
        'Kyiv',
        'Odesa',
        'Poltava',
        'Kharkiv',
        'Dnipro',
        'Lviv',
        'Kherson',
        'Mariupol',
      ];
    },
  },

  methods: {
    handleSubmit() {
      this.$emit('submitForm', { city: this.city, price: this.price });
    },
    changeCity(e) {
      this.city = e.target.value;
    },
    changePrice(e) {
      this.price = e.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__select {
    margin-right: 31px;
  }

  &__submit {
    width: 220px;
    border: none;
    font-family: Montserrat;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 11px 35px;
    color: #ffffff;
  }
}

.form-left-box {
  display: flex;
  align-items: center;
}
</style>
