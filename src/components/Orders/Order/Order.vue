<template>
  <div class="order">

    <section class="order__box">
      <h3 class="order__title">Order info</h3>
      <div class="order__row">
        <strong class="order__highlighted">Exchange Rate:</strong>
        {{ order.exchange_rate }}
      </div>
      <div class="order__row">
        <strong class="order__highlighted">Range:</strong>
        from
        <strong class="order__highlighted order__highlighted--medium">
          {{ order.range[0] | addMeasure }}
        </strong>
        to
        <strong class="order__highlighted order__highlighted--medium">
          {{ order.range[order.range.length -1] | addMeasure }}
        </strong>
      </div>
    </section>

    <section class="order__box">
      <h3 class="order__title">User info</h3>
      <div class="order__row">
        <strong class="order__highlighted">Name:</strong>
        {{ user.name }}
      </div>
      <div class="order__row">
        <strong class="order__highlighted">Rating:</strong>
        {{ user.rating }}
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Order',
  filters: {
    addMeasure(value) {
      return `${value}g`;
    }
  },
  props: {
    order: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
$borderColor: #eaeaea;

.order {
  min-width: 0;
  background-color: #fff;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, .1);
  border-radius: 10px;
  padding: 20px;
  border: 1px solid $borderColor;

  &__title {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 22px;
    text-align: center;
  }

  &__box {
    & + & {
      border-top: 1px solid $borderColor;
      margin-top: 20px;
      padding-top: 20px;
    }
  }

  &__row {
    & + & {
      margin-top: 10px;
    }
  }

  &__highlighted {
    &--medium {
      font-weight: 500;
    }
   }
}
</style>
