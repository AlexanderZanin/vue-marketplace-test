<template>
  <div id="app">
    <TheHeader />
    <div class="app-container">
      <section class="filters">
        <h2>Filters:</h2>
        <RangeFilter />
      </section>
      <Orders :orders="orders" />
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
  padding: 40px 5vw;
}
</style>
