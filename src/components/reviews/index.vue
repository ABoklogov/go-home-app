<template>
  <section class="reviews">
    <div class="reviews__heading">
      <h1 class="reviews__title">Суммарный рейтинг</h1>
      <div class="reviews__rating">
        <span>{{ mountOfReviews }} отзыв(ов)</span>
        <StarRating :rating="totalRating"/>
      </div>
    </div>

    <ReviewsItem 
      v-for="review in reviews" 
      :key="review.author" 
      :review="review"
    />

    <button class="reviews__show-more">Читать еще...</button>
  </section>
</template>

<script>
import ReviewsItem from './reviews-item';
import StarRating from '../StarRating.vue';

  export default {
    name: "ReviewsSection",
    components: {
      ReviewsItem,
      StarRating,
    },
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },
    computed: {
      mountOfReviews() {
        return this.reviews.length;
      },
      totalRating() {
        const total = this.reviews.reduce((acc, el) => acc + el.rating, 0);
        return total / this.mountOfReviews;
      },
    }
  }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
.reviews {
  margin-top: 20px;
  background: $card-bg;
  padding: 0 2px;
  &__heading {
    padding: 20px 20px 10px;
  }
  &__title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  &__rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__show-more {
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 12px;
    font-family: inherit;
    font-size: 16px;
  }
}
</style>