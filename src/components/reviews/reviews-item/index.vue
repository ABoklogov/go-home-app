<template>
  <section class="reviews-item">
    <ReviewsHeading 
      :author="review.author" 
      :rating="review.rating"
    />
    <p class="reviews-item__content">{{review.content}}</p>
  </section>
</template>

<script>
import ReviewsHeading from './ReviewsHeading.vue';

  export default {
    name: 'ReviewsItem',  
    components: {
      ReviewsHeading,
    },
    props: {
      review: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>