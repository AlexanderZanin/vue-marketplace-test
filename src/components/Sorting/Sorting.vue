<template>
  <ul class="sorting">
    <li class="sorting__item">
      <label>
        <input type="radio" value="priceAsc" v-model="sortBy">
        From Low Price to High Price
      </label>
    </li>
    <li class="sorting__item">
      <label>
        <input type="radio" value="priceDesc" v-model="sortBy">
        From High Price to Low Price
      </label>
    </li>
    <li class="sorting__item">
      <label>
        <input type="radio" value="ratingAsc" v-model="sortBy">
        From Low Rating to High Rating
      </label>
    </li>
    <li class="sorting__item">
      <label>
        <input type="radio" value="ratingDesc" v-model="sortBy">
        From High Rating to Low Rating
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Sorting',
  computed: {
    sortBy: {
      get () {
        return this.$store.state.sortBy
      },
      set (value) {
        this.$store.commit('setSortBy', value)
      }
    }
  },
}
</script>

<style scoped lang="scss">
.sorting {
  display: flex;
  &__item {
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
}
</style>
