<template>
  <section class="range-filter">
    <h3 class="range-filter__title">
      <slot name="title"></slot>
    </h3>
    <VueSlider
      v-model="rangeSettings.value"
      :min="min"
      :max="max"
      :formatter="rangeSettings.formatter" />
  </section>
</template>

<script>
import VueSlider from 'vue-slider-component';

export default {
  name: 'RangeFilter',
  components: {
    VueSlider
  },
  props: {
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    measure: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      rangeSettings: {
        value: [ this.min, this.max ],
        min: 2,
        max: 500,
        formatter: `{value} ${this.measure}`
      }
    }
  }
}
</script>

<style scoped lang="scss">
.range-filter {
  padding: 40px 20px;
  border-top: 1px solid #ccc;
  &__title {
    margin-top: 0;
    margin-bottom: 40px;
  }
}
</style>
