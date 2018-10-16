<template>
  <div class="orders">
    <Order
      v-for="order in filteredOrders"
      :key="order.id"
      :order="order"
      :user="findUserById(order.id)" />
  </div>
</template>

<script>
import Order from './Order/Order';
import users from '../../data/users';
import { mapGetters } from 'vuex';

export default {
  name: 'Orders',
  components: {
    Order
  },
  props: {
    orders: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      users
    }
  },
  computed: {
    ...mapGetters([
      'pricesRange',
      'gramsRange'
    ]),
    filteredOrders() {
      // const ordersFilteredByExchangeRate = this.filterOrdersBy('exchange_rate');

      // return this.filterByRange(ordersFilteredByExchangeRate);
      const ordersFilteredByPricesRange = this.filter(this.orders, 'exchange_rate', 'pricesRange');

      return this.filter(ordersFilteredByPricesRange, 'range', 'gramsRange');
    }
  },
  methods: {
    findUserById(id) {
      return this.users.find(order => order.id === id);
    },
    // filterOrdersBy(prop) {
    //   const range = this.pricesRange;
    //
    //   return this.orders.filter(order => {
    //     return order[prop] >= range[0] && order[prop] <= range[range.length -1];
    //   })
    // },
    // filterByRange(arr) {
    //   const range = this.gramsRange;
    //
    //   return arr.filter(obj => {
    //     return obj.range[0] >= range[0] && obj.range[obj.range.length-1] <= range[range.length -1];
    //   })
    // },
    checkSmallest(prop) {
      return prop[0] ? prop[0] : prop;
    },
    checkHighest(prop) {
      const last = prop[prop.length - 1];
      return last ? last : prop;
    },
    filter(arr, prop, filterBy) {
      const range = this[filterBy];

      return arr.filter(obj => {
        return this.checkSmallest(obj[prop]) >= range[0] && this.checkHighest(obj[prop]) <= range[range.length -1];
      })
    }
  }
}
</script>

<style scoped lang="scss">
.orders {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: none;
  }

  /*@media (max-width: 768px) {*/
    /*grid-template-columns: none;*/
  /*}*/
}
</style>
