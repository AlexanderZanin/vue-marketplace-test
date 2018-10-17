<template>
  <div class="filters">
    <RangeFilter
      class="filters__box"
      :min="getMin(prices)"
      :max="getMax(prices)"
      statePropertyToSet="pricesRange"
      measure="$">
      <template slot="title">Filter by Exchange Rate:</template>
    </RangeFilter>

    <RangeFilter
      class="filters__box"
      :max="getMax(grams)"
      statePropertyToSet="gramsRange"
      measure="g">
      <template slot="title">Filter by Weight:</template>
    </RangeFilter>
  </div>
</template>

<script>
import RangeFilter from './RangeFilter';

export default {
  name: 'Filters',
  components: {
    RangeFilter
  },
  props: {
    orders: {
      type: Array,
      required: true
    }
  },
  computed: {
    prices() {
      return this.getArrayOfPropertyValues(this.orders, 'exchange_rate');
    },
    grams() {
      return [].concat(...this.getArrayOfPropertyValues(this.orders, 'range'));
    }
  },
  methods: {
    getArrayOfPropertyValues(arr, prop) {
      return arr.map(obj => obj[prop]);
    },
    getMin(arr) {
      return Math.min(...arr);
    },
    getMax(arr) {
      return Math.max(...arr);
    }
  }
}
</script>

<style scoped lang="scss">
.filters {
  margin-bottom: 70px;
  display: flex;
  justify-content: space-between;
  &__box {
    flex-basis: 45%;
    & + & {
      margin-left: 30px;
    }
  }
}
</style>
