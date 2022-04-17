<template>
  <article class="apartment-main-info">
    <div class="apartment-main-info__heading">
      <h1 class="apartment-main-info__title">
      
        {{apartments.title}}
      </h1>
      <StarRating :rating="apartments.rating"/>
    </div>
    <img :src="require(`@/assets${apartments.imgUrl}`)" alt="" class="apartment-main-info__photo" width="730">
    <p class="apartment-main-info__description">
      {{apartments.descr}}
    </p>
  </article>
</template>

<script>
import StarRating from '../StarRating.vue';

  export default {
    name: 'ApartmentsMainInfo', 
    components: {
      StarRating,
    },
    props: {
      apartments: {
        type: Object,
        required: true,
      }
    } 
  }
</script>

<style lang="scss" scoped>
.apartment-main-info {
  &__heading {
    display: flex;
  }
  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
    margin-right: 20px;
  }
  &__photo {
    max-width: 100%;
  }
  &__description {
    line-height: 1.3;
    margin-top: 30px;
  }
  &__btn {
    margin-top: 20px;
    text-align: center;
  }
}
</style>