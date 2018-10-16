<template>
  <div id="app">
    <TheHeader />
    <div class="app-container">

      <section class="filters-section">
        <h2>Filters</h2>
        <RangeFilter
          class="filters-section__box"
          :min="getMin(prices)"
          :max="getMax(prices)"
          measure="$">
          <template slot="title">Filter by Exchange Rate:</template>
        </RangeFilter>

        <RangeFilter
          class="filters-section__box"
          :min="getMin(grams)"
          :max="getMax(grams)"
          measure="g">
          <template slot="title">Filter by Weight:</template>
        </RangeFilter>
      </section>

      <section class="orders-section">
        <h2>Orders</h2>
        <Orders :orders="orders" />
      </section>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader/TheHeader';
import RangeFilter from './components/Filters/RangeFilter';
import Orders from './components/Orders/Orders';
import orders from './data/orders.json';

export default {
  name: 'app',
  components: {
    TheHeader,
    Orders,
    RangeFilter
  },
  data() {
    return {
      orders
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

<style lang="scss">
body {
  font: 300 18px/1.3 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  background-color: #fafafa;
}
.app-container {
  padding: 40px;
  //display: grid;
  //grid-template-columns: 20% 75%;
  //justify-content: space-between;
}
.filters-section {
  margin-bottom: 70px;
  &__box {
    & + & {
      margin-top: 30px;
    }
  }
}
</style>
