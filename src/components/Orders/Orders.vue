<template>
  <div class="orders">
    <Order
      v-for="order in orders"
      :key="order.id"
      :order="order"
      :user="findUserById(order.id)" />
  </div>
</template>

<script>
import Order from './Order/Order';
import users from '../../data/users';

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
  methods: {
    findUserById(id) {
      return this.users.find(order => order.id === id);
    }
  }
}
</script>

<style scoped lang="scss">
.orders {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: none;
  }
}
</style>
