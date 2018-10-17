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
      'gramsRange',
      'sortBy'
    ]),
    filteredOrders() {
      const ordersFilteredByPricesRate = this.filterOrdersByExchangeRate(this.sortedOrders);

      return this.filterByRange(ordersFilteredByPricesRate);
    },
    sortedOrders() {
      switch (this.sortBy) {
        case 'priceAsc':
          return this.sortArrayBy('exchange_rate');
        case 'priceDesc':
          return this.sortArrayBy('exchange_rate').reverse();
        case 'ratingAsc':
          return this.sortArrayBy('rating');
        case 'ratingDesc':
          return this.sortArrayBy('rating').reverse();
        default:
          return this.orders;
      }
    }
  },
  methods: {
    findUserById(id) {
      return this.users.find(order => order.id === id);
    },
    filterOrdersByExchangeRate(arr) {
      const range = this.pricesRange;

      return arr.filter(order => {
        return order.exchange_rate >= range[0] && order.exchange_rate <= range[range.length -1];
      })
    },
    filterByRange(arr) {
      return arr.filter(obj => {
        return obj.range[obj.range.length - 1] <= this.gramsRange;
      })
    },
    sortArrayBy(prop) {
      return this.orders.sort((a, b) => {
        const valA = this.checkPropertyExistence(a, prop);
        const valB = this.checkPropertyExistence(b, prop);

        return valA - valB;
      });
    },
    checkPropertyExistence(obj, prop) {
      // if property doesn't exist it will be finding in the users objects
      return obj[prop] ? obj[prop] : this.findUserById(obj.id)[prop];
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
}
</style>
