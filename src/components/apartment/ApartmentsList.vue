<template>
  <BaseContainer>
    <div class="apartments-list">
      <ApartmentsItem
        v-for="{id, descr, rating, imgUrl, price} in items"
        :key="id"
        :descr="descr"
        :rating="rating"
        :imgSrc="imgUrl"
        :price="price"
      />
    </div>
  </BaseContainer>
</template>

<script>
import BaseContainer from '../shared/BaseContainer.vue';
import ApartmentsItem from './ApartmentsItem.vue';

  export default {
    name: 'ApartmentsList',

    components: {
      ApartmentsItem,
      BaseContainer,
    },

    props: {
      items: [],
    }

  }
</script>

<style lang="scss" scoped>
  .apartments-list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
}
</style>