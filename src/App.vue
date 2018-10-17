<template>
  <div id="app">
    <TheHeader />
    <div class="app-container">

      <Filters :orders="orders" />

      <div class="sorting">
        <Sorting />
      </div>

      <section class="orders-section">
        <h2>Orders</h2>
        <Orders :orders="orders" />
      </section>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader/TheHeader';
import Filters from './components/Filters/Filters';
import Sorting from './components/Sorting/Sorting';
import Orders from './components/Orders/Orders';
import orders from './data/orders.json';

export default {
  name: 'app',
  components: {
    TheHeader,
    Filters,
    Sorting,
    Orders
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
  padding: 40px;
  //display: grid;
  //grid-template-columns: 20% 75%;
  //justify-content: space-between;
}
</style>
